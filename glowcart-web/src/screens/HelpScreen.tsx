import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HelpScreen.css';

type FAQ = {
  id: number;
  question: string;
  answer: string;
  category: string;
};

const HelpScreen = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "How do I place an order?",
      answer: "Browse our products, add items to your cart, and proceed to checkout. You'll need to create an account or sign in to complete your purchase.",
      category: "ordering"
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets like Paytm, PhonePe, and Google Pay.",
      category: "payment"
    },
    {
      id: 3,
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for select locations. International shipping takes 7-14 days.",
      category: "shipping"
    },
    {
      id: 4,
      question: "Can I return or exchange products?",
      answer: "Yes! You can return products within 30 days of delivery if they're unused and in original packaging. Exchanges are available for defective items.",
      category: "returns"
    },
    {
      id: 5,
      question: "Are your products authentic?",
      answer: "Absolutely! All our products are 100% authentic and sourced directly from authorized distributors and brands.",
      category: "products"
    },
    {
      id: 6,
      question: "How do I track my order?",
      answer: "You'll receive a tracking number via email once your order ships. You can also track it in your account under 'Order History'.",
      category: "shipping"
    },
    {
      id: 7,
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries. International shipping rates and delivery times vary by location.",
      category: "shipping"
    },
    {
      id: 8,
      question: "How can I contact customer service?",
      answer: "You can reach us via email at support@shivangichauhanbeauty.com, phone at +91 98765 43210, or through our live chat feature.",
      category: "contact"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', icon: '❓' },
    { id: 'ordering', name: 'Ordering', icon: '🛒' },
    { id: 'payment', name: 'Payment', icon: '💳' },
    { id: 'shipping', name: 'Shipping', icon: '📦' },
    { id: 'returns', name: 'Returns', icon: '🔄' },
    { id: 'products', name: 'Products', icon: '✨' },
    { id: 'contact', name: 'Contact', icon: '📞' }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="help-screen">
      <header className="help-header">
        <div className="container">
          <button className="back-btn" onClick={() => navigate('/profile')}>
            ← Back
          </button>
          <h1 className="help-title">Help & Support</h1>
        </div>
      </header>

      <div className="container">
        <div className="help-content">
          <div className="help-hero">
            <div className="hero-icon">💬</div>
            <h2>How can we help you?</h2>
            <p>Find answers to common questions or get in touch with our support team</p>
          </div>

          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email Support</h3>
              <p>support@shivangichauhanbeauty.com</p>
              <p className="response-time">Response within 24 hours</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Phone Support</h3>
              <p>+91 98765 43210</p>
              <p className="response-time">Mon-Sat: 9 AM - 6 PM</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Available on website</p>
              <p className="response-time">Instant response</p>
            </div>
          </div>

          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            <div className="faq-list">
              {filteredFAQs.map(faq => (
                <div key={faq.id} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle">
                      {expandedFAQ === faq.id ? '−' : '+'}
                    </span>
                  </button>
                  {expandedFAQ === faq.id && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="additional-help">
            <h2>Still need help?</h2>
            <div className="help-options">
              <button className="help-option">
                <span className="option-icon">📝</span>
                <span>Submit a Ticket</span>
              </button>
              <button className="help-option">
                <span className="option-icon">📞</span>
                <span>Call Us Now</span>
              </button>
              <button className="help-option">
                <span className="option-icon">💬</span>
                <span>Start Live Chat</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpScreen;
