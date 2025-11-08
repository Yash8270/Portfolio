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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      console.log('Form data:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 animate-fadeIn">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title={data.title} summary={data.summary} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <InfoItem icon={<MapPin className="w-6 h-6" />} title="Location" content={data.info.location} />
              <InfoItem icon={<Phone className="w-6 h-6" />} title="Phone" content={data.info.phone} />
              <InfoItem icon={<Mail className="w-6 h-6" />} title="Email" content={data.info.email} />
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-white mb-3">
              {data.form.heading}
            </h3>
            <p className="text-gray-400 mb-8">{data.form.description}</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Message"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && (
                  <p className="text-green-400 mt-4">Your message has been sent successfully!</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
