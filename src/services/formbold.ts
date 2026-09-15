/**
 * FormBold Integration Service
 * Securely forwards Student Enquiries and Course Enrollment applications
 * to the academy's FormBold endpoint (https://formbold.com/s/3jYbq).
 */

export const DEFAULT_FORMBOLD_FORM_ID = '3jYbq';

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
  endpointUsed?: string;
}

/**
 * Resolves the full FormBold endpoint URL.
 * Defaults to the academy's configured Form ID '3jYbq'.
 */
export function getFormBoldEndpoint(): string {
  const raw = (import.meta.env.VITE_FORMBOLD_FORM_ID || DEFAULT_FORMBOLD_FORM_ID).trim();
  if (!raw) {
    return `https://formbold.com/s/${DEFAULT_FORMBOLD_FORM_ID}`;
  }

  if (raw.startsWith('http://') || raw.startsWith('https://')) {
    return raw;
  }

  const cleanId = raw.replace(/^\/?(s\/)?/, '').trim();
  if (!cleanId) {
    return `https://formbold.com/s/${DEFAULT_FORMBOLD_FORM_ID}`;
  }

  return `https://formbold.com/s/${cleanId}`;
}

export function isFormBoldConfigured(): boolean {
  return true;
}

/**
 * Submits application details to FormBold.
 * Also stores a local backup copy in browser storage so no admission enquiry is ever lost.
 */
export async function submitToFormBold(data: FormBoldSubmission): Promise<FormBoldResult> {
  const endpoint = getFormBoldEndpoint();

  // 1. Safe local storage backup log
  try {
    const rawHistory = localStorage.getItem('atomz_enquiries_backup');
    const history = rawHistory ? JSON.parse(rawHistory) : [];
    history.unshift({
      id: `ENQ-${Date.now()}`,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      ...data
    });
    localStorage.setItem('atomz_enquiries_backup', JSON.stringify(history.slice(0, 50)));
  } catch {
    // ignore storage quota issues
  }

  // 2. Structured JSON payload for FormBold
  const payload = {
    name: data.studentName,
    email: data.email || 'admissions@atomzarts.in',
    phone: data.phone,
    student_name: data.studentName,
    parent_or_guardian: data.parentName || 'Not specified',
    contact_phone: data.phone,
    whatsapp_number: data.whatsapp || data.phone,
    email_address: data.email || 'Not provided',
    course_selected: `${data.courseName}${data.courseTamilName ? ` (${data.courseTamilName})` : ''}`,
    course_category: data.courseCategory || 'Arts & Academics',
    student_age: data.age || 'Not specified',
    preferred_timing: data.batchPreference || 'Flexible',
    learning_mode: data.learningMode || 'Offline (Thiruvarur Academy Campus)',
    inquiry_notes: data.message || 'Student admission & trial class enquiry from website',
    academy_center: 'Atomz Arts Academy, Puthu Theru, Thiruvarur',
    source: data.formSource,
    submission_time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Your admission enquiry has been successfully delivered to Atomz Arts Academy via FormBold!',
        endpointUsed: endpoint
      };
    }

    // Attempt FormData fallback if JSON rejected
    const formData = new FormData();
    Object.entries(payload).forEach(([k, v]) => formData.append(k, String(v)));
    const formResponse = await fetch(endpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData
    });

    if (formResponse.ok) {
      return {
        success: true,
        message: 'Your admission enquiry has been successfully delivered to Atomz Arts Academy via FormBold!',
        endpointUsed: endpoint
      };
    }

    const errJson = await formResponse.json().catch(() => null);
    const errorMsg = errJson?.message || `FormBold responded with status ${response.status}`;
    console.error('[FormBold Error]', errorMsg, errJson);

    return {
      success: false,
      message: errorMsg,
      endpointUsed: endpoint
    };
  } catch (err: unknown) {
    console.error('[FormBold Network Error]', err);
    const msg = err instanceof Error ? err.message : 'Network error communicating with FormBold';
    return {
      success: false,
      message: msg,
      endpointUsed: endpoint
    };
  }
}
