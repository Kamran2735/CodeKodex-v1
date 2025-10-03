'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        });
      }, 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email Us',
      value: 'hello@techsolutions.com',
      link: 'mailto:hello@techsolutions.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Call Us',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
  ];

  const quickStats = [
    { icon: <Clock className="w-5 h-5" />, label: 'Response Time', value: '< 24 hours' },
    { icon: <MessageSquare className="w-5 h-5" />, label: 'Active Projects', value: '50+' },
    { icon: <CheckCircle2 className="w-5 h-5" />, label: 'Success Rate', value: '98%' },
  ];

  return (
    <section className="relative bg-[#0a1f1a] py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-lime-400 uppercase">
            GET IN TOUCH
          </div>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem]">
            Let's Build Something Amazing
          </h1>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Reach out and let's turn your vision into reality.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Left - Contact Info & Social */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#0f2f27]/50 rounded-xl p-5 border border-white/10 hover:border-lime-400/30 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400 group-hover:bg-lime-400/20 transition-colors">
                      {info.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase mb-1">
                        {info.label}
                      </div>
                      <div className="text-white font-semibold text-[15px] break-words">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social / Follow Us */}
            <div className="mt-2 bg-[#0f2f27]/50 rounded-xl p-5 border border-white/10">
              <div className="text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase mb-3">
                Follow Us
              </div>
              <div className="flex gap-4">
                {/* X / Twitter */}
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on X (Twitter)"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:text-lime-400 hover:border-lime-400/40 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.27 4.27 0 001.88-2.37 8.4 8.4 0 01-2.7 1.03 4.24 4.24 0 00-7.3 3.87 12 12 0 01-8.7-4.4 4.24 4.24 0 001.31 5.66 4.2 4.2 0 01-1.92-.53v.05a4.25 4.25 0 003.4 4.16 4.3 4.3 0 01-1.91.07 4.25 4.25 0 003.97 2.95 8.5 8.5 0 01-5.3 1.83A8.7 8.7 0 012 19.54a12 12 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.53A8.18 8.18 0 0022.46 6z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:text-lime-400 hover:border-lime-400/40 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v16h-4V8zM9 8h3.7v2.2h.05c.52-1 1.8-2.2 3.7-2.2 4 0 4.75 2.6 4.75 6V24h-4v-7.5c0-1.8 0-4-2.5-4s-2.9 2-2.9 4V24h-4V8z"/>
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on GitHub"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:text-lime-400 hover:border-lime-400/40 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.85 10.97.57.1.78-.25.78-.55v-2.07c-3.19.7-3.86-1.54-3.86-1.54-.52-1.3-1.28-1.65-1.28-1.65-1.05-.73.08-.72.08-.72 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.3-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.12-3.18 0 0 .98-.32 3.2 1.2a11.2 11.2 0 015.82 0c2.22-1.52 3.2-1.2 3.2-1.2.64 1.66.24 2.88.12 3.18.75.81 1.2 1.85 1.2 3.1 0 4.43-2.68 5.39-5.23 5.7.41.35.77 1.04.77 2.1v3.12c0 .3.2.66.79.55A10.51 10.51 0 0023.5 12C23.5 5.74 18.27.5 12 .5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#0f2f27]/50 rounded-2xl p-6 sm:p-8 border border-white/10">
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-white mb-2">Send us a message</h3>
                <p className="text-white/70 text-[15px]">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-[13px] font-semibold text-white/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0a1f1a] border border-white/10 text-white placeholder-white/40 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[13px] font-semibold text-white/80 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0a1f1a] border border-white/10 text-white placeholder-white/40 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/20 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label className="block text-[13px] font-semibold text-white/80 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0a1f1a] border border-white/10 text-white placeholder-white/40 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/20 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-[13px] font-semibold text-white/80 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0a1f1a] border border-white/10 text-white placeholder-white/40 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/20 transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-[13px] font-semibold text-white/80 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0a1f1a] border border-white/10 text-white focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/20 transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="consulting">Tech Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[13px] font-semibold text-white/80 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-[#0a1f1a] border border-white/10 text-white placeholder-white/40 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/20 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting || isSuccess}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-bold transition-all ${
                      isSuccess
                        ? 'bg-green-500 text-white'
                        : 'bg-lime-400 text-[#0a1f1a] hover:bg-white'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#0a1f1a] border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
