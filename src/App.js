import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LatestBlogs from './components/LatestBlogs';
import Dsa from './components/DsaBlogs';
import About from './components/About';
import BlogDescription from './components/DsaDeccription';
import LatestDescription from './components/LatestDescription'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Latest-Blogs" element={<LatestBlogs/>}/>
        <Route path="/DSA" element={<Dsa/>}/>
        <Route path="/blog-description/:id" element={<BlogDescription />} />
        <Route path="/blogs-description/:id" element={<LatestDescription />} />
        <Route path="/About" element={<About/>}/>
      </Routes>
    </>
  );
}
export default App