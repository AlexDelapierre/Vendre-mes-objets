import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // <-- nouvel état pour le menu
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifie la présence d'un token pour l'état de connexion
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    navigate('/login');
    setMenuOpen(false); // ferme le menu après logout
  };

  const handleLinkClick = () => setMenuOpen(false); // ferme le menu après clic sur lien

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="navbar-brand">
            VendreMesObjets
          </Link>

          <ul className={menuOpen ? 'open' : ''}>
            <li><Link to="/" onClick={handleLinkClick}>Objets à vendre</Link></li>
            <li>
              <Link
                id="nav-addObject"
                to={isLoggedIn ? "/ajout" : "/login"}
                onClick={e => {
                  if (!isLoggedIn) {
                    e.preventDefault();
                    navigate('/login');
                  }
                  handleLinkClick();
                }}
              >
                Vendre un objet
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul className={menuOpen ? 'open' : ''}>
            {!isLoggedIn && (
              <>
                <li id="nav-signup"><Link to="/signup" onClick={handleLinkClick}>Inscription</Link></li>
                <li id="nav-login"><Link to="/login" onClick={handleLinkClick}>Connexion</Link></li>
              </>
            )}
            {isLoggedIn && (
              <li id="nav-logout">
                <a href="#" id="logout-btn" onClick={handleLogout}>Déconnexion</a>
              </li>
            )}
          </ul>

          {/* bouton hamburger déplacé ici */}
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );

};

export default Navbar;
