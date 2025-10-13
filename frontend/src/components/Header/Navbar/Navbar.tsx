import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    navigate("/login");
    setMenuOpen(false);
    setAccountOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setAccountOpen(false);
  };

  const handleAccountToggle = () => {
    setAccountOpen(!accountOpen);
  };

  return (
    <header>
      <nav className="navbar">
        {/* Partie gauche */}
        <div className="navbar-left">
          <Link to="/" className="navbar-brand">
            Vintago
          </Link>

          <ul className="nav-left-links">
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to={isLoggedIn ? "/ajout" : "/login"}
                onClick={(e) => {
                  if (!isLoggedIn) {
                    e.preventDefault();
                    navigate("/login");
                  }
                  handleLinkClick();
                }}
              >
                Vendre un objet
              </Link>
            </li>
          </ul>
        </div>

        {/* Partie droite */}
        <div className="navbar-right">
          <ul className="nav-right-links">
            {/* Panier visible toujours */}
            <li>
              <Link to={isLoggedIn ? "/cart" : "/login"} onClick={handleLinkClick}>
                <FiShoppingCart size={22} />
              </Link>
            </li>

            {/* Mon compte icon visible toujours */}
            {isLoggedIn && (
              <li className="account-menu">
                <button onClick={handleAccountToggle} className="account-btn">
                  <FiUser size={22} />
                </button>
                <ul className={`account-dropdown ${accountOpen ? "active" : ""}`}>
                  <li>
                    <Link to="/profile" onClick={handleLinkClick}>
                      Profil
                    </Link>
                  </li>
                  <li>
                    <Link to="/my-products" onClick={handleLinkClick}>
                      Mes objets à vendre
                    </Link>
                  </li>
                  <li>
                    <a href="#" onClick={handleLogout}>
                      Déconnexion
                    </a>
                  </li>
                </ul>
              </li>
            )}

            {!isLoggedIn && (
              <>
                <li>
                  <Link to="/signup" onClick={handleLinkClick}>
                    Inscription
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={handleLinkClick}>
                    Connexion
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Hamburger mobile */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu mobile fusionné */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to={isLoggedIn ? "/ajout" : "/login"}
                onClick={(e) => {
                  if (!isLoggedIn) {
                    e.preventDefault();
                    navigate("/login");
                  }
                  handleLinkClick();
                }}
              >
                Vendre un objet
              </Link>
            </li>

            {!isLoggedIn && (
              <>
                <li>
                  <Link to="/signup" onClick={handleLinkClick}>
                    Inscription
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={handleLinkClick}>
                    Connexion
                  </Link>
                </li>
              </>
            )}

            {isLoggedIn && (
              <>
                <li>
                  <Link to="/profile" onClick={handleLinkClick}>
                    Profil
                  </Link>
                </li>
                <li>
                  <Link to="/my-products" onClick={handleLinkClick}>
                    Mes objets à vendre
                  </Link>
                </li>
                <li>
                  <a href="#" onClick={handleLogout}>
                    Déconnexion
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
