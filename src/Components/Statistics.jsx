import "./Statistics.scss";
import BrandRec from "../images/icon-brand-recognition.svg";
import Detailed from "../images/icon-detailed-records.svg";
import Customizable from "../images/icon-fully-customizable.svg";

function Statistics() {
  return (
    <div className="container statistics">
      <div className="content">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="line"></div>
        <div className="cards">
          <div className="card">
            <img src={BrandRec} alt="Graph" />

            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="card">
            <img src={Detailed} alt="Speed-meter" />
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="card">
            <img src={Customizable} alt="Customizable" />
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
