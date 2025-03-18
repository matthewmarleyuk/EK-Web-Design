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
      const res = await fetch('https://hook.eu2.make.com/eoeh6brjc7w6w22n1oqpda83e3ckvvrh', {
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

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
          <input 
            type="text" 
            id="name" 
            className="bg-gray-800 border border-purple-500/30 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3"
            placeholder="John Smith" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Email</label>
          <input 
            type="email" 
            id="email" 
            className="bg-gray-800 border border-purple-500/30 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3" 
            placeholder="john@example.com" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">Subject</label>
        <input 
          type="text" 
          id="subject" 
          className="bg-gray-800 border border-purple-500/30 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3" 
          placeholder="How can we help you?" 
          value={formData.subject}
          onChange={handleChange}
          required 
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your Message</label>
        <textarea 
          id="message" 
          rows={4} 
          className="bg-gray-800 border border-purple-500/30 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3" 
          placeholder="Tell us about your project..." 
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      
      {status.info.msg && (
        <div className={`p-4 rounded-lg ${status.info.error ? 'bg-red-500/30 text-red-100' : 'bg-green-500/30 text-green-100'}`}>
          {status.info.msg}
        </div>
      )}
      
      <div className="flex items-center justify-center">
        <button 
          type="submit" 
          className="bg-white text-purple-600 font-medium py-3 px-8 rounded-full transition-all duration-300 hover:bg-gray-100 shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] disabled:opacity-70"
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
      
      <p className="text-center text-white/50 text-sm mt-4">
        By submitting this form, you agree to our <span className="text-purple-400 hover:text-purple-300 cursor-pointer">Privacy Policy</span>
      </p>
    </form>
  );
} 