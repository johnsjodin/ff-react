function LandingChoice({onCreate, onLoad}) {
  return (
    <div className="landing">
      <button onClick={onCreate}>Create New Faction</button>
      <button onClick={onLoad}>Load Saved Faction</button>
    </div>
  );
}

export default LandingChoice;