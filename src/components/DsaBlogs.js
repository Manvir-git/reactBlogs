
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is installed
import '../css/LatestBlogs.css';

function Dsa() {
  const [blogs, setBlogs] = useState([]); // State to store blog data

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get('http://localhost:5001/api/DsaBlogs') // Replace with the correct API endpoint
      .then((response) => {
        setBlogs(response.data); // Store fetched blogs in state
      })
      .catch((error) => console.error('Error fetching Latest Blogs:', error));
  }, []);

  return (
    <>
      <div className="Latest-container">
        <h1 className="Latest-title">Data Structure & Algorithms</h1>
        <div className="blog-list">

          {blogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <div className="blog-image">
              <Link 
              to={`/blog-description/${blog._id}`} // Assuming you have a unique ID for each blog
              key={index}
              className="blog-card-link"
            >
                <img src={`http://localhost:5001/uploads/${blog.image}`} alt={blog.name} />
                </Link>
              </div>
              <div className="blog-content">
              <Link 
                  to={`/blog-description/${blog._id}`} 
                  key={index}
                  className="blog-card-link">
                   <h2 className="blog-title-latest">{blog.name}</h2>
                  </Link>
                  
                <p className="blog-description">{blog.Description}</p>
                <Link 
              to={`/blog-description/${blog._id}`} // Assuming you have a unique ID for each blog
              key={index}
              className="blog-card-link"
            >
                <button className="read-more-btn">Read More</button>
                  </Link>
                <p className="blog-date">Published on {blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default Dsa;
