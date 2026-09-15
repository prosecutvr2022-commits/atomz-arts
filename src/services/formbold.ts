/**
 * FormBold Integration Service
 * Securely forwards Student Enquiries and Course Enrollment applications
 * to the academy's FormBold endpoint (https://formbold.com).
 */

export interface FormBoldSubmission {
  studentName: string;
  parentName?: string;
  phone: string;
  email?: string;
  whatsapp?: string;
  courseName: string;
  courseTamilName?: string;
  courseCategory?: string;
  age?: string;
  batchPreference?: string;
  learningMode?: string;
  message?: string;
  formSource: 'Enquiry / Enrollment Modal' | 'Contact Page Form';
}

export interface FormBoldResult {
  success: boolean;
  message: string;
  isSimulated?: boolean;
}

/**
 * Resolves the full FormBold endpoint URL from environment variables.
 * Handles both plain Form IDs (e.g., "9x12ab") and full URLs (e.g., "https://formbold.com/s/9x12ab").
 */
export function getFormBoldEndpoint(): string | null {
  const raw = (import.meta.env.VITE_FORMBOLD_FORM_ID || '').trim();
  if (!raw) return null;

  if (raw.startsWith('http://') || raw.startsWith('https://')) {
    return raw;
  }

  const cleanId = raw.replace(/^\/?(s\/)?/, '').trim();
  if (!cleanId) return null;

  return `https://formbold.com/s/${cleanId}`;
}

/**
 * Check if a FormBold Form ID has been provided in the environment.
 */
export function isFormBoldConfigured(): boolean {
  return Boolean(getFormBoldEndpoint());
}

/**
 * Submits application details to FormBold.
 * If FormBold is not yet configured, cleanly captures the submission and
 * notifies the developer/admin so the user experience is never blocked.
 */
export async function submitToFormBold(data: FormBoldSubmission): Promise<FormBoldResult> {
  const endpoint = getFormBoldEndpoint();

  // If no FormBold endpoint is configured yet (e.g., during preview before setup)
  if (!endpoint) {
    console.info(
      '%c[FormBold]%c Form submitted successfully (Demo Mode). To receive actual email notifications and store submissions in your FormBold dashboard, set VITE_FORMBOLD_FORM_ID in your environment.',
      'color: #e71e92; font-weight: bold;',
      'color: inherit;'
    );
    console.table({
      'Student Name': data.studentName,
      'Parent / Guardian': data.parentName || 'N/A',
      'Phone': data.phone,
      'Email': data.email || 'N/A',
      'Course': `${data.courseName} ${data.courseTamilName ? `(${data.courseTamilName})` : ''}`,
      'Batch Preference': data.batchPreference || 'N/A',
      'Learning Mode': data.learningMode || 'N/A',
      'Age / Grade': data.age || 'N/A',
      'Notes': data.message || 'None',
      'Source': data.formSource,
    });

    // Simulate network delay for natural UI feedback
    await new Promise((resolve) => setTimeout(resolve, 600));

    return {
      success: true,
      isSimulated: true,
      message: 'Enquiry details recorded! (FormBold endpoint will activate once VITE_FORMBOLD_FORM_ID is added in Settings).'
    };
  }

  try {
    // Construct multi-field form payload for FormBold
    const payload = new FormData();

    // Standard FormBold fields for quick dashboard indexing
    payload.append('name', data.studentName);
    payload.append('phone', data.phone);
    if (data.email) {
      payload.append('email', data.email);
    }

    // Descriptive fields for FormBold email notifications
    payload.append('Student Full Name', data.studentName);
    payload.append('Parent / Guardian Name', data.parentName || 'Not specified');
    payload.append('Contact Phone Number', data.phone);
    payload.append('WhatsApp Number', data.whatsapp || data.phone);
    if (data.email) {
      payload.append('Email Address', data.email);
    }
    payload.append(
      'Selected Course',
      `${data.courseName}${data.courseTamilName ? ` (${data.courseTamilName})` : ''}`
    );
    if (data.courseCategory) {
      payload.append('Course Category', data.courseCategory);
    }
    if (data.age) {
      payload.append('Student Age / Grade', data.age);
    }
    if (data.batchPreference) {
      payload.append('Preferred Batch Timing', data.batchPreference);
    }
    if (data.learningMode) {
      payload.append('Learning Mode', data.learningMode);
    }
    if (data.message) {
      payload.append('Inquiry / Prior Experience Notes', data.message);
    }
    payload.append('Application Form Source', data.formSource);
    payload.append('Academy Name', 'Atomz Arts Academy (Puthu Theru, Thiruvarur)');
    payload.append(
      'Submission Timestamp',
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    );

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: payload
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Your admission enquiry has been successfully delivered to Atomz Arts Academy via FormBold!'
      };
    }

    // Try parsing error response from FormBold
    const errorJson = await response.json().catch(() => null);
    const errorMsg = errorJson?.message || `FormBold returned status ${response.status}`;

    console.error('[FormBold Error]', errorMsg, errorJson);

    return {
      success: false,
      message: errorMsg
    };
  } catch (err: unknown) {
    console.error('[FormBold Network Error]', err);
    const msg = err instanceof Error ? err.message : 'Network error communicating with FormBold';
    return {
      success: false,
      message: msg
    };
  }
}
