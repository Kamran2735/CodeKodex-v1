"use client";
import React, { useState } from 'react';
import { Send, Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Headphones } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#294842]/95 pt-32 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Banner */}
{/* CTA Banner */}
<div className="relative -mt-56 z-20">   {/* pulls it upwards */}
  <div className="bg-[#8af135] rounded-3xl p-8 md:p-12 relative overflow-hidden">
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1f1a] mb-2">
          Let's Get Stared with Us.
          <br />
          Call Us Now!
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-[#0a1f1a] p-4 rounded-full">
          <Headphones className="w-8 h-8 text-[#8af135]" />
        </div>
        <div>
          <p className="text-[#0a1f1a] text-xs font-semibold mb-1">Toll Free Call.</p>
          <a
            href="tel:+17045550127"
            className="text-[#0a1f1a] text-2xl font-bold hover:text-[#0f2f27] transition-colors"
          >
            (+704) 555-0127
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 my-12">
          
          {/* Newsletter Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-[#a5c4bc] text-sm mb-6 leading-relaxed">
              Our team do comprises professional with experience.
            </p>
            
            <div className="flex items-center gap-2 mb-6">
              <Mail className="w-5 h-5 text-[#8af135]" />
              <a href="mailto:hello@zeniqs.com" className="text-white hover:text-[#8af135] transition-colors">
                hello@zeniqs.com
              </a>
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0f2f27] border-2 border-[#2a5a52] rounded-full pl-6 pr-14 py-3 text-white placeholder-[#7a9a92] outline-none focus:border-[#8af135] transition-all duration-300"
              />
              <button
                onClick={handleSubmit}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#8af135] hover:bg-[#b8f76a] p-2.5 rounded-full transition-all duration-300 group"
              >
                <Send className="w-4 h-4 text-[#0a1f1a]" />
              </button>
            </div>
          </div>

          {/* Service Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Service</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#a5c4bc] hover:text-[#8af135] transition-colors text-sm">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a5c4bc] hover:text-[#8af135] transition-colors text-sm">
                  Software Update
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a5c4bc] hover:text-[#8af135] transition-colors text-sm">
                  Design System
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a5c4bc] hover:text-[#8af135] transition-colors text-sm">
                  Brand UI UX
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a5c4bc] hover:text-[#8af135] transition-colors text-sm">
                  Plugin Development
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#a5c4bc] hover:text-[#8af135] transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a5c4bc] hover:text-[#8af135] transition-colors text-sm">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a5c4bc] hover:text-[#8af135] transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a5c4bc] hover:text-[#8af135] transition-colors text-sm inline-flex items-center gap-2">
                  Career
                  <span className="bg-[#8af135] text-[#0a1f1a] text-xs font-bold px-2 py-0.5 rounded-full">
                    New
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a5c4bc] hover:text-[#8af135] transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Contact Info</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <div>
                <p className="text-[#a5c4bc] text-xs font-semibold mb-2">Email Address</p>
                <a href="mailto:hello@zeniqs.com" className="text-white hover:text-[#8af135] transition-colors text-sm flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  hello@zeniqs.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="text-[#a5c4bc] text-xs font-semibold mb-2">Phone Number</p>
                <a href="tel:+17045550127" className="text-white hover:text-[#8af135] transition-colors text-sm flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  (+704) 555-0127
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#2a5a52] pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Zeniqs Logo" className="w-32 h-auto" />
          </div>

          {/* Copyright */}
          <div className="text-[#a5c4bc] text-sm">
            Copyright © 2024 <span className="text-white font-semibold">Zeniqs</span> All Rights Reserved
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-10 h-10 bg-[#0f2f27] hover:bg-[#8af135] rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <Facebook className="w-5 h-5 text-[#a5c4bc] group-hover:text-[#0a1f1a] transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#0f2f27] hover:bg-[#8af135] rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <Twitter className="w-5 h-5 text-[#a5c4bc] group-hover:text-[#0a1f1a] transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#0f2f27] hover:bg-[#8af135] rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-[#a5c4bc] group-hover:text-[#0a1f1a] transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#0f2f27] hover:bg-[#8af135] rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <Youtube className="w-5 h-5 text-[#a5c4bc] group-hover:text-[#0a1f1a] transition-colors" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;