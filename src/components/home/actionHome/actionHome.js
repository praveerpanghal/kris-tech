import React from 'react';
import { Link } from 'react-router-dom';

const Action = () => {
  return (
    <section className="call-to-action bg-1 section-sm overly">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block">
              <h2 className="mb-3">We design delightful digital experiences.</h2>
              <p>
                Read more about what we do and our philosophy of design. Judge for yourself the work and results <br /> we’ve
                achieved for other clients, and meet our highly experienced team who just love to design.
              </p>
              <Link className="btn btn-main btn-solid-border" to="/contact">Tell Us Your Story</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Action;
