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
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Service from './components/service/service';
import Contact from './components/contact/contact';
import PortfolioFilter from './components/portfolio/portfolioFilter/portfolioFilter';
import PortfolioSingle from './components/portfolio/portfolioSingle/portfolioSingle';
import AboutUs from './components/aboutUs/aboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioFilter/>} />
          <Route path="/portfolio-single" element={<PortfolioSingle />} />
          <Route path="/submenu01" element={<Submenu01 />} />
          <Route path="/submenu02" element={<Submenu02 />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog-grid" element={<BlogGrid />} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="/blog-right-sidebar" element={<BlogRightSidebar />} />
          <Route path="/blog-left-sidebar" element={<BlogLeftSidebar />} />
          <Route path="/blog-full-width" element={<BlogFullWidth />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/faq" element={<Contact />} />
          <Route path="/pricing" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
// Define your components for each route here or import them

//const PortfolioSingle = () => <div>Portfolio Single Page</div>;
const Submenu01 = () => <div>Submenu 01</div>;
const Submenu02 = () => <div>Submenu 02</div>;
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
export default App;
