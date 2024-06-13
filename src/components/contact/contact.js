import React from 'react';
import './contact.scss'; // Ensure you have the SCSS file for styling

const Contact = () => {
  return (
    <div>
      <section className="page-title bg-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>Drop Us A Note</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quibusdam.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form">
        <div className="container">
          <form className="row" id="contact-form">
            <div className="col-md-6 col-sm-12">
              <div className="block">
                <div className="form-group">
                  <input name="user_name" type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input name="user_email" type="text" className="form-control" placeholder="Email Address" />
                </div>
                <div className="form-group">
                  <input name="user_subject" type="text" className="form-control" placeholder="Subject" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="block">
                <div className="form-group-2">
                  <textarea name="user_message" className="form-control" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button className="btn btn-default" type="button">Send Message</button>
              </div>
            </div>
            <div className="error" id="error">Sorry Msg does not sent</div>
            <div className="success" id="success">Message Sent</div>
          </form>
          <div className="contact-box row">
            <div className="col-md-6 col-sm-12">
              <div className="block">
                <h2>Stop By For A visit</h2>
                <ul className="address-block">
                  <li>
                    <i className="ion-ios-location-outline"></i> North Main Street, Brooklyn Australia
                  </li>
                  <li>
                    <i className="ion-ios-email-outline"></i> Email: contact@mail.com
                  </li>
                  <li>
                    <i className="ion-ios-telephone-outline"></i> Phone: +88 01672 506 744
                  </li>
                </ul>
                <ul className="social-icons">
                  <li>
                    <a href="http://www.themefisher.com"><i className="ion-social-googleplus-outline"></i></a>
                  </li>
                  <li>
                    <a href="http://www.themefisher.com"><i className="ion-social-linkedin-outline"></i></a>
                  </li>
                  <li>
                    <a href="http://www.themefisher.com"><i className="ion-social-pinterest-outline"></i></a>
                  </li>
                  <li>
                    <a href="http://www.themefisher.com"><i className="ion-social-dribbble-outline"></i></a>
                  </li>
                  <li>
                    <a href="http://www.themefisher.com"><i className="ion-social-twitter-outline"></i></a>
                  </li>
                  <li>
                    <a href="http://www.themefisher.com"><i className="ion-social-facebook-outline"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <div className="block">
                <div className="google-map">
                  <div className="map" id="map_canvas" data-latitude="51.5223477" data-longitude="-0.1622023"
                    data-marker="images/marker.png"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
