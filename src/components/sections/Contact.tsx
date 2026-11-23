'use client';

import React, { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { useToast } from '@/context/ToastContext';
import { useTheme } from '@/context/ThemeContext';

export const Contact: React.FC = () => {
  const { profile } = portfolioData;
  const { showToast } = useToast();
  const { playClick } = useTheme();

  const [indiaTime, setIndiaTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setIndiaTime(formatter.format(new Date()));
      } catch {
        const now = new Date();
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const istDate = new Date(utc + 5.5 * 3600000);
        setIndiaTime(istDate.toLocaleTimeString('en-US'));
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

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
                <div className="contact-box-val" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                  <span className="pulse-dot" style={{ width: 6, height: 6 }} aria-hidden="true"></span>
                  <span style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {indiaTime ? `${indiaTime} IST` : 'IST (UTC +5:30)'}
                  </span>
                  <span style={{ opacity: 0.5 }}>•</span>
                  <span>Open to Global Remote</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <div style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Social Profiles
              </div>
              <div className="social-links-list">
                <a
                  href={profile.github || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                  aria-label="GitHub Profile"
                  onClick={() => playClick(460)}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={profile.linkedin || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                  aria-label="LinkedIn Profile"
                  onClick={() => playClick(460)}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href={profile.behance || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                  aria-label="Behance Profile"
                  onClick={() => playClick(460)}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
                    <path d="M6.715 4.908c1.383 0 2.477.348 3.284 1.043.806.696 1.21 1.63 1.21 2.802 0 .696-.155 1.32-.465 1.872-.31.552-.77.994-1.38 1.327.843.348 1.488.85 1.936 1.504.448.655.672 1.458.672 2.41 0 1.353-.454 2.434-1.362 3.243-.908.809-2.162 1.213-3.762 1.213H0V4.908h6.715zM3.434 7.644v3.535h3.045c.677 0 1.189-.148 1.536-.444.347-.296.521-.734.521-1.314 0-.594-.176-1.037-.528-1.33-.352-.293-.861-.447-1.529-.447H3.434zm0 6.133v4.062h3.332c.738 0 1.306-.168 1.704-.504.398-.336.597-.838.597-1.506 0-.696-.209-1.215-.627-1.557-.418-.342-1.008-.513-1.77-.513H3.434zm13.411-4.887c1.383 0 2.502.398 3.357 1.194.855.796 1.348 1.905 1.479 3.327h-7.659c.074.883.398 1.564.972 2.043.574.479 1.306.718 2.196.718.707 0 1.312-.132 1.815-.396.503-.264.9-.661 1.191-1.191l2.434 1.28c-.53 1.018-1.288 1.813-2.274 2.385-.986.572-2.164.858-3.534.858-1.604 0-2.95-.503-4.038-1.509-1.088-1.006-1.632-2.378-1.632-4.116 0-1.688.528-3.048 1.584-4.08 1.056-1.032 2.372-1.548 3.948-1.548zm-.045 2.479c-.662 0-1.206.21-1.632.63-.426.42-.684.99-.774 1.71h4.743c-.044-.734-.286-1.309-.726-1.724-.44-.415-1.002-.622-1.686-.622zM14.61 5.922h6.143v1.657H14.61V5.922z" />
                  </svg>
                  Behance
                </a>
                <a
                  href={profile.dribbble || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                  aria-label="Dribbble Profile"
                  onClick={() => playClick(460)}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.626 0 12-5.373 12-12S18.626 0 12 0zm7.844 7.235c.984 1.383 1.602 3.018 1.748 4.793-1.631-.413-3.411-.532-5.188-.328-.154-.424-.319-.844-.498-1.258 1.493-.787 2.805-1.854 3.938-3.207zm-7.844-4.835c2.434 0 4.646.947 6.305 2.493-1.042 1.25-2.261 2.24-3.646 2.973-1.077-2.023-2.39-3.864-3.905-5.466h1.246zm-2.859.957c1.472 1.564 2.748 3.36 3.793 5.334-1.928.74-4.024 1.156-6.19 1.217C5.372 7.72 6.556 5.253 9.141 3.357zm-6.74 6.74c2.518-.08 4.954-.567 7.186-1.428.169.39.324.787.469 1.189-2.906 1.094-5.26 3.047-6.845 5.617C2.476 13.914 2.4 12.38 2.4 10.097zm1.889 7.426c1.378-2.316 3.447-4.093 6.046-5.112.569 1.524 1.002 3.123 1.282 4.773-3.023 1.158-5.594.757-7.328.339zm9.055 3.337c-.317-1.523-.742-3.007-1.272-4.428 1.637-.179 3.279-.06 4.78.331-1.002 1.83-2.228 3.23-3.508 4.097z" />
                  </svg>
                  Dribbble
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
