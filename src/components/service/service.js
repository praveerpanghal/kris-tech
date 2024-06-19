import React from 'react';
import './service.scss'; // Ensure you have the SCSS file for styling
import ScrollToTop from '../home/scrollToTop/scrollToTop';

const Service = () => {
  return (
    <div>
      <section className="page-title bg-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>Services</h1>
                <p className="text-justify">We offer a range of services to support your business needs.
                  Our comprehensive training programs are designed to upskill professionals in the latest technologies
                  and methodologies, ensuring practical and impactful learning experiences.
                  Through our placement services, we connect skilled professionals with leading companies,
                  facilitating successful and fulfilling careers.
                  Our recruitment team specializes in finding top talent that fits your company’s culture and specific requirements.
                  With our bench marketing services, we help IT consultants find suitable projects quickly by leveraging our extensive network and industry knowledge.
                  Additionally, we create custom web and mobile applications that are visually stunning and highly functional,
                  driving engagement and achieving your business objectives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-about section">
        <div className="container">
          <div className="row align-items-center text-center text-lg-left">
            <div className="col-lg-6">
              <h2>Innovative UX/UI Design, Training, and Placement Agency</h2>
              <p className="mt-30">
                We are a leading agency specializing in creative UX/UI design, professional training, and job placement services.
                Our mission is to transform digital experiences through innovative design while empowering professionals
                with the skills they need to succeed in the tech industry.
              </p>
              <p className="mt-30">
                Our comprehensive training programs are designed to keep professionals at the forefront of the industry.
                We offer courses on the latest technologies and best practices, providing hands-on experience and real-world applications.
                Our goal is to equip individuals and teams with the knowledge and skills to excel in their careers.
              </p>
              <p className="mt-30">
                Our placement services connect talented professionals with top companies.
                We work closely with both job seekers and employers to ensure a perfect match.
                By understanding the unique needs of each party, we facilitate successful placements that lead to long-term career growth and business success.
              </p>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src="images/company/company-group-pic.jpg" alt="Company Group" />
            </div>
          </div>
        </div>
      </section>

      <section className="service-arrow">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-sm-6 bg-primary">
              <div className="block">
                <i className="ion-erlenmeyer-flask text-white"></i>
                <h3 className="text-white mb-3">UX/UI Interface Design</h3>
                <p className='text-justify'>Our team excels in creating intuitive and visually captivating interfaces that enhance user experience. 
                  By focusing on user needs and behaviors, we design interfaces that are not only beautiful but also highly functional. From initial wireframes to polished prototypes, every element is crafted to provide a seamless and engaging interaction. 
                  Our goal is to ensure your digital products are easy to use and leave a lasting impression on your users.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 bg-primary bg-primary-dark">
              <div className="block">
                <i className="ion-leaf text-white"></i>
                <h3 className="text-white mb-3">Digital Marketing</h3>
                <p className="text-justify">Our digital marketing services are designed to help your business grow and succeed in the online landscape. 
                  We create tailored marketing strategies that increase your brand's visibility, engage your target audience, 
                  and drive conversions. Our services include search engine optimization (SEO), social media marketing,
                   content creation, email marketing, and pay-per-click (PPC) advertising. 
                  </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 bg-primary bg-primary-darker">
              <div className="block">
                <i className="ion-lightbulb text-white"></i>
                <h3 className="text-white mb-3">Web / App Development</h3>
                <p className="text-justify">Our web and app development services provide custom solutions tailored to your business needs.
                   We specialize in creating robust, scalable, and user-friendly web and mobile applications. 
                   Our development process involves thorough planning, innovative design, and agile execution to
                    deliver high-quality products. From e-commerce platforms to enterprise applications,
                     we ensure your digital solutions are secure, efficient, and aligned with your business objectives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-list section bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h2>What we do best</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="block">
                <h3 className="mb-3">User research</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, unde.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="block">
                <h3 className="mb-3">Product marketing</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, unde.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="block">
                <h3 className="mb-3">Visual design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, unde.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="block">
                <h3 className="mb-3">Front-end engineering</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, unde.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="block">
                <h3 className="mb-3">Usability testing & analytics</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, unde.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="block">
                <h3 className="mb-3">Design sprints & prototyping</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, unde.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action bg-1 section-sm overly">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h2 className="mb-3">We design delightful digital experiences.</h2>
                <p>
                  Read more about what we do and our philosophy of design. Judge for yourself The work and results
                  we’ve achieved for other clients, and meet our highly experienced Team who just love to design.
                </p>
                <a className="btn btn-main btn-solid-border" href="contact.html">Tell Us Your Story</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
};

export default Service;
