import newGif from '../assets/new.gif';
import underConstruction from '../assets/under-construction.gif';

function LandingChoice({onCreate, onLoad}) {
  return (
    <div className="landing">
      <p className="intro">
        Welcome, traveller! Pick an option below to begin. <span className="blink">NEW!!</span>
      </p>
      <div className="landing-buttons">
        <button onClick={onCreate}>
          <img src={newGif} alt="" /> Create New Faction
        </button>
        <button onClick={onLoad}>Load Saved Faction</button>
      </div>
      <img src={underConstruction} alt="This page is under construction" className="under-construction" />
    </div>
  );
}

export default LandingChoice;
