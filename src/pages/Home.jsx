import Slider from "../components/Slider";
 export const cardData = "I am Js variable."
const Home = () => {

  return (
    <>
      <div>
        <Slider />
        <div className="card-group">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                {cardData}
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </div>
          </div>
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </div>
          </div>
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
