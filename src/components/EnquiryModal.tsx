import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Phone, Send, Sparkles, Clock, Calendar, MessageCircle, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ALL_COURSES, CONTACT_INFO } from '../data/coursesData';
import { Course } from '../types';
import { Logo } from './Logo';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: Course | null;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  selectedCourse
}) => {
  const [formData, setFormData] = useState({
    studentName: '',
    age: '',
    parentName: '',
    phone: '',
    whatsapp: '',
    courseId: selectedCourse ? selectedCourse.id : ALL_COURSES[0].id,
    batchPreference: 'Evening (5:00 PM - 7:30 PM)',
    learningMode: 'Offline (Thiruvarur Academy Campus)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update selected course if passed from outside
  React.useEffect(() => {
    if (selectedCourse) {
      setFormData(prev => ({ ...prev, courseId: selectedCourse.id }));
    }
  }, [selectedCourse]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#851424', '#0E2A47', '#F5D77F', '#FFF']
      });
    } catch {
      // ignore
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      triggerCelebration();
    }, 800);
  };

  const handleWhatsAppSend = () => {
    const chosenCourse = ALL_COURSES.find(c => c.id === formData.courseId) || ALL_COURSES[0];
    const text = encodeURIComponent(
      `🙏 Vanakkam Atomz Arts Academy!\n\nI would like to enquire about admission for:\n` +
      `📌 *Course*: ${chosenCourse.name} (${chosenCourse.tamilName})\n` +
      `👤 *Student Name*: ${formData.studentName || 'Not provided'}\n` +
      `🎂 *Age*: ${formData.age || 'Not provided'}\n` +
      `📱 *Phone*: ${formData.phone || 'Not provided'}\n` +
      `⏰ *Batch*: ${formData.batchPreference}\n` +
      `🏫 *Mode*: ${formData.learningMode}\n` +
      (formData.message ? `💬 *Notes*: ${formData.message}\n` : '') +
      `\nPlease let me know the batch schedule and fee details. Thank you!`
    );
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-white border border-purple-200 rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header Banner */}
          <div className="relative bg-[#800080] p-6 text-white border-b border-purple-900">
            <div className="absolute top-0 right-0 p-4">
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-14 flex-shrink-0 drop-shadow-md">
                <Logo size="md" variant="crest" lightMode={false} />
              </div>
              <div className="min-w-0 pr-8">
                <div className="flex items-center gap-2 text-purple-200 text-xs font-semibold tracking-wider uppercase mb-1">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Admissions Open 2026</span>
                </div>

                <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                  {selectedCourse ? `Enquire for ${selectedCourse.name}` : 'Course Admission & Enquiry'}
                </h2>
                <p className="font-playfair italic text-purple-200 text-sm mt-1">
                  {selectedCourse ? selectedCourse.tamilName : 'ஆட்டம்ஸ் ஆர்ட்ஸ் அகாடமி - சேர்க்கை விபரம்'}
                </p>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 max-h-[75vh] overflow-y-auto">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-5">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 12 }}
                  className="w-20 h-20 mx-auto rounded-full bg-purple-50 flex items-center justify-center text-[#800080] border-2 border-[#800080] shadow-lg"
                >
                  <CheckCircle2 className="w-12 h-12" />
                </motion.div>

                <h3 className="font-cinzel text-2xl font-bold text-[#800080]">
                  Enquiry Received Successfully!
                </h3>
                <p className="text-slate-700 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.studentName}</strong>. Our academy team in Thiruvarur will contact you at <strong className="text-slate-900">{formData.phone}</strong> shortly with complete batch timings and syllabus details.
                </p>

                <div className="p-4 bg-[#FAF5FC] border border-purple-200 rounded-xl max-w-md mx-auto text-left text-xs text-slate-800 space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5 text-[#800080]">
                    <MapPin className="w-3.5 h-3.5 text-[#800080]" />
                    Academy Campus Address:
                  </div>
                  <p>{CONTACT_INFO.address}</p>
                  <p className="text-slate-600">Helpline: <strong>{CONTACT_INFO.phoneNumbers.join(' • ')}</strong></p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                  <button
                    onClick={handleWhatsAppSend}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Open in WhatsApp
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      onClose();
                    }}
                    className="px-6 py-2.5 rounded-full border border-purple-300 hover:bg-purple-50 text-[#800080] text-sm font-bold transition-all cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Course Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Select Course / வகுப்பு தேர்வு செய்க *
                  </label>
                  <select
                    name="courseId"
                    value={formData.courseId}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 focus:border-[#800080] focus:ring-2 focus:ring-[#800080]/20 bg-white text-slate-900 text-sm font-medium transition-all"
                    required
                  >
                    {ALL_COURSES.map(course => (
                      <option key={course.id} value={course.id}>
                        {course.name} ({course.tamilName}) - {course.categoryLabel}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      required
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="e.g., K. Abhinaya"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 focus:border-[#800080] focus:ring-2 focus:ring-[#800080]/20 bg-white text-slate-900 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Student Age / Grade
                    </label>
                    <input
                      type="text"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="e.g., 9 Years / Class 5"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 focus:border-[#800080] focus:ring-2 focus:ring-[#800080]/20 bg-white text-slate-900 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number (Call) *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-purple-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g., 9843626558"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-purple-200 focus:border-[#800080] focus:ring-2 focus:ring-[#800080]/20 bg-white text-slate-900 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Parent / Guardian Name (Optional)
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="e.g., S. Ramesh"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 focus:border-[#800080] focus:ring-2 focus:ring-[#800080]/20 bg-white text-slate-900 text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Batch & Mode */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#800080]" />
                      Preferred Batch
                    </label>
                    <select
                      name="batchPreference"
                      value={formData.batchPreference}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 focus:border-[#800080] focus:ring-2 focus:ring-[#800080]/20 bg-white text-slate-900 text-sm"
                    >
                      <option value="Morning (6:30 AM - 8:30 AM)">Morning (6:30 AM - 8:30 AM)</option>
                      <option value="Evening (4:30 PM - 6:30 PM)">Evening (4:30 PM - 6:30 PM)</option>
                      <option value="Evening (6:30 PM - 8:30 PM)">Evening (6:30 PM - 8:30 PM)</option>
                      <option value="Weekend Special (Saturday & Sunday)">Weekend Special (Sat & Sun)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#800080]" />
                      Training Mode
                    </label>
                    <select
                      name="learningMode"
                      value={formData.learningMode}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 focus:border-[#800080] focus:ring-2 focus:ring-[#800080]/20 bg-white text-slate-900 text-sm"
                    >
                      <option value="Offline (Thiruvarur Academy Campus)">Campus Classroom (Thiruvarur)</option>
                      <option value="Online Virtual Classroom">Online Live Interactive</option>
                      <option value="Personal 1-on-1 Mentorship">1-on-1 Special Mentorship</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Special Inquiries / Previous Experience (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us if you have previous knowledge or specific questions..."
                    className="w-full px-3.5 py-2 rounded-xl border border-purple-200 focus:border-[#800080] focus:ring-2 focus:ring-[#800080]/20 bg-white text-slate-900 text-sm transition-all"
                  ></textarea>
                </div>

                {/* Instant Helpline Info */}
                <div className="flex flex-wrap items-center justify-between p-3 bg-[#FAF5FC] border border-purple-200 rounded-xl text-xs text-slate-800">
                  <span>Direct Hotline: <strong className="text-[#800080]">{CONTACT_INFO.phoneNumbers.slice(0, 2).join(' / ')}</strong></span>
                  <span className="text-slate-600">Puthu Theru, Thiruvarur</span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#800080] hover:bg-[#680068] text-white font-bold text-sm shadow-md active:scale-[0.99] transition-all cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Admission Enquiry</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Directly</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
