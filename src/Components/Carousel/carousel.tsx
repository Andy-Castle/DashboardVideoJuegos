import "./carousel.css";

function Carousel() {
  return (
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="bd-placeholder-img img-slide-1"></div>
          <div className="container">
            <div className="carousel-caption">
              <h1>Palword</h1>
              <p className="parrafo">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
                ea natus!
              </p>
              <p>
                <a className="btn btn-lg color" href="#palworld">
                  Saber mas
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="bd-placeholder-img img-slide-2"></div>
          <div className="container">
            <div className="carousel-caption">
              <h1>Stellar Blade</h1>
              <p className="parrafo">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
                sunt dolorem.
              </p>
              <p>
                <a className="btn btn-lg color" href="#stellar">
                  Saber mas
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="bd-placeholder-img img-slide-3"></div>
          <div className="container">
            <div className="carousel-caption">
              <h1>Tekken 8</h1>
              <p className="parrafo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
                sit incidunt!
              </p>
              <p>
                <a className="btn btn-lg color" href="#tekken">
                  Saber mas
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
