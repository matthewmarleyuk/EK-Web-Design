import React from 'react';
import Navigation from '../../components/navigation';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* About Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20" id="about-hero">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              About <span className="text-purple-400">Us</span>
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-10">
              We're a passionate team of web designers and developers dedicated to creating exceptional digital experiences for businesses in East Kilbride and beyond.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="/contact" className="bg-white text-purple-600 font-medium px-8 py-3 rounded-full transition-all duration-300 hover:bg-gray-100 shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] animate-pulse-slow">
                Get Started
              </a>
              <a href="https://cal.com/matthewmarley/15min" target="_blank" rel="noopener noreferrer" className="glass-button bg-black/30 text-center font-medium px-8 py-3">
                Book a Call
                <svg className="w-4 h-4 ml-2 inline-block" viewBox="0 0 24 24" fill="none">
                  <path d="M20.0002 5.99969L8.00016 17.9997L4.00016 13.9997" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" aria-hidden="true"></div>

      {/* Our Story Section */}
      <section className="section" id="our-story">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  East Kilbride Web Design was founded in 2010 with a simple mission: to provide local businesses with high-quality, affordable websites that actually deliver results.
                </p>
                <p>
                  Starting with just one developer and a handful of clients, we've grown into a full-service digital agency with a diverse team of specialists and a portfolio of over 150 successful projects.
                </p>
                <p>
                  Throughout our 15-year journey, we've evolved with the changing landscape, but our commitment to personalized service and exceptional quality has remained unchanged.
                </p>
              </div>
            </div>
            
            <div className="glass overflow-hidden rounded-2xl flex items-center justify-center">
              <Image 
                src="/images/shutterstock_1440732200.jpg" 
                alt="Professional web developer working on code" 
                width={1000}
                height={667}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" aria-hidden="true"></div>

      {/* Stats Section */}
      <section className="section py-16" id="stats">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Track Record</h2>
            <p className="text-white/80">
              With over a decade of experience and hundreds of successful projects, we've built a reputation for delivering exceptional results that our clients love.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-darker p-8 text-center">
              <div className="text-5xl md:text-6xl font-bold mb-4 text-purple-400">15</div>
              <p className="text-xl font-medium">Years Experience</p>
            </div>
            
            <div className="glass-darker p-8 text-center">
              <div className="text-5xl md:text-6xl font-bold mb-4 text-purple-400">150+</div>
              <p className="text-xl font-medium">Projects Completed</p>
            </div>
            
            <div className="glass-darker p-8 text-center">
              <div className="text-5xl md:text-6xl font-bold mb-4 text-purple-400">5.0</div>
              <p className="text-xl font-medium">Rated on Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" aria-hidden="true"></div>

      {/* Values Section */}
      <section className="section" id="values">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-white/80">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-darker p-8 rounded-2xl h-full">
              <div className="mb-6 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-600/30 text-purple-400 mx-auto flex items-center justify-center">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Quality First</h3>
              <p className="text-white/80 text-center">
                We never compromise on quality. From clean code to pixel-perfect designs, excellence is our standard.
              </p>
            </div>

            <div className="glass-darker p-8 rounded-2xl h-full">
              <div className="mb-6 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-600/30 text-purple-400 mx-auto flex items-center justify-center">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Client Partnership</h3>
              <p className="text-white/80 text-center">
                We view every client relationship as a long-term partnership built on trust, transparency, and mutual success.
              </p>
            </div>

            <div className="glass-darker p-8 rounded-2xl h-full">
              <div className="mb-6 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-600/30 text-purple-400 mx-auto flex items-center justify-center">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Innovation</h3>
              <p className="text-white/80 text-center">
                We embrace new technologies and approaches to deliver cutting-edge solutions for our clients.
              </p>
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

      {/* CTA Section */}
      <section className="section" id="about-cta">
        <div className="container">
          <div className="glass p-8 md:p-12 lg:p-16 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-white/80 max-w-3xl mx-auto mb-8">
              Let's discuss how we can help your business achieve its digital goals.<br />
              Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300 inline-block font-medium px-8 py-3 rounded-full shadow-lg shadow-purple-600/30">
                Get in Touch
              </a>
              <a href="/#services" className="bg-purple-800/70 hover:bg-purple-800 transition-colors duration-300 border border-purple-400/50 inline-block font-medium px-8 py-3 rounded-full shadow-lg shadow-purple-900/20">
                Explore Our Services
              </a>
            </div>
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
                  'Landing Page Design',
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
                  { name: 'About Us', href: '/about' },
                  { name: 'Services', href: '/services' },
                  { name: 'Contact', href: '/contact' }
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