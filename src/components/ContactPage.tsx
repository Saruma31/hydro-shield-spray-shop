
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Info, Flag } from 'lucide-react';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-600 animate-fade-in">
              We're here to help with any questions about HydroSpray
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Mail className="w-6 h-6 text-hydro-blue-600 mr-3" />
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hydro-blue-500 focus:border-hydro-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hydro-blue-500 focus:border-hydro-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hydro-blue-500 focus:border-hydro-blue-500 transition-colors resize-vertical"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-hydro-blue-600 hover:bg-hydro-blue-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {t('contact.form.send')}
                </button>
              </form>
            </div>

            {/* Company Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Info className="w-6 h-6 text-hydro-blue-600 mr-3" />
                  {t('contact.info.title')}
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('contact.info.company')}</h3>
                    <p className="text-gray-600">Hydrophobic Surface Technology</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Headquarters</h3>
                    <p className="text-gray-600 flex items-center">
                      <Flag className="w-4 h-4 mr-2" />
                      {t('contact.info.country')} 🇱🇮
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Manufacturing</h3>
                    <p className="text-gray-600 flex items-center">
                      <Flag className="w-4 h-4 mr-2" />
                      Japan 🇯🇵
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Product</h3>
                    <p className="text-gray-600">HydroSpray - 19.95 CHF</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">How long does shipping take?</h4>
                    <p className="text-gray-600 text-sm">5-16 days depending on your location. See our shipping page for details.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Do you ship to the USA?</h4>
                    <p className="text-gray-600 text-sm">Unfortunately, we currently do not ship to the USA.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">How long does the effect last?</h4>
                    <p className="text-gray-600 text-sm">The hydrophobic effect typically lasts 3-6 months depending on surface type and usage.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Is HydroSpray safe?</h4>
                    <p className="text-gray-600 text-sm">Yes, when used as directed. Please read all safety instructions before use.</p>
                  </div>
                </div>
              </div>

              <div className="bg-hydro-gradient text-white rounded-2xl p-8 animate-fade-in">
                <h3 className="text-xl font-bold mb-4">Need immediate help?</h3>
                <p className="mb-4">Our customer service team typically responds within 24 hours.</p>
                <div className="text-sm opacity-90">
                  <p>Business Hours:</p>
                  <p>Monday - Friday: 9:00 - 17:00 CET</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
