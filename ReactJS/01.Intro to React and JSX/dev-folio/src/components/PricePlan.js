export default function PricePlan() {
  return (
    <div className="price" id="price">
      <div className="container">
        <div
          className="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>Pricing Plan</p>
          <h2>Affordable Price</h2>
        </div>
        <div className="row">
          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="price-item">
              <div className="price-header">
                <div className="price-title">
                  <h2>Basic</h2>
                </div>
                <div className="price-prices">
                  <h2>
                    <small>$</small>49<span>/ mo</span>
                  </h2>
                </div>
              </div>
              <div className="price-body">
                <div className="price-description">
                  <ul>
                    <li>Bootstrap 4</li>
                    <li>Font Awesome 5</li>
                    <li>Responsive Design</li>
                    <li>Browser Compatibility</li>
                    <li>Easy To Use</li>
                  </ul>
                </div>
              </div>
              <div className="price-footer">
                <div className="price-action">
                  <a className="btn" href="">
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.0s">
            <div className="price-item featured-item">
              <div className="price-header">
                <div className="price-title">
                  <h2>Standard</h2>
                </div>
                <div className="price-prices">
                  <h2>
                    <small>$</small>99<span>/ mo</span>
                  </h2>
                </div>
              </div>
              <div className="price-body">
                <div className="price-description">
                  <ul>
                    <li>Bootstrap 4</li>
                    <li>Font Awesome 5</li>
                    <li>Responsive Design</li>
                    <li>Browser Compatibility</li>
                    <li>Easy To Use</li>
                  </ul>
                </div>
              </div>
              <div className="price-footer">
                <div className="price-action">
                  <a className="btn" href="">
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="price-item">
              <div className="price-header">
                <div className="price-title">
                  <h2>Premium</h2>
                </div>
                <div className="price-prices">
                  <h2>
                    <small>$</small>149<span>/ mo</span>
                  </h2>
                </div>
              </div>
              <div className="price-body">
                <div className="price-description">
                  <ul>
                    <li>Bootstrap 4</li>
                    <li>Font Awesome 5</li>
                    <li>Responsive Design</li>
                    <li>Browser Compatibility</li>
                    <li>Easy To Use</li>
                  </ul>
                </div>
              </div>
              <div className="price-footer">
                <div className="price-action">
                  <a className="btn" href="">
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
