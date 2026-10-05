import skull from '../assets/skull.gif';
import flames from '../assets/flames.gif';

function Header({ onHome }) {
  return (
    <header className="header">
      <button className="home-button" onClick={onHome}>
        <img src={skull} alt="" />
        <h1>Faction Factory</h1>
        <img src={skull} alt="" />
      </button>
      <div className="marquee">
        <span>
          *~*~* WELCOME 2 THE FACTION FACTORY!!! *~*~* Create ur own nations, cults &amp; guilds *~*~*
          Sign my guestbook!!! *~*~* Best viewed in Netscape Navigator @ 800x600 *~*~*
        </span>
      </div>
      <img className="flames" src={flames} alt="" />
    </header>
  );
}

export default Header;
