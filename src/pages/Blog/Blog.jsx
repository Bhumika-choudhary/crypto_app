import "./Blog.css";
import { useState } from "react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "Bitcoin Reaches New All-Time High",
      excerpt: "Bitcoin has surged past previous records, reaching unprecedented levels as institutional adoption continues to grow...",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Market Analysis",
      image: "📈"
    },
    {
      id: 2,
      title: "Ethereum 2.0: The Future of DeFi",
      excerpt: "The Ethereum network continues to evolve with the full implementation of Ethereum 2.0, promising faster transactions...",
      author: "Michael Chen",
      date: "March 12, 2024",
      category: "Technology",
      image: "🔗"
    },
    {
      id: 3,
      title: "Understanding Crypto Taxation",
      excerpt: "Navigating the complex world of cryptocurrency taxation can be challenging. Here's what you need to know...",
      author: "David Williams",
      date: "March 10, 2024",
      category: "Regulation",
      image: "📊"
    },
    {
      id: 4,
      title: "Top 5 Altcoins to Watch in 2024",
      excerpt: "While Bitcoin and Ethereum dominate the market, several altcoins are showing promising potential for growth...",
      author: "Emma Davis",
      date: "March 8, 2024",
      category: "Investment",
      image: "🚀"
    },
    {
      id: 5,
      title: "Security Best Practices for Crypto Investors",
      excerpt: "Protecting your digital assets is crucial in today's landscape. Learn the essential security measures...",
      author: "Robert Martinez",
      date: "March 5, 2024",
      category: "Security",
      image: "🔒"
    },
    {
      id: 6,
      title: "The Rise of Central Bank Digital Currencies",
      excerpt: "Governments worldwide are exploring CBDCs as the future of digital money. What does this mean for crypto...",
      author: "Lisa Anderson",
      date: "March 3, 2024",
      category: "Industry News",
      image: "🏦"
    }
  ];

  const categories = ["All", "Market Analysis", "Technology", "Regulation", "Investment", "Security", "Industry News"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="blog">
      <div className="blog-hero">
        <h1>Crypto Insights & News</h1>
        <p>Stay updated with the latest trends, analysis, and news in the cryptocurrency world</p>
      </div>

      <div className="blog-categories">
        <div className="category-filters">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="blog-container">
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <div className="blog-icon">{post.image}</div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-author">
                  <div className="author-avatar">
                    <span>{post.author.charAt(0)}</span>
                  </div>
                  <div className="author-info">
                    <span className="author-name">{post.author}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="blog-cta">
        <h2>Stay Informed</h2>
        <p>Get the latest crypto news and insights delivered to your inbox weekly</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email address" />
          <button className="subscribe-btn" onClick={() => alert('Newsletter subscription feature coming soon!')}>Subscribe</button>
        </div>
      </div>

      <div className="blog-actions">
        <h2>Ready to Start Trading?</h2>
        <p>Join thousands of traders who trust our platform for their cryptocurrency needs</p>
        <div className="action-buttons">
          <button className="action-btn">Get Started</button>
          <button className="action-btn primary">Start Free Trial</button>
          <button className="action-btn">Contact Sales</button>
        </div>
      </div>
    </div>
  );
}
