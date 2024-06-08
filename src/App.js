import './App.css';
import "./plugins/bootstrap/bootstrap.min.css";
import "./plugins/Ionicons/css/ionicons.min.css";
import "./plugins/animate-css/animate.css";
import "./plugins/magnific-popup/magnific-popup.css";
import "./plugins/slick/slick.css";
import "./scss/style.scss"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home/home';
import PortfolioMain from "./components/portfolio-main/portfolio-main";

function App() {
  return (
    <div className="App">
      <Router>
       
        {/* <Home/> */}
       
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioMain />} />
          <Route path="/portfolio-single" element={<PortfolioSingle />} />
          <Route path="/submenu01" element={<Submenu01 />} />
          <Route path="/submenu02" element={<Submenu02 />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog-grid" element={<BlogGrid />} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="/blog-right-sidebar" element={<BlogRightSidebar />} />
          <Route path="/blog-left-sidebar" element={<BlogLeftSidebar />} />
          <Route path="/blog-full-width" element={<BlogFullWidth />} />
          <Route path="/about" element={<About />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
// Define your components for each route here or import them
//const Home = () => <div>Home Page</div>;
//const Portfolio = () => <div>Portfolio Page</div>;
const PortfolioSingle = () => <div>Portfolio Single Page</div>;
const Submenu01 = () => <div>Submenu 01</div>;
const Submenu02 = () => <div>Submenu 02</div>;
const Service = () => <div>Service Page</div>;
const BlogGrid = () => <div>Blog Grid Page</div>;
const BlogSingle = () => <div>Blog Single Page</div>;
const BlogRightSidebar = () => <div>Blog Right Sidebar Page</div>;
const BlogLeftSidebar = () => <div>Blog Left Sidebar Page</div>;
const BlogFullWidth = () => <div>Blog Full Width Page</div>;
const About = () => <div>About Us Page</div>;
const ComingSoon = () => <div>Coming Soon Page</div>;
const NotFound = () => <div>404 Page</div>;
const Faq = () => <div>FAQ Page</div>;
const Pricing = () => <div>Pricing Table Page</div>;
const Contact = () => <div>Contact Page</div>;
export default App;
