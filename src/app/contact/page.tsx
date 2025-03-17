import React from 'react';
import Navigation from '@/components/navigation';
import dynamic from 'next/dynamic';

// Create a function to properly handle paths across environments
const getPath = (path: string) => {
  // Check if we're in production (GitHub Pages)
  const basePath = process.env.NODE_ENV === 'production' ? '/EK-Web-Design' : '';
  // Ensure the path starts with a slash but doesn't have double slashes
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
};

// Use dynamic import with no SSR for the client component
const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: false });

// FAQ data as static content
const faqItems = [
  {
    question: "How long does it take to build a website?",
    answer: "The timeline varies depending on the complexity of your project. A simple website can be completed in 2-4 weeks, while more complex sites with custom functionality may take 6-12 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing is based on the specific requirements of each project. We offer transparent, fixed-price quotes after understanding your needs. Contact us for a free consultation and personalized quote tailored to your business needs."
  },
  {
    question: "Do you offer website maintenance?",
    answer: "Yes, we offer ongoing maintenance packages to keep your website secure, updated, and performing optimally. Our maintenance plans include regular updates, security monitoring, backups, and technical support."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! All our websites are fully responsive and optimized for all devices and screen sizes. We ensure a seamless user experience across desktops, tablets, and mobile phones."
  },
  {
    question: "Can you help with SEO and marketing?",
    answer: "Yes, we provide comprehensive SEO services to improve your website's visibility in search engines. We also offer digital marketing strategies to help drive traffic to your site and increase conversions."
  },
  {
    question: "Do you work with clients outside East Kilbride?",
    answer: "Yes, we work with clients across the UK and internationally. Our digital workflow allows us to collaborate effectively regardless of location, while still providing the same level of personalized service."
  }
];

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Contact Hero Section */}
      <section className="relative pt-28 pb-28 lg:pt-36 lg:pb-36">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto px-4">
              Have a question or want to work with us? Reach out and we'll get back to you shortly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Form */}
            <div className="glass p-8 rounded-2xl lg:col-span-2 backdrop-blur-lg border border-purple-500/30 shadow-xl" style={{backgroundColor: 'rgba(19, 19, 41, 0.6)'}}>
              <h2 className="text-xl sm:text-2xl font-semibold mb-6">Contact Form</h2>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="glass p-8 rounded-2xl backdrop-blur-lg border border-purple-500/30 shadow-lg" style={{backgroundColor: 'rgba(19, 19, 41, 0.6)'}}>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-600/20 rounded-full">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-base sm:text-lg mb-1">Our Location</h3>
                      <p className="text-white/70">14 Whittaker Avenue, East Kilbride, G75 9QA</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-600/20 rounded-full">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Email Us</h3>
                      <a href="mailto:info@eastkilbridewebdesign.com" className="text-white/70 hover:text-white transition-colors duration-300">
                        info@eastkilbridewebdesign.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-600/20 rounded-full">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Call Us</h3>
                      <a href="tel:07478707581" className="text-white/70 hover:text-white transition-colors duration-300">
                        07478707581
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass p-8 rounded-2xl backdrop-blur-lg border border-purple-500/30 shadow-lg" style={{backgroundColor: 'rgba(19, 19, 41, 0.6)'}}>
                <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/70">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" aria-hidden="true"></div>

      {/* Testimonials Section */}
      <section className="section" id="testimonials">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Client Testimonials</h2>
            <p className="text-sm md:text-base text-white/80">
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

      {/* FAQ Section - Static Version */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-sm md:text-base text-white/80">
              Find answers to common questions about our web design and development services
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
                <p className="text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" aria-hidden="true"></div>

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
                    <a href={getPath('/services')} className="text-white/70 hover:text-white transition-colors duration-300">
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
                  { name: 'Services', href: getPath('/services') },
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
                  <span>+44 1234 567890</span>
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