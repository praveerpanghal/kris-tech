import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioMain = () => {
  return (
    <section className="feature bg-2">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-md-6">
            <h2 className="section-subtitle">WE BELIEVE IN GREAT IDEAS</h2>
            <p>
              Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <p>
              Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <p>
              Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <Link to="/portfolio" className="btn btn-view-works">View Works</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioMain;
