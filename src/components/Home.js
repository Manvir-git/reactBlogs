import { Link } from 'react-router-dom';
import '../css/Home.css';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}

      
      <section className="hero-section">
        <div className="header-container animate-on-scroll">
          <Link to="/"></Link>
          <h1 className="blog-title">Manvir Blogs</h1>
          <div className="dsa-branding">
            <h2 className="brand-accent">MANY</h2>
            <h3 className="brand-tagline">DSA MASTERY.</h3>
          </div>
        </div>

        <div className="content-container animate-on-scroll">
          <p className="hero-text">
            Reimagine the way you learn algorithms<br />
            Curated learning paths delivered through interactive content, designed to help you<br />
            conquer coding interviews and master complex concepts.
          </p>

          <Link to="/DSA" className="cta-button">
            BEGIN YOUR JOURNEY
          </Link>
        </div>
      </section>

      {/* Features Section */}
{/* Learning Path Section */}
<section className="features-section animate-on-scroll">
  <div className="feature-card">
    <div className="feature-icon">📘</div>
    <h4>1. Foundational Theory</h4>
    <p>Master time/space complexity (Big O), basic data structures (Arrays, Linked Lists), and algorithmic paradigms (Brute Force, Greedy)</p>
  </div>

  <div className="feature-card">
    <div className="feature-icon">⚙️</div>
    <h4>2. Implementation Practice</h4>
    <p>Implement trees/graphs (DFS/BFS), hash tables, and recursion patterns. Solve 100+ curated problems with runtime analysis</p>
  </div>

  <div className="feature-card">
    <div className="feature-icon">📈</div>
    <h4>3. Optimization Mastery</h4>
    <p>Advanced DP patterns, graph optimization (Dijkstra), system design patterns, and parallel algorithm analysis</p>
  </div>
</section>

      {/* DSA Topics Grid */}
      <section className="topics-section animate-on-scroll">
        <h3 className="section-title">Popular DSA Topics</h3>
        <div className="topics-grid">
          <div className="topic-card">
            <h4>Array Manipulation</h4>
            <p>Master sliding window, two-pointer technique</p>
            <Link to="/arrays" className="topic-link">Explore →</Link>
          </div>
          <div className="topic-card">
            <h4>Graph Algorithms</h4>
            <p>DFS, BFS, Dijkstra's, and MST implementations</p>
            <Link to="/graphs" className="topic-link">Explore →</Link>
          </div>
          <div className="topic-card">
            <h4>Dynamic Programming</h4>
            <p>From Fibonacci to Knapsack problems</p>
            <Link to="/dp" className="topic-link">Explore →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;