'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { useToast } from '@/context/ToastContext';
import { useTheme } from '@/context/ThemeContext';

export const Contact: React.FC = () => {
  const { profile } = portfolioData;
  const { showToast } = useToast();
  const { playClick } = useTheme();

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    playClick(580);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(profile.email)
        .then(() => showToast('Email copied to clipboard!', 'success'))
        .catch(() => showToast('Email: ' + profile.email, 'info'));
    } else {
      showToast('Email: ' + profile.email, 'info');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    setLoading(true);
    playClick(500);

    setTimeout(() => {
      setLoading(false);
      showToast(`Thank you, ${form.name}! Your message has been sent successfully.`, 'success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, height: 14 }}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Let&apos;s Collaborate
          </div>
          <h2 className="section-title">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an opportunity, a project idea, or just want to discuss tech, I&apos;d love to hear from you!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-info-col">
            <div className="contact-card-box">
              <div className="contact-box-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-box-details">
                <div className="contact-box-label">Email Address</div>
                <div className="contact-box-val">{profile.email}</div>
              </div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={handleCopyEmail}
                title="Copy email address"
                aria-label="Copy email"
              >
                Copy
              </button>
            </div>

            <div className="contact-card-box">
              <div className="contact-box-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-box-details">
                <div className="contact-box-label">Current Location</div>
                <div className="contact-box-val">{profile.location}</div>
              </div>
            </div>

            <div className="contact-card-box">
              <div className="contact-box-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 14 14"></polyline>
                </svg>
              </div>
              <div className="contact-box-details">
                <div className="contact-box-label">Timezone &amp; Status</div>
                <div className="contact-box-val">IST (UTC +5:30) • Open to Global Remote</div>
              </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <div style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Social Profiles
              </div>
              <div className="social-links-list">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                  aria-label="GitHub Profile"
                  onClick={() => playClick(460)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                  aria-label="LinkedIn Profile"
                  onClick={() => playClick(460)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card contact-form-container">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">Your Name *</label>
                <input
                  type="text"
                  id="contact-name"
                  className="form-input"
                  placeholder="e.g. Alex Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">Your Email *</label>
                <input
                  type="email"
                  id="contact-email"
                  className="form-input"
                  placeholder="alex@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  className="form-input"
                  placeholder="Project Inquiry / Job Opportunity"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Message *</label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  placeholder="Describe your project, question, or opportunity..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                id="contact-submit-btn"
                style={{ width: '100%' }}
                disabled={loading}
              >
                {loading ? 'Sending Message...' : 'Send Message'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
