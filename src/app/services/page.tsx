import React from 'react';
import Navigation from '@/components/navigation';
import { getPath } from '../../utils/path';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - EK Web Design',
  description: 'Professional web design and development services tailored to meet your unique business needs.',
};

// Remove or comment out the old getPath function
/*
// Create a function to properly handle paths across environments
const getPath = (path: string) => {
  // Check if we're in production (GitHub Pages)
  const basePath = process.env.NODE_ENV === 'production' ? '/EK-Web-Design' : '';
  // Ensure the path starts with a slash but doesn't have double slashes
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
};
*/

// Service card data
const serviceCards = [
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Website Design",
    description: "Beautiful, user-friendly websites that captivate your audience and represent your brand perfectly.",
    bulletPoints: [
      "Custom Design",
      "Brand Consistency",
      "User Experience Focus",
      "Visual Appeal"
    ]
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Web Development",
    description: "Custom web applications with powerful functionality to solve your business challenges.",
    bulletPoints: [
      "Responsive Design",
      "Custom Functionality",
      "Performance Optimization",
      "Cross-browser Testing"
    ]
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3H8a2 2 0 00-2 2v10m12 0V5a2 2 0 00-2-2h-2" />
      </svg>
    ),
    title: "Responsive Design",
    description: "Websites that provide a seamless experience across all devices and screen sizes.",
    bulletPoints: [
      "Mobile-First Approach",
      "Tablet Optimization",
      "Desktop Experience",
      "Consistent Branding"
    ]
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: "E-commerce Solutions",
    description: "Online stores that drive sales with intuitive shopping experiences and secure payment processing.",
    bulletPoints: [
      "Shopping Cart Integration",
      "Payment Gateway Setup",
      "Inventory Management",
      "Mobile-optimized Checkout"
    ]
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    title: "Landing Page Design",
    description: "High-converting landing pages designed to turn visitors into customers with compelling copy and strategic CTAs.",
    bulletPoints: [
      "Conversion-focused Design",
      "A/B Testing",
      "Call-to-Action Optimization",
      "Lead Generation"
    ]
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Website Maintenance",
    description: "Regular updates, security monitoring, and technical support to keep your website running smoothly.",
    bulletPoints: [
      "Regular Updates",
      "Security Monitoring",
      "Backup Management",
      "Performance Optimization"
    ]
  }
];

