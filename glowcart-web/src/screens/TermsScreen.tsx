import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TermsScreen.css';

const TermsScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="terms-screen">
      <header className="terms-header">
        <div className="container">
          <button className="back-btn" onClick={() => navigate('/profile')}>
            ← Back
          </button>
          <h1 className="terms-title">Terms & Conditions</h1>
        </div>
      </header>

      <div className="container">
        <div className="terms-content">
          <div className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Shivangi Chauhan Beauty Ecommerce Platform ("the Platform"), 
              you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </div>

          <div className="terms-section">
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) 
              on Shivangi Chauhan Beauty's website for personal, non-commercial transitory viewing only.
            </p>
            <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the Platform</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>3. Product Information</h2>
            <p>
              We strive to display accurate product information, including prices, descriptions, and images. 
              However, we do not warrant that product descriptions or other content is accurate, complete, 
              reliable, current, or error-free.
            </p>
          </div>

          <div className="terms-section">
            <h2>4. Pricing and Payment</h2>
            <p>
              All prices are subject to change without notice. We reserve the right to modify or discontinue 
              any product at any time. Payment must be made at the time of order placement.
            </p>
          </div>

          <div className="terms-section">
            <h2>5. Shipping and Delivery</h2>
            <p>
              Delivery times are estimates only. We are not responsible for delays beyond our control. 
              Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.
            </p>
          </div>

          <div className="terms-section">
            <h2>6. Returns and Refunds</h2>
            <p>
              Products may be returned within 30 days of delivery in their original condition. 
              Refunds will be processed within 5-7 business days after we receive the returned item.
            </p>
          </div>

          <div className="terms-section">
            <h2>7. Privacy Policy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also governs your 
              use of the Platform, to understand our practices.
            </p>
          </div>

          <div className="terms-section">
            <h2>8. Limitation of Liability</h2>
            <p>
              In no event shall Shivangi Chauhan Beauty or its suppliers be liable for any damages 
              (including, without limitation, damages for loss of data or profit, or due to business interruption) 
              arising out of the use or inability to use the Platform.
            </p>
          </div>

          <div className="terms-section">
            <h2>9. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India 
              and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>

          <div className="terms-section">
            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately 
              upon posting on the Platform. Your continued use of the Platform constitutes acceptance of the modified terms.
            </p>
          </div>

          <div className="terms-footer">
            <p className="last-updated">Last updated: August 15, 2024</p>
            <p className="contact-info">
              For questions about these Terms & Conditions, please contact us at:<br />
              Email: support@shivangichauhanbeauty.com<br />
              Phone: +91 98765 43210
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsScreen;
