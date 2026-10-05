import netscape from '../assets/netscape.gif';
import geocities from '../assets/geocities.gif';
import guestbook from '../assets/guestbook.gif';
import firemail from '../assets/firemail.gif';
import constructionSign from '../assets/construction-sign.gif';

// Räknas upp en gång per sidladdning. Utanför komponenten så StrictMode inte dubbelräknar.
let visits = 1337;
try {
  visits = Number(localStorage.getItem('ff-visits') ?? 1337) + 1;
  localStorage.setItem('ff-visits', visits);
} catch {
  // Ingen localStorage (privat läge) – räknaren står still.
}

function Footer() {
  return (
    <footer className="footer">
      <div className="gif-row">
        <img src={guestbook} alt="Sign my guestbook" />
        <img src={constructionSign} alt="" />
        <img src={firemail} alt="E-mail me" />
      </div>
      <p>
        You are visitor number{' '}
        <span className="counter">{String(visits).padStart(6, '0')}</span>
      </p>
      <p className="webring">
        <span>[ &lt;&lt; Prev ]</span> <span>[ Fantasy Factions WebRing ]</span> <span>[ Next &gt;&gt; ]</span>
      </p>
      <div className="gif-row">
        <img src={netscape} alt="Netscape Now!" />
        <img src={geocities} alt="GeoCities" />
      </div>
      <p className="small">© 1997 Faction Factory. Best viewed at 800x600.</p>
    </footer>
  );
}

export default Footer;
