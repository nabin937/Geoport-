import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Phone, Send, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { send, init } from '@emailjs/browser';
import { CONTACT_INFO } from '../constants';
import { InquiryType } from '../types';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: InquiryType.GENERAL,
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize EmailJS immediately when the component mounts
  useEffect(() => {
    try {
      init("gB5QwdWg88yXufEhL");
    } catch (e) {
      console.error("EmailJS init failed:", e);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const templateParams = {
        to_name: "Nabin Paiyani",
        from_name: formData.name,
        from_email: formData.email,
        inquiry_type: formData.type,
        message: formData.message,
    };

    // Use the named 'send' function directly
    send(
        'service_mfd2jp8',      // Service ID
        'template_lz9i7dk',     // Template ID
        templateParams,
        'gB5QwdWg88yXufEhL'     // Public Key (passed again for safety)
    )
    .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', type: InquiryType.GENERAL, message: '' });
        
        setTimeout(() => setStatus('idle'), 5000);
    })
    .catch((error: any) => {
        console.error('EmailJS Error:', error);
        
        let displayError = "An unexpected error occurred.";

        if (error) {
            if (typeof error === 'string') {
                displayError = error;
            } else if (typeof error === 'object') {
                if (error.text) {
                    displayError = error.text;
                } else if (error.message) {
                    displayError = error.message;
                } else {
                     try {
                         const json = JSON.stringify(error);
                         if (json !== '{}' && json !== '[]') displayError = json;
                         else displayError = "Connection failed.";
                     } catch (e) {
                         displayError = "Unknown error format.";
                     }
                }
            }
        }

        setErrorMessage(displayError);
        setStatus('error');
    });
  };

  const contactItems = [
      { icon: Mail, label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
      { icon: Linkedin, label: 'LinkedIn', value: 'View Profile', href: CONTACT_INFO.linkedin },
      { icon: Phone, label: 'Phone', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
      { icon: MapPin, label: 'Location', value: 'Nepal', href: null },
  ];

  // Construct mailto link for fallback
  const mailtoSubject = encodeURIComponent(`[GeoPort Inquiry]: ${formData.type}`);
  const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  );
  const fallbackLink = `mailto:${CONTACT_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section id="contact" className={`py-24 relative overflow-hidden ${darkMode ? 'bg-[#0f172a]' : 'bg-white'}`}>
      
      {/* Background Decor */}
      <div className={`absolute -right-20 top-20 w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse ${darkMode ? 'bg-orange-500' : 'bg-orange-300'}`}></div>
      <div className={`absolute -left-20 bottom-20 w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse ${darkMode ? 'bg-blue-500' : 'bg-blue-300'}`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <span className={`text-sm font-bold tracking-widest uppercase mb-2 block ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
            Get In Touch
          </span>
          <h2 className={`text-4xl sm:text-5xl font-black uppercase tracking-tight ${darkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8F00] to-[#FFD54F]">Connect</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8 order-2 lg:order-1"
          >
             <div className="space-y-6">
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    I am currently open to discussing academic opportunities, project collaborations, or entry-level geomatics services. Feel free to reach out directly or use the form.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    {contactItems.map((item, idx) => (
                        <div key={idx} className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${darkMode ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800' : 'bg-white border-gray-100 hover:border-blue-100'}`}>
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                                <item.icon size={24} />
                            </div>
                            <h4 className={`text-sm font-semibold uppercase tracking-wider mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {item.label}
                            </h4>
                            {item.href ? (
                                <a href={item.href} target="_blank" rel="noreferrer" className={`text-base font-bold hover:underline break-words ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {item.value}
                                </a>
                            ) : (
                                <span className={`text-base font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {item.value}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
             </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-3xl shadow-2xl p-8 lg:p-10 order-1 lg:order-2 border backdrop-blur-xl ${darkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white border-white/50'}`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="type" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Topic
                    </label>
                    <div className="relative">
                        <select
                            id="type"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all appearance-none ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
                        >
                            {Object.values(InquiryType).map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                            <svg className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
                        placeholder="Tell me about your project..."
                    />
                </div>

                <div className="space-y-4">
                    <button
                        type="submit"
                        disabled={status === 'sending' || status === 'success'}
                        className={`w-full flex justify-center items-center py-4 px-6 rounded-xl font-bold text-white transition-all transform hover:scale-[1.02] shadow-lg ${
                            status === 'success' 
                                ? 'bg-green-600' 
                                : status === 'error'
                                ? 'bg-red-600'
                                : 'bg-gradient-to-r from-[#2E7D32] to-[#1976D2] hover:shadow-green-500/25'
                        } disabled:opacity-70 disabled:cursor-not-allowed`}
                    >
                        {status === 'sending' ? (
                            'Sending...'
                        ) : status === 'success' ? (
                            'Message Sent Successfully!'
                        ) : status === 'error' ? (
                            'Failed to Send'
                        ) : (
                            <>
                                Send Message <Send className="ml-2 h-5 w-5" />
                            </>
                        )}
                    </button>
                    
                    {/* Enhanced Error Display with Fallback */}
                    {status === 'error' && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-center"
                        >
                            <p className="text-red-600 dark:text-red-300 text-sm mb-2 break-words">
                                {errorMessage || "System busy. Please try manual send."}
                            </p>
                            <a 
                                href={fallbackLink}
                                className="inline-flex items-center text-sm font-bold text-red-700 dark:text-red-200 underline hover:no-underline hover:text-red-800 transition-colors"
                            >
                                <Mail size={14} className="mr-1.5" />
                                Click here to send via Email Client
                            </a>
                        </motion.div>
                    )}
                </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;