'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function EnquiryForm() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredResidence, setPreferredResidence] = useState('3 BHK');

  const [errors, setErrors] = useState<{
    fullName?: string;
    phone?: string;
    email?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successKey, setSuccessKey] = useState(0);

  // Auto-dismiss success notification after 5 seconds
  useEffect(() => {
    if (!isSuccess) return;
    const timer = setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isSuccess, successKey]);

  // Synchronize with FloorPlans selection via CustomEvent
  useEffect(() => {
    const handleFloorPlanSelected = (e: Event) => {
      const customEvent = e as CustomEvent<{ label: string; key: string }>;
      if (customEvent.detail && customEvent.detail.label) {
        setPreferredResidence(customEvent.detail.label);
      }
    };

    window.addEventListener('floorPlanSelected', handleFloorPlanSelected);
    return () => window.removeEventListener('floorPlanSelected', handleFloorPlanSelected);
  }, []);

  const validate = () => {
    const newErrors: { fullName?: string; phone?: string; email?: string } = {};
    let isValid = true;

    // Full name: required, min 2 chars
    const trimmedName = fullName.trim();
    if (!trimmedName) {
      newErrors.fullName = 'Please enter your full name.';
      isValid = false;
    } else if (trimmedName.length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
      isValid = false;
    }

    // Contact number: required, numbers only, 10 to 15 digits
    const cleanPhone = phone.trim().replace(/[\s\-\(\)\+]/g, '');
    const phoneValid = /^\d{10,15}$/.test(cleanPhone);
    if (!cleanPhone) {
      newErrors.phone = 'Please enter your contact number.';
      isValid = false;
    } else if (!phoneValid) {
      newErrors.phone = 'Please enter a valid contact number (at least 10 digits).';
      isValid = false;
    }

    // Email address: required, valid email format
    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      newErrors.email = 'Please enter your email address.';
      isValid = false;
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) {
      setIsSuccess(false);
      return;
    }

    setIsSubmitting(true);
    // Frontend demo validation without artificial delay
    setIsSuccess(true);
    setSuccessKey((prev) => prev + 1);
    setIsSubmitting(false);

    // Reset name, phone and email fields
    setFullName('');
    setPhone('');
    setEmail('');

    // Clear existing validation errors
    setErrors({});
    // Note: preferredResidence configuration is preserved
  };

  return (
    <section id="enquiry" className="enquiry-section" aria-label="Book a Visit and Enquiry">
      <div className="container">
        <div className="enquiry-layout">
          {/* Left Column: Architectural Photo & Context Card (~48%) */}
          <div className="enquiry-intro-card reveal-on-scroll">
            <div className="enquiry-bg-wrap">
              <Image
                src="/images/enquiry.webp"
                alt="Sunlit architectural interior corner at The Address Residences with floor-to-ceiling windows"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 560px"
                className="enquiry-bg-image"
                loading="lazy"
              />
              <div className="enquiry-overlay" aria-hidden="true" />
            </div>

            <div className="enquiry-card-content">
              <div className="enquiry-card-header">
                <span className="enquiry-eyebrow">ENQUIRE NOW</span>
                <h2 className="enquiry-heading">Your next chapter starts here.</h2>
                <p className="enquiry-description">
                  Explore the spaces, details and possibilities of your new home at The Address.
                </p>
              </div>

              <div className="enquiry-direct">
                <div className="direct-header">
                  <span className="direct-label">Direct Sales Lounge</span>
                  <span className="illustrative-tag">Illustrative contact details</span>
                </div>
                <p className="direct-contact">
                  <span className="direct-info">+91 98765 43210</span>
                  <span className="direct-divider" aria-hidden="true">&bull;</span>
                  <span className="direct-info">enquiries@theaddressresidences.com</span>
                </p>
                <p className="direct-hours">Monday to Sunday, 10:00 AM – 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form (~48%) */}
          <div className="enquiry-form-wrap reveal-on-scroll stagger-2">
            <form
              id="enquiryForm"
              className="enquiry-form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Residence Enquiry Form"
            >
              <div className="form-header">
                <h3 className="form-title">Schedule a Consultation</h3>
                <p className="form-subtitle">
                  Our private client advisory team will arrange a guided walkthrough at your convenience.
                </p>
              </div>

              <div className="form-group">
                <label htmlFor="enquiryName" className="form-label">
                  Full Name <span className="required" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="enquiryName"
                  name="fullName"
                  className={`form-input ${errors.fullName ? 'is-invalid' : ''}`}
                  placeholder="e.g. Eleanor Vance"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                  }}
                  required
                  autoComplete="name"
                  aria-invalid={errors.fullName ? 'true' : 'false'}
                  aria-describedby={errors.fullName ? 'nameError' : undefined}
                />
                <span
                  className={`form-error ${errors.fullName ? 'is-visible' : ''}`}
                  id="nameError"
                  role="alert"
                  aria-live="polite"
                >
                  {errors.fullName}
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="enquiryPhone" className="form-label">
                  Contact Number <span className="required" aria-hidden="true">*</span>
                </label>
                <input
                  type="tel"
                  id="enquiryPhone"
                  name="phone"
                  className={`form-input ${errors.phone ? 'is-invalid' : ''}`}
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                  }}
                  required
                  autoComplete="tel"
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phoneError' : undefined}
                />
                <span
                  className={`form-error ${errors.phone ? 'is-visible' : ''}`}
                  id="phoneError"
                  role="alert"
                  aria-live="polite"
                >
                  {errors.phone}
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="enquiryEmail" className="form-label">
                  Email Address <span className="required" aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="enquiryEmail"
                  name="email"
                  className={`form-input ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="e.g. eleanor@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  required
                  autoComplete="email"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'emailError' : undefined}
                />
                <span
                  className={`form-error ${errors.email ? 'is-visible' : ''}`}
                  id="emailError"
                  role="alert"
                  aria-live="polite"
                >
                  {errors.email}
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="enquiryResidence" className="form-label">
                  <span>Preferred Residence</span>
                  <span className="form-hint">(Synced with floor plan selection)</span>
                </label>
                <div className="select-wrap">
                  <select
                    id="enquiryResidence"
                    name="preferredResidence"
                    className="form-input form-select"
                    value={preferredResidence}
                    onChange={(e) => setPreferredResidence(e.target.value)}
                  >
                    <option value="2 BHK">2 BHK Residence (1,250 sq. ft.)</option>
                    <option value="3 BHK">3 BHK Residence (1,650 sq. ft.)</option>
                    <option value="4 BHK">4 BHK Residence (2,200 sq. ft.)</option>
                  </select>
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className="enquiry-submit-btn"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Enquiry'}</span>
                  <svg
                    className="btn-arrow"
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" />
                  </svg>
                </button>
              </div>

              {isSuccess && (
                <div
                  className="form-success-alert"
                  id="formSuccessAlert"
                  role="status"
                  aria-live="polite"
                >
                  <div className="form-success-icon" aria-hidden="true">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <circle cx="10" cy="10" r="10" fill="#2E7D32" />
                      <path
                        d="M6 10.2L8.8 13L14.2 7.5"
                        stroke="#FFFFFF"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="form-success-body">
                    <h4 className="form-success-title">Thank you for your interest!</h4>
                    <p className="form-success-text">
                      Your enquiry form has been completed successfully.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="form-success-dismiss"
                    onClick={() => setIsSuccess(false)}
                    aria-label="Dismiss notification"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M1 1L13 13M1 13L1" />
                    </svg>
                  </button>
                </div>
              )}

              <p className="form-disclaimer">
                Preview form — details are not sent.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
