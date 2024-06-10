import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioSingle = () => {
  return (
    <section className="portfolio-single-page section-sm">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-7">
            <PortfolioSingleSlider />
          </div>
          <div className="col-xl-4 col-lg-5 mt-5 mt-lg-0">
            <ProjectDetails />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ProjectContent />
          </div>
        </div>
      </div>
      <RelatedProjects />
    </section>
  );
};

const PortfolioSingleSlider = () => {
    const settings = {
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
      };
    return (
        <Slider {...settings} className="portfolio-single-slider">
          {['portfolio-big-1.jpg', 'portfolio-big-2.jpg', 'portfolio-big-3.jpg', 'portfolio-big-4.jpg', 'portfolio-big-5.jpg', 'portfolio-big-6.jpg'].map((image, index) => (
            <div key={index}>
              <img className="img-fluid" src={`images/portfolio/${image}`} alt={`Portfolio ${index + 1}`} />
            </div>
          ))}
        </Slider>
      );
};

const ProjectDetails = () => {
  return (
    <div className="project-details">
      <h4>Project Details</h4>
      <ul>
        <li><span><i className="fa fa-shirtsinbulk"></i> Client</span><strong>Jannie Kelonsky</strong></li>
        <li><span><i className="fa fa-shield"></i> What We Did</span><strong>Website Redesign</strong></li>
        <li><span><i className="fa fa-ils"></i> Tools Used</span><strong>Photoshop, Illustrator</strong></li>
        <li><span><i className="icon-calendar3"></i>Completed on:</span> 17th March 2020</li>
        <li><span><i className="icon-lightbulb"></i>Skills:</span> HTML5 / PHP / CSS3</li>
        <li><span><i className="icon-link"></i>Client:</span> <a href="index.html">Google</a></li>
      </ul>
    </div>
  );
};

const ProjectContent = () => {
  return (
    <div className="project-content mt-50">
      <h2 className="mb-3">Behance Website Redesign</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <div className="my-4">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/LKFuXETZUsI?rel=0" allowFullScreen></iframe>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
    </div>
  );
};

const RelatedProjects = () => {
  const projects = [
    {
      imgSrc: 'images/portfolio/portfolio-big-2.jpg',
      title: 'Dribbble Redesign',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      link: 'portfolio-single.html',
    },
    {
      imgSrc: 'images/portfolio/portfolio-big-3.jpg',
      title: 'Dribbble Redesign',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      link: 'portfolio-single.html',
    },
  ];

  return (
    <section className="related-projects section-sm bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h2>Related Other Projects</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 mt-5" key={index}>
              <div className="content">
                <img className="img-fluid" src={project.imgSrc} alt={project.title} />
                <div className="content mt-4">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <a href={project.link} className="btn btn-small">View Case Study</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSingle;
