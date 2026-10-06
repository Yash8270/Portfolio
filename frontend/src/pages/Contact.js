import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import InfoItem from '../components/InfoItem';

export default function Contact({ data }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic frontend validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://yash-limbachiya-portfolio.vercel.app/api/send_email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 4000);
      } else {
        setStatus('error');
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setError('Network error. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 animate-fadeIn">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title={data.title} summary={data.summary} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* --- Info Bento Card --- */}
          <div className="bento-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                Direct Channels
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <InfoItem
                  icon={<MapPin className="w-5 h-5" />}
                  title="Location"
                  content={data.info.location}
                />
                <InfoItem
                  icon={<Phone className="w-5 h-5" />}
                  title="Phone"
                  content={data.info.phone}
                />
                <InfoItem
                  icon={<Mail className="w-5 h-5" />}
                  title="Email"
                  content={data.info.email}
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                Open to full-stack, cloud infrastructure, AI integration, and freelance software development.
              </p>
            </div>
          </div>

          {/* --- Form Bento Card --- */}
          <div className="bento-card p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">{data.form.heading}</h3>
            <p className="text-sm sm:text-base text-slate-400 mb-6 leading-relaxed">{data.form.description}</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.1] rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.1] rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.1] rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Message"
                required
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.1] rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
              ></textarea>

              {error && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm text-center">
                  {error}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 border border-blue-400/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm text-center mt-4">
                    Your message has been sent successfully!
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm text-center mt-4">
                    {error || 'Failed to send message. Please try again.'}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
