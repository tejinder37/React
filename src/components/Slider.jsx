import one from "/1.jpg";
import two from "/2.jpg";
import three from "/3.jpg";

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide  test"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner h-100 w-100 ">
          <div className="carousel-item active h-100 w-100">
            <img
              src={one}
              className="d-block w-100  h-100 object-fit-contain"
              alt="..."
            />
          </div>
          <div className="carousel-item h-100 w-100">
            <img
              src={two}
              className="d-block w-100 h-100 object-fit-contain"
              alt="..."
            />
          </div>
          <div className="carousel-item h-100 w-100">
            <img
              src={three}
              className="d-block w-100  h-100 object-fit-contain"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
