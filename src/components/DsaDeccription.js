import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/BlogDescription.css"; // Add styles for this page

function BlogDescription() {
  const { id } = useParams(); // Get blog ID from the URL
  console.log("Fetching blog with ID:", id);

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/DsaBlogs/${id}`) // Ensure correct API endpoint
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => console.error("Error fetching blog:", error));
  }, [id]);

  if (!blog) {
    return <p className="loading">Loading...</p>;
  }
  
  return (
    <div className="Main-page"> 
    <div className="blog-content-container">
      <h1 className="blog-Heading">{blog.name}</h1>
      <img
        src={`http://localhost:5001/uploads/${blog.DescriptionImage}`}
        alt={blog.name}
        className="blog-Img"
      />
      <p className="blog-date">Published on {blog.date}</p>
      <p className="blog-Info">{blog.content}</p>
    </div>
    </div>
  );
} 

export default BlogDescription;
