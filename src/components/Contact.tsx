"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ChevronDown } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string>('');

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'Cloud Solutions',
    'Consulting'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-[#0a1f1a] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                Get Started with Us.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8af135] to-[#6bd427]">
                  Call Us Now!
                </span>
              </h2>
              <p className="text-[#cfe4db] text-base md:text-lg leading-relaxed mt-6">
                The fastest way to convert visitors into leads and sales on your website is with Social Daily Marketing.
                That&apos;s why businesses use Daily.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 mt-12">
              {/* Phone Card */}
              <div className="bg-gradient-to-br from-[#0f2f27] to-[#0a1f1a] border-2 border-[#1a3a32] rounded-2xl p-6 hover:border-[#8af135] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="bg-[#8af135]/10 p-4 rounded-xl group-hover:bg-[#8af135]/20 transition-all duration-300">
                    <Phone className="w-7 h-7 text-[#8af135]" />
                  </div>
                  <div>
                    <h3 className="text-[#8aa79b] text-xs md:text-sm font-semibold mb-1.5">Toll Free Call</h3>
                    <a
                      href="tel:+17045550127"
                      className="text-2xl font-extrabold text-white hover:text-[#8af135] transition-colors duration-300"
                    >
                      (+704) 555-0127
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-gradient-to-br from-[#0f2f27] to-[#0a1f1a] border-2 border-[#1a3a32] rounded-2xl p-6 hover:border-[#8af135] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="bg-[#8af135]/10 p-4 rounded-xl group-hover:bg-[#8af135]/20 transition-all duration-300">
                    <Mail className="w-7 h-7 text-[#8af135]" />
                  </div>
                  <div>
                    <h3 className="text-[#8aa79b] text-xs md:text-sm font-semibold mb-1.5">Email Address</h3>
                    <a
                      href="mailto:contact@company.com"
                      className="text-2xl font-extrabold text-white hover:text-[#8af135] transition-colors duration-300 break-all"
                    >
                      contact@company.com
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t-2 border-[#1a3a32]">
              <div>
                <div className="text-3xl font-extrabold text-[#8af135]">500+</div>
                <div className="text-sm text-[#8aa79b] mt-1">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#8af135]">24/7</div>
                <div className="text-sm text-[#8aa79b] mt-1">Support</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#8af135]">99%</div>
                <div className="text-sm text-[#8aa79b] mt-1">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-[#8af135] rounded-3xl blur-3xl opacity-5"></div>
            
            <div className="relative bg-gradient-to-br from-[#0f2f27] to-[#0a2520] border-2 border-[#1a3a32] rounded-3xl p-8 md:p-10">
              <div className="mb-8">
                <div className="inline-block bg-[#8af135]/10 px-4 py-1 rounded-full mb-2">
                  <span className="text-[#8af135] text-sm font-semibold">SEND MESSAGE</span>
                </div>
                <h3 className="text-3xl font-extrabold text-white">Let&apos;s Work Together</h3>
                <p className="mt-2 text-[#8aa79b] text-sm">We usually reply within 1–2 business hours.</p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full bg-[#0a1f1a] border-2 rounded-xl px-5 py-4 text-[15px] text-white placeholder-[#7a9a8d] outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#8af135]/30 ${
                        focusedField === 'name' ? 'border-[#8af135] shadow-[0_0_0_3px_rgba(138,241,53,0.12)]' : 'border-[#1a3a32]'
                      }`}
                      aria-label="Your Name"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full bg-[#0a1f1a] border-2 rounded-xl px-5 py-4 text-[15px] text-white placeholder-[#7a9a8d] outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#8af135]/30 ${
                        focusedField === 'email' ? 'border-[#8af135] shadow-[0_0_0_3px_rgba(138,241,53,0.12)]' : 'border-[#1a3a32]'
                      }`}
                      aria-label="Your Email"
                    />
                  </div>
                </div>

                {/* Phone & Service Row */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full bg-[#0a1f1a] border-2 rounded-xl px-5 py-4 text-[15px] text-white placeholder-[#7a9a8d] outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#8af135]/30 ${
                        focusedField === 'phone' ? 'border-[#8af135] shadow-[0_0_0_3px_rgba(138,241,53,0.12)]' : 'border-[#1a3a32]'
                      }`}
                      aria-label="Phone Number"
                    />
                  </div>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full bg-[#0a1f1a] border-2 rounded-xl px-5 py-4 text-[15px] outline-none transition-all duration-300 appearance-none focus-visible:ring-2 focus-visible:ring-[#8af135]/30 ${
                        focusedField === 'service' ? 'border-[#8af135] text-white shadow-[0_0_0_3px_rgba(138,241,53,0.12)]' : 'border-[#1a3a32]'
                      } ${formData.service === '' ? 'text-[#7a9a8d]' : 'text-white'}`}
                      aria-label="Select Service"
                    >
                      <option value="" disabled>Select Service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-[#0a1f1a] text-white">
                          {service}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7a9a8d] pointer-events-none" />
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    rows={5}
                    className={`w-full bg-[#0a1f1a] border-2 rounded-xl px-5 py-4 text-[15px] text-white placeholder-[#7a9a8d] outline-none transition-all duration-300 resize-none focus-visible:ring-2 focus-visible:ring-[#8af135]/30 ${
                      focusedField === 'message' ? 'border-[#8af135] shadow-[0_0_0_3px_rgba(138,241,53,0.12)]' : 'border-[#1a3a32]'
                    }`}
                    aria-label="Message"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#8af135] hover:bg-[#7de028] text-[#0a1f1a] font-extrabold text-lg py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg shadow-[#8af135]/20 hover:shadow-[#8af135]/35 hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8af135]/30"
                >
                  Send Message
                  <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>

              {/* Trust Badge */}
              <div className="mt-6 text-center">
                <p className="text-[#8aa79b] text-xs md:text-sm">
                  🔒 Your information is secure and confidential
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
