"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus(
          "Thank you for your message! We'll get back to you soon."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus(
          "Sorry, there was an error sending your message. Please try again."
        );
      }
    } catch (error) {
      setSubmitStatus(
        "Sorry, there was an error sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      style={contactPageStyles}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div style={containerStyles}>
        <motion.div style={heroSectionStyles} variants={itemVariants}>
          <h1 style={titleStyles}>Get in touch</h1>
          <p style={subtitleStyles}>
            We&apos;d love to hear from you. Reach out to discuss your project
            or just to say hello.
          </p>
        </motion.div>

        <motion.div style={contactContentStyles} variants={itemVariants}>
          <motion.div style={contactInfoStyles} variants={itemVariants}>
            <div style={infoSectionStyles}>
              <h2 style={sectionTitleStyles}>Our Studios</h2>

              <div style={locationStyles}>
                <h3 style={locationTitleStyles}>London</h3>
                <p style={contactTextStyles}>020 7620 1453</p>
                <p style={contactTextStyles}>{siteConfig.contact.email}</p>
                <p style={addressStyles}>
                  First Floor Studio, The Old School, 4 Exton Street, London SE1
                  8UE
                </p>
              </div>
            </div>

            <div style={infoSectionStyles}>
              <h2 style={sectionTitleStyles}>Connect With Us</h2>
              <div style={socialLinksStyles}>
                <a
                  href="https://instagram.com/viterra"
                  style={socialLinkStyles}
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com/company/viterra"
                  style={socialLinkStyles}
                >
                  LinkedIn
                </a>
                <a href="https://facebook.com/viterra" style={socialLinkStyles}>
                  Facebook
                </a>
              </div>
            </div>

            <div style={infoSectionStyles}>
              <h2 style={sectionTitleStyles}>Business Hours</h2>
              <div style={businessHoursStyles}>
                <p style={contactTextStyles}>
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p style={contactTextStyles}>Saturday: 10:00 AM - 4:00 PM</p>
                <p style={contactTextStyles}>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          <motion.div style={contactFormStyles} variants={itemVariants}>
            <h2 style={formTitleStyles}>Send us a message</h2>
            <form style={formStyles} onSubmit={handleSubmit}>
              <div style={formGroupStyles}>
                <label htmlFor="name" style={labelStyles}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  style={inputStyles}
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div style={formGroupStyles}>
                <label htmlFor="email" style={labelStyles}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  style={inputStyles}
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div style={formGroupStyles}>
                <label htmlFor="phone" style={labelStyles}>
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  style={inputStyles}
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div style={formGroupStyles}>
                <label htmlFor="subject" style={labelStyles}>
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  style={inputStyles}
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div style={formGroupStyles}>
                <label htmlFor="message" style={labelStyles}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  style={inputStyles}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              {submitStatus && (
                <div style={statusMessageStyles}>{submitStatus}</div>
              )}

              <button
                type="submit"
                style={{
                  ...submitBtnStyles,
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const contactPageStyles: React.CSSProperties = {
  paddingTop: "120px",
  minHeight: "100vh",
  backgroundColor: "#fff",
  paddingBottom: "4rem",
};

const containerStyles: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 2rem",
};

const heroSectionStyles: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "4rem",
};

const titleStyles: React.CSSProperties = {
  fontSize: "3.5rem",
  fontWeight: "300",
  color: "#000",
  marginBottom: "1rem",
  letterSpacing: "-0.02em",
};

const subtitleStyles: React.CSSProperties = {
  fontSize: "1.25rem",
  color: "#666",
  fontWeight: "400",
  lineHeight: "1.6",
  maxWidth: "700px",
  margin: "0 auto",
};

const contactContentStyles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "4rem",
};

const contactInfoStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
};

const infoSectionStyles: React.CSSProperties = {};

const sectionTitleStyles: React.CSSProperties = {
  fontSize: "1.75rem",
  fontWeight: "500",
  color: "#000",
  marginBottom: "1.5rem",
};

const locationStyles: React.CSSProperties = {
  marginBottom: "2rem",
};

const locationTitleStyles: React.CSSProperties = {
  fontSize: "1.25rem",
  fontWeight: "600",
  color: "#000",
  marginBottom: "0.5rem",
};

const contactTextStyles: React.CSSProperties = {
  fontSize: "1rem",
  color: "#666",
  marginBottom: "0.25rem",
};

const addressStyles: React.CSSProperties = {
  fontSize: "1rem",
  color: "#666",
  lineHeight: "1.5",
  marginTop: "0.5rem",
};

const socialLinksStyles: React.CSSProperties = {
  display: "flex",
  gap: "1.5rem",
};

const socialLinkStyles: React.CSSProperties = {
  fontSize: "1rem",
  color: "#666",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

const businessHoursStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};

const contactFormStyles: React.CSSProperties = {
  backgroundColor: "#f8f8f8",
  padding: "2rem",
  borderRadius: "8px",
};

const formTitleStyles: React.CSSProperties = {
  fontSize: "1.75rem",
  fontWeight: "500",
  color: "#000",
  marginBottom: "1.5rem",
  textAlign: "center",
};

const formStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const formGroupStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const labelStyles: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "#000",
  marginBottom: "0.5rem",
  fontWeight: "500",
};

const inputStyles: React.CSSProperties = {
  padding: "0.75rem",
  border: "1px solid #ddd",
  borderRadius: "4px",
  fontSize: "1rem",
  backgroundColor: "#fff",
  transition: "border-color 0.3s ease",
};

const submitBtnStyles: React.CSSProperties = {
  padding: "0.75rem",
  backgroundColor: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  fontSize: "1rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  marginTop: "1rem",
};

const statusMessageStyles: React.CSSProperties = {
  padding: "1rem",
  borderRadius: "4px",
  backgroundColor: "#e8f5e8",
  color: "#2d5a2d",
  fontSize: "0.9rem",
  textAlign: "center",
  marginTop: "1rem",
};

// Add responsive styles
const mediaQueryStyles = `
  @media (max-width: 768px) {
    .contact-content {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
    
    .contact-form {
      padding: 1.5rem !important;
    }
    
    .contact-title {
      font-size: 2.5rem !important;
    }
  }
  
  @media (max-width: 480px) {
    .contact-title {
      font-size: 2rem !important;
    }
    
    .section-title {
      font-size: 1.5rem !important;
    }
    
    .contact-container {
      padding: 0 1rem !important;
    }
  }
  
  .social-link:hover {
    color: #000 !important;
  }
  
  .submit-btn:hover:not(:disabled) {
    background-color: #333 !important;
  }
  
  input:focus, textarea:focus {
    outline: none;
    border-color: #000 !important;
  }
`;

if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.textContent = mediaQueryStyles;
  document.head.appendChild(styleElement);
}

export default ContactPage;
