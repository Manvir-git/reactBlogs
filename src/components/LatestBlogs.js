import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is installed
import '../css/LatestBlogs.css';

function LatestBlogs() {
  const [blogs, setBlogs] = useState([]); // State to store blog data

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get('http://localhost:5001/api/LatestBlogs') // Replace with the correct API endpoint
      .then((response) => {
        setBlogs(response.data); // Store fetched blogs in state
      })
      .catch((error) => console.error('Error fetching Latest Blogs:', error));
  }, []);

  return (
    <div className="Latest-container">
      <h1 className="Latest-title">Latest Blogs</h1>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            {/* Clickable Blog Image */}
            <div className="blog-image">
              <Link to={`/blogs-description/${blog._id}`} className="blog-card-link">
                <img src={`http://localhost:5001/uploads/${blog.image}`} alt={blog.name} />
              </Link>
            </div>

            {/* Blog Content */}
            <div className="blog-content">
              {/* Clickable Blog Title */}
              <Link to={`/blogs-description/${blog._id}`} className="blog-card-link">
                <h2 className="blog-title-latest">{blog.name}</h2>
              </Link>

              <p className="blog-description">{blog.Description}</p>

              {/* Read More Button */}
              <Link to={`/blogs-description/${blog._id}`} className="blog-card-link">
                <button className="read-more-btn">Read More</button>
              </Link>

              <p className="blog-date">Published on {blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestBlogs;
