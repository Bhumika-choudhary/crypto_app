import "./Pricing.css";

export default function Pricing() {
  return (
    <div className="pricing">
      <div className="pricing-hero">
        <h1>Choose Your Plan</h1>
        <p>Select the perfect pricing plan that fits your trading needs and budget</p>
      </div>

      <div className="pricing-container">
        <div className="pricing-card basic">
          <div className="pricing-header">
            <h3>Basic</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">0</span>
              <span className="period">/month</span>
            </div>
            <p className="description">Perfect for beginners</p>
          </div>
          
          <ul className="pricing-features">
            <li className="included">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Track up to 10 cryptocurrencies
            </li>
            <li className="included">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Basic price alerts
            </li>
            <li className="included">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Market data updates
            </li>
            <li className="not-included">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              Advanced analytics
            </li>
            <li className="not-included">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              Portfolio insights
            </li>
          </ul>
          
          <button className="pricing-btn">Get Started</button>
        </div>

        <div className="pricing-card pro">
          <div className="pricing-header">
            <h3>Pro</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">29</span>
              <span className="period">/month</span>
            </div>
            <p className="description">For serious traders</p>
          </div>
          
          <ul className="pricing-features">
            <li className="included">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Track unlimited cryptocurrencies
            </li>
            <li className="included">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Advanced price alerts
            </li>
            <li className="included">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Real-time market data
            </li>
            <li className="included">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Advanced analytics
            </li>
            <li className="included">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Portfolio insights
            </li>
          </ul>
          
          <button className="pricing-btn primary">Start Free Trial</button>
        </div>

        <div className="pricing-card enterprise">
          <div className="pricing-header">
            <h3>Enterprise</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">99</span>
              <span className="period">/month</span>
            </div>
            <p className="description">For teams and institutions</p>
          </div>
          
          <ul className="pricing-features">
            <li className="included">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Everything in Pro
            </li>
            <li className="included">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              API access
            </li>
            <li className="included">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Priority support
            </li>
            <li className="included">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Custom integrations
            </li>
            <li className="included">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Dedicated account manager
            </li>
          </ul>
          
          <button className="pricing-btn">Contact Sales</button>
        </div>
      </div>

      <div className="pricing-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h4>Can I switch plans anytime?</h4>
            <p>Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
          </div>
          <div className="faq-item">
            <h4>Is there a free trial?</h4>
            <p>The Pro plan comes with a 14-day free trial. No credit card required to start your trial.</p>
          </div>
          <div className="faq-item">
            <h4>What payment methods do you accept?</h4>
            <p>We accept all major credit cards, debit cards, and cryptocurrency payments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
