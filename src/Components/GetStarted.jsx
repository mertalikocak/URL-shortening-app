import Worker from "../images/illustration-working.svg";
import "./GetStarted.scss";

function GetStarted() {
  return (
    <div className="container getStarted">
      <div className="content">
        <h1> More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </div>
      <img src={Worker} alt="Worker" />
    </div>
  );
}

export default GetStarted;
