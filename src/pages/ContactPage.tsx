import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, Building, HelpCircle } from 'lucide-react';
import { CONTACT_INFO, ALL_COURSES } from '../data/coursesData';
import { EnquiryFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    courseInterest: 'Bharatanatyam (பரதநாட்டியம்)',
    ageGroup: 'Kids (Age 4-12)',
    preferredTiming: 'Evening (4:30 PM - 7:30 PM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `🙏 Vanakkam Atomz Arts Academy! I would like to enquire about admissions.\n\nStudent: ${formData.studentName || 'Learner'}\nCourse: ${formData.courseInterest}\nPhone: ${formData.phone || ''}\nTimings: ${formData.preferredTiming}`
    );
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 bg-[#800080] text-white border-b border-purple-900 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-[#800080] text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-4 h-4 text-[#800080]" />
            <span>Connect & Admissions</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Contact <span className="text-purple-200">Atomz Arts Academy</span>
          </h1>

          <p className="font-tamil text-xl sm:text-2xl text-purple-200 font-bold max-w-2xl mx-auto">
            தொடர்பு கொள்க • புதுத்தெரு, திருவாரூர், தமிழ்நாடு
          </p>

          <p className="text-purple-100 text-sm sm:text-base max-w-3xl mx-auto font-normal leading-relaxed">
            Reach out to our admissions counselors, visit our academy in Puthu Theru, or send an enquiry message for trial classes and fee details.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Academy Contact Info & Helplines (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-purple-100 shadow-md space-y-6">
              <h2 className="font-cinzel text-2xl font-bold text-[#800080]">
                Academy Helplines
              </h2>

              <p className="text-xs sm:text-sm text-slate-600">
                Direct phone lines for course guidance, batch timings, and admission registration:
              </p>

              <div className="space-y-3">
                {CONTACT_INFO.phoneNumbers.map((phone, idx) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-purple-50/50 hover:bg-purple-100 border border-purple-200 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#800080] text-white flex items-center justify-center">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-mono font-bold text-slate-900 group-hover:text-[#800080] text-sm">
                          {phone}
                        </div>
                        <div className="text-[10px] text-slate-500">
                          {idx === 0 ? '1st Contact (Primary)' : idx === 1 ? '2nd Contact Number' : '3rd Contact Number'}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#800080] group-hover:translate-x-1 transition-transform">
                      Call →
                    </span>
                  </a>
                ))}
              </div>

              {/* WhatsApp Action */}
              <div className="pt-2">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Instant WhatsApp Assistance</span>
                </button>
              </div>
            </div>

            {/* Address & Timings Card */}
            <div className="p-8 rounded-3xl bg-[#680068] text-white shadow-md space-y-6">
              <h3 className="font-cinzel text-xl font-bold text-white">
                Location & Timings
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-200 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Academy Campus:</strong>
                    <span className="text-purple-100 leading-relaxed font-normal">
                      {CONTACT_INFO.address}
                    </span>
                    <span className="block font-tamil text-purple-200 mt-1">
                      புதுத்தெரு, திருவாரூர், தமிழ்நாடு - 610001
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-purple-200 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Operating Hours:</strong>
                    <span className="text-purple-100 font-normal">
                      {CONTACT_INFO.workingHours}
                    </span>
                    <span className="block text-purple-200 text-xs font-normal">
                      Morning & Evening flexible batches (Weekday & Weekend)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-purple-200 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Email ID:</strong>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-purple-100 hover:text-white transition-colors font-normal">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Admission Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-purple-100 shadow-xl space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#800080] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#800080]" />
                  <span>Admissions 2026</span>
                </div>
                <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-slate-900">
                  Online Admission & Trial Form
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Fill out this brief form to schedule a trial session or receive detailed course brochures.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-4"
                >
                  <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-cinzel text-xl font-bold text-emerald-900">
                    Enquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Vanakkam! Our academy coordinator in Thiruvarur will contact you within 24 hours to confirm batch timing and trial session details.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all"
                  >
                    Submit Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Student's Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={e => setFormData({ ...formData, studentName: e.target.value })}
                        placeholder="e.g. Priyadharshini"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-purple-200 text-xs sm:text-sm focus:outline-none focus:border-[#800080] focus:ring-2 focus:ring-[#800080]/10 text-slate-900"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Parent / Guardian Name
                      </label>
                      <input
                        type="text"
                        value={formData.parentName}
                        onChange={e => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="e.g. Ramesh"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-purple-200 text-xs sm:text-sm focus:outline-none focus:border-[#800080] focus:ring-2 focus:ring-[#800080]/10 text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 98436 26558"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-purple-200 text-xs sm:text-sm focus:outline-none focus:border-[#800080] focus:ring-2 focus:ring-[#800080]/10 text-slate-900"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-purple-200 text-xs sm:text-sm focus:outline-none focus:border-[#800080] focus:ring-2 focus:ring-[#800080]/10 text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Course of Interest *
                    </label>
                    <select
                      value={formData.courseInterest}
                      onChange={e => setFormData({ ...formData, courseInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-purple-200 text-xs sm:text-sm focus:outline-none focus:border-[#800080] focus:ring-2 focus:ring-[#800080]/10 text-slate-900"
                    >
                      {ALL_COURSES.map(c => (
                        <option key={c.id} value={`${c.name} (${c.tamilName})`}>
                          {c.name} — {c.tamilName} ({c.categoryLabel})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Age Group
                      </label>
                      <select
                        value={formData.ageGroup}
                        onChange={e => setFormData({ ...formData, ageGroup: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-purple-200 text-xs sm:text-sm focus:outline-none focus:border-[#800080] focus:ring-2 focus:ring-[#800080]/10 text-slate-900"
                      >
                        <option>Kids (Age 4-10)</option>
                        <option>Teens & Students (Age 11-18)</option>
                        <option>College Students</option>
                        <option>Adults & Homemakers</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Preferred Batch Timing
                      </label>
                      <select
                        value={formData.preferredTiming}
                        onChange={e => setFormData({ ...formData, preferredTiming: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-purple-200 text-xs sm:text-sm focus:outline-none focus:border-[#800080] focus:ring-2 focus:ring-[#800080]/10 text-slate-900"
                      >
                        <option>Morning (6:30 AM - 9:00 AM)</option>
                        <option>Evening (4:30 PM - 7:30 PM)</option>
                        <option>Weekend Intensive (Sat & Sun)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Additional Message / Questions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Any prior experience, specific timing needs, or questions..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-purple-200 text-xs sm:text-sm focus:outline-none focus:border-[#800080] focus:ring-2 focus:ring-[#800080]/10 text-slate-900"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3.5 rounded-xl bg-[#800080] hover:bg-[#680068] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Admission Enquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl border border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