export default function Services() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-8 lg:pt-36 lg:pb-12">
        <div className="container">
          <div className="text-center mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto px-4">
              We provide comprehensive web design and development solutions tailored to meet your unique business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <div key={index} className="glass p-8 rounded-2xl flex flex-col h-full">
                <div className="w-16 h-16 rounded-full bg-purple-400/20 flex items-center justify-center text-purple-400 mb-6">
                  {service.icon}
                </div>
                
                <h2 className="text-2xl font-bold text-purple-400 mb-4">{service.title}</h2>
                
                <p className="text-white/80 mb-6 flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.bulletPoints.map((point, i) => (
                    <div key={i} className="flex items-center">
                      <svg className="w-4 h-4 mr-3 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                
                <a href="#" className="text-purple-400 flex items-center mt-auto group">
                  Learn More
                  <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" aria-hidden="true"></div>
      
      {/* Testimonials Section */}
      <section className="section pb-24" id="testimonials">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Client Testimonials</h2>
            <p className="text-white/80">
              Hear from the businesses we've helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-2xl h-full">
              <div className="flex flex-col h-full">
                <div className="mb-4 text-purple-400">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-white/90 mb-6 flex-1">
                  "Matthew redesigned our website with exceptional knowledge and skill. His expertise in design and hosting services was first-class. He brought our vision to life and provided professional guidance throughout the project. We're delighted with the finished product."
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-purple-400/20 flex items-center justify-center text-xl font-bold text-purple-300">AK</div>
                  </div>
                  <div>
                    <h4 className="font-bold">Alan Kennedy</h4>
                    <p className="text-white/70 text-sm">Knowledge Partnership</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl h-full">
              <div className="flex flex-col h-full">
                <div className="mb-4 text-purple-400">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-white/90 mb-6 flex-1">
                  "Matthew's web design and SEO services have been fantastic from start to finish. He listens attentively, embraces new ideas, and implements them skillfully. His collaborative approach made the process smooth and enjoyable. The results speak volumes - leads are flowing in consistently."
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-purple-400/20 flex items-center justify-center text-xl font-bold text-purple-300">KC</div>
                  </div>
                  <div>
                    <h4 className="font-bold">Kevin Callaghan</h4>
                    <p className="text-white/70 text-sm">Japanese Knotweed Scotland</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl h-full">
              <div className="flex flex-col h-full">
                <div className="mb-4 text-purple-400">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-white/90 mb-6 flex-1">
                  "Working with Matthew was an absolute pleasure from day one. He went above and beyond our expectations, delivering a website that exceeded our requirements. His attention to detail and dedication has truly been a game-changer for our business. Highly recommended to anyone."
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-purple-400/20 flex items-center justify-center text-xl font-bold text-purple-300">BN</div>
                  </div>
                  <div>
                    <h4 className="font-bold">Barry Nicholls</h4>
                    <p className="text-white/70 text-sm">The Function Rooms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" aria-hidden="true"></div>

      {/* Call to Action */}
      <section className="section" id="services-cta">
        <div className="container">
          <div className="glass p-8 md:p-12 lg:p-16 rounded-2xl text-left relative overflow-hidden">
            {/* Decorative elements - desktop only */}
            <div className="hidden md:block">
              <div className="absolute -top-10 right-[25%] w-32 h-32 bg-purple-400/25 rounded-full blur-lg"></div>
              <div className="absolute bottom-0 right-[5%] w-40 h-40 bg-purple-600/20 rounded-full blur-xl"></div>
              <div className="absolute top-[35%] right-[15%] w-24 h-24 bg-white/15 rounded-full blur-md"></div>
              <div className="absolute -bottom-5 right-[35%] w-24 h-24 bg-purple-300/25 rounded-full blur-lg"></div>
              <div className="absolute top-[15%] right-[10%] w-48 h-48 bg-purple-500/20 rounded-full blur-xl opacity-70"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/80 max-w-2xl text-base sm:text-lg mb-8">
                Let's discuss how we can help your business achieve its digital goals.
                Our team is ready to bring your vision to life.
              </p>
              <div className="flex flex-row flex-wrap gap-4">
                <a href={getPath('/contact')} className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300 inline-block font-medium px-8 py-3 rounded-full shadow-lg shadow-purple-600/30">
                  Get in Touch
                </a>
                <a href={getPath('/#services')} className="bg-purple-800/70 hover:bg-purple-800 transition-colors duration-300 border border-purple-400/50 inline-block font-medium px-8 py-3 rounded-full shadow-lg shadow-purple-900/20">
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">East Kilbride Web Design</h3>
              <p className="text-white/70 mb-4">
                Creating stunning websites that drive business growth and deliver exceptional user experiences.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                  <span className="sr-only">X (Twitter)</span>
                  <div className="w-8 h-8 rounded-full bg-purple-800/50 flex items-center justify-center">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                    </svg>
                  </div>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-8 h-8 rounded-full bg-purple-800/50 flex items-center justify-center">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {[
                  'Website Design',
                  'Web Development',
                  'E-commerce Solutions',
                  'SEO Services',
                  'Content Management',
                  'Website Maintenance'
                ].map((service, index) => (
                  <li key={index}>
                    <a href="/services" className="text-white/70 hover:text-white transition-colors duration-300">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'About Us', href: getPath('/about') },
                  { name: 'Services', href: '#services' },
                  { name: 'Contact', href: getPath('/contact') }
                ].map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-white/70 hover:text-white transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>14 Whittaker Avenue, East Kilbride, G75 9QA</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>07478707581</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@ekwebdesign.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} East Kilbride Web Design. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 