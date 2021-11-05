export default function AboutMe() {
  return (
    <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img">
              <img src="img/about.jpg" alt="Image" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <div className="section-header text-left">
                <p>Learn About Me</p>
                <h2>10 Years Experience</h2>
              </div>
              <div className="about-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                  vulputate. Aliquam metus tortor, auctor id gravida
                </p>
              </div>
              <div className="skills">
                <div className="skill-name">
                  <p>Web Design</p>
                  <p>85%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="skill-name">
                  <p>Web Development</p>
                  <p>95%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="skill-name">
                  <p>Apps Design</p>
                  <p>90%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="skill-name">
                  <p>Apps Development</p>
                  <p>85%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <a className="btn" href="">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
