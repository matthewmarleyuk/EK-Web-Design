'use client';

import { useState, FormEvent } from 'react';

export default function HeroContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      // Post data to webhook URL
      const res = await fetch('https://hook.eu2.make.com/j6do3ehd5970jscb9rleducwqai2gt0o', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'Your message has been sent successfully!' }
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit the form');
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Something went wrong. Please try again later.' }
      });
    }
  };

  // CSS for input fields
  const inputStyle = {
    background: "rgba(19, 19, 41, 0.6)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(4.3px)",
    WebkitBackdropFilter: "blur(4.3px)",
    border: "1px solid rgba(255, 255, 255, 0.21)"
  };

  return (
    <div className="relative overflow-hidden">
      {/* Remove decorative elements */}
      
      <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
        <div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-purple-400/50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input 
                type="text" 
                id="name" 
                className="w-full pl-12 pr-4 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-xl transition-all duration-300"
                style={inputStyle}
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-purple-400/50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input 
                type="email" 
                id="email" 
                className="w-full pl-12 pr-4 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-xl transition-all duration-300"
                style={inputStyle}
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-purple-400/50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
          </div>
          <input 
            type="text" 
            id="subject" 
            className="w-full pl-12 pr-4 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-xl transition-all duration-300"
            style={inputStyle}
            placeholder="What can we help you with?"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="relative">
          <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
            <svg className="w-5 h-5 text-purple-400/50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <textarea 
            id="message" 
            rows={3} 
            className="w-full pl-12 pr-4 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-xl transition-all duration-300"
            style={inputStyle}
            placeholder="Tell us about your project"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        {status.info.msg && (
          <div className={`p-4 rounded-xl ${status.info.error ? 'bg-red-500/20 text-red-100' : 'bg-green-500/20 text-green-100'} animate-fade-in-up`}>
            {status.info.msg}
          </div>
        )}
        
        <div className="flex items-center">
          <button 
            type="submit" 
            className="w-full bg-white text-purple-600 font-medium py-3 px-8 rounded-full transition-all duration-300 hover:bg-gray-100 shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]"
            disabled={status.submitting}
          >
            {status.submitting ? 'Sending...' : (
              <>
                Get Started Today
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </div>
        
        <p className="text-center text-white/50 text-sm">
          By submitting this form, you agree to our <span className="text-purple-400 hover:text-purple-300 cursor-pointer">Privacy Policy</span>
        </p>
      </form>
    </div>
  );
} 