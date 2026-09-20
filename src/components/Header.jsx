import skull from '../assets/skull.gif';

function Header({ onHome }) {
  return (
    <header className="header">
      <button className="home-button" onClick={onHome}>
        <img src={skull} alt="" />
        <h1>Faction Factory</h1>
        <img src={skull} alt="" />
      </button>
    </header>
  );
}

export default Header;