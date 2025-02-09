import React from 'react';
import '../css/About.css';
function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1 className="about-title">About Manvir Blogs</h1>
        <p className="about-subtitle">Your go-to resource for mastering Data Structures and Algorithms (DSA).</p>
      </section>

      <section className="about-content">
        <h2 className="about-card-title">Our Mission</h2>
        <p className="about-card-text">
          At Manvir Blogs, we aim to simplify the learning process of Data Structures and Algorithms 
          through well-structured tutorials, interactive content, and real-world problem-solving techniques. 
          Whether you're a beginner or an experienced developer, our platform provides the tools to help 
          you excel in coding interviews and competitive programming.
        </p>
      </section>

      <section className="about-content">
        <h2 className="about-card-title">What We Offer</h2>
        <ul className="about-card-list">
          <li><strong>Comprehensive Tutorials:</strong> Step-by-step explanations on core DSA topics.</li>
          <li><strong>Interactive Code Editor:</strong> Hands-on coding exercises with instant feedback.</li>
          <li><strong>Algorithm Visualizations:</strong> Graphical representations to enhance understanding.</li>
          <li><strong>Community Discussions:</strong> Engage with fellow learners and share your insights.</li>
          <li><strong>Interview Preparation:</strong> Curated problems to help you ace technical interviews.</li>
        </ul>
      </section>

      <section className="about-content">
        <h2 className="about-card-title">Our Vision</h2>
        <p className="about-card-text">
          We believe in making high-quality coding education accessible to everyone. Our goal is to 
          bridge the gap between theoretical knowledge and practical application by providing an engaging 
          and effective learning experience.
        </p>
      </section>

      <section className="about-cta">
        <h2 className="about-card-title">Join Us</h2>
        <p className="about-card-text">
          Ready to enhance your problem-solving skills and become a DSA expert? Explore our latest blogs, 
          start practicing with our interactive editor, and take the next step in your coding journey.
        </p>
        <a href="/DSA" className="cta-button">Start Learning</a>
      </section>
    </div>
  );
}

export default About;
