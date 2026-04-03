import "./Features.css";

export default function Features() {
  return (
    <div className="features">
      <div className="features-hero">
        <h1>Our Features</h1>
        <p>Discover the powerful tools and capabilities that make our crypto marketplace the best choice for traders and investors</p>
      </div>

      <div className="features-container">
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
          </div>
          <h3>Secure Trading</h3>
          <p>Bank-level security protocols protect your assets and personal information with advanced encryption and multi-factor authentication.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <h3>Real-Time Data</h3>
          <p>Get instant access to live market data, price updates, and trading volumes to make informed decisions in real-time.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="9" y1="9" x2="15" y2="9"/>
              <line x1="9" y1="15" x2="15" y2="15"/>
            </svg>
          </div>
          <h3>Portfolio Tracking</h3>
          <p>Monitor your cryptocurrency portfolio with comprehensive analytics, profit/loss tracking, and performance insights.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <h3>Price Alerts</h3>
          <p>Set custom price alerts for your favorite cryptocurrencies and never miss important market movements again.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
          </div>
          <h3>Multi-Currency Support</h3>
          <p>Trade and track thousands of cryptocurrencies across multiple fiat currencies including USD, EUR, and INR.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3>Advanced Analytics</h3>
          <p>Access professional charts, technical indicators, and market analysis tools to enhance your trading strategy.</p>
        </div>
      </div>

      <div className="features-cta">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of traders who trust our platform for their cryptocurrency needs</p>
        <button className="cta-button">Start Trading Now</button>
      </div>
    </div>
  );
}
