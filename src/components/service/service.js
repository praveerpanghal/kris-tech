import React from 'react';
import './service.scss'; // Ensure you have the SCSS file for styling

const Service = () => {
  return (
    <div>
      <section className="page-title bg-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, ex!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-about section">
        <div className="container">
          <div className="row align-items-center text-center text-lg-left">
            <div className="col-lg-6">
              <h2>Creative UX/UI Design Agency</h2>
              <p className="mt-30">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate soluta corporis odit, optio cum! Accusantium numquam ab, natus excepturi architecto earum ipsa aliquam, illum, omnis rerum, eveniet officia nihil. Eum quod iure nulla, soluta architecto distinctio. Nesciunt odio ullam expedita, neque fugit maiores sunt perferendis placeat autem animi, nihil quis suscipit quibusdam ut reiciendis doloribus natus nemo id quod illum aut culpa perspiciatis consequuntur tempore? Facilis nam vitae iure quisquam eius harum consequatur sapiente assumenda, officia voluptas quas numquam placeat, alias molestias nisi laudantium nesciunt perspiciatis suscipit hic voluptate corporis id distinctio earum. Dolor reprehenderit fuga dolore officia adipisci neque!
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
                <h3 className="text-white mb-3">Interface Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe enim impedit repudiandae omnis est temporibus.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 bg-primary bg-primary-dark">
              <div className="block">
                <i className="ion-leaf text-white"></i>
                <h3 className="text-white mb-3">Product Branding</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe enim impedit repudiandae omnis est temporibus.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 bg-primary bg-primary-darker">
              <div className="block">
                <i className="ion-lightbulb text-white"></i>
                <h3 className="text-white mb-3">Game Development</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe enim impedit repudiandae omnis est temporibus.</p>
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
    </div>
  );
};

export default Service;
