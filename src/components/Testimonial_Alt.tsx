'use client';

import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO',
      company: 'TechCorp Industries',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Working with this team transformed our entire digital infrastructure. The level of expertise and attention to detail was exceptional. Our operational efficiency increased by 300% within the first quarter.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'DataFlow Systems',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Outstanding work from start to finish. They delivered a scalable solution that exceeded our expectations. The technical prowess and problem-solving abilities are truly world-class.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'CloudVision Labs',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Best development partner we have ever worked with. Their innovative approach and dedication to our success made all the difference. Highly recommended for any serious project.',
    },
    {
      name: 'David Park',
      role: 'Founder',
      company: 'InnovateTech',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'The quality of work and professionalism is unmatched. They took our vision and turned it into reality, delivering beyond what we thought was possible. True technology partners.',
    },
  ];

  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '1000+', label: 'Projects Delivered' },
    { value: '50+', label: 'Industry Awards' },
  ];

  return (
    <section className="relative bg-[#0a1f1a] py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-lime-400 uppercase">
            CLIENT TESTIMONIALS
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem]">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Stats Bar */}
        {/* <div className="mb-12 sm:mb-16">
          <div className="rounded-2xl bg-gradient-to-r from-[#0f2f27] to-[#1a3530] p-8 border border-lime-400/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-lime-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[13px] font-semibold text-white/70 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-[#0f2f27]/50 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-lime-400/30 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-lime-400" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-lime-400 text-lime-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white/80 leading-relaxed text-[15px] sm:text-base mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Divider */}
              <div
                className="h-[2px] w-full mb-6 rounded-full"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(163, 230, 53, 0) 0%, rgba(163, 230, 53, 0.3) 50%, rgba(163, 230, 53, 0) 100%)',
                }}
              />

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-lime-400/30 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-bold text-[16px]">
                    {testimonial.name}
                  </div>
                  <div className="text-white/60 text-[14px]">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-8">
            <div className="text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase">
              Trusted By Leading Companies
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-40">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-24 h-12 sm:w-32 sm:h-16 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
              >
                <span className="text-white/60 text-xs font-bold">LOGO {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}