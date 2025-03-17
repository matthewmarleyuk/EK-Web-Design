'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full bg-white/10 backdrop-blur-md border border-purple-500/30 rounded-lg px-4 py-3 text-purple-300 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full bg-white/10 backdrop-blur-md border border-purple-500/30 rounded-lg px-4 py-3 text-purple-300 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">Subject</label>
        <input 
          type="text" 
          id="subject" 
          className="w-full bg-white/10 backdrop-blur-md border border-purple-500/30 rounded-lg px-4 py-3 text-purple-300 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="How can we help?"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Message</label>
        <textarea 
          id="message" 
          rows={6} 
          className="w-full bg-white/10 backdrop-blur-md border border-purple-500/30 rounded-lg px-4 py-3 text-purple-300 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      
      {status.info.msg && (
        <div className={`p-4 rounded-lg ${status.info.error ? 'bg-red-500/20 text-red-100' : 'bg-green-500/20 text-green-100'}`}>
          {status.info.msg}
        </div>
      )}
      
      <button 
        type="submit" 
        className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-full inline-flex items-center transition-colors duration-300 backdrop-blur-md shadow-md border border-purple-500/50"
        disabled={status.submitting}
      >
        {status.submitting ? 'Sending...' : 'Send Message'}
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </form>
  );
} 