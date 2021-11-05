export default function DiscountBanner() {
  return (
    <div className="banner wow zoomIn" data-wow-delay="0.1s">
      <div className="container">
        <div className="section-header text-center">
          <p>Awesome Discount</p>
          <h2>
            Get <span>30%</span> Discount
          </h2>
        </div>
        <div className="container banner-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec pretium mi. Curabitur facilisis ornare velit non vulputate.
            Aliquam metus tortor, auctor id gravida condimentum, viverra quis
            sem. Curabitur non nisl nec nisi scelerisque maximus.
          </p>
          <a className="btn">Order Now</a>
        </div>
      </div>
    </div>
  );
}
