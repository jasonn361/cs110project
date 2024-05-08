import SecondaryMenuBar from '../SecondaryMenuBar/SecondaryNavBar.js'
import './MenuBar.css'

function MenuBar() {
  return (
    <div id="main-nav-container">
      <header id="navbar-container" role="navigation">
        <div className="nav-section left">
          <h1 id="logo-text">BEAM</h1>
          <span id="logo"></span>
        </div>
        <div className="nav-section center">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link selected">
                <h2 className="nav-text">Store</h2>
                <span className="nav-icon">
                  <i className="fa-solid fa-store fa-2xl"></i>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <h2 className="nav-text">Community</h2>
                <span className="nav-icon">
                  <i className="fa-solid fa-tag fa-2xl"></i>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <h2 className="nav-text">Steve</h2>
                <span className="nav-icon">
                  <i className="fa-solid fa-user fa-2xl"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-section right">
          <ul className="nav-list">
            <li className="nav-item">
              <span className="shopping-list">
                <span className="shopping-cart-icon">
                  <i className="fa-solid fa-cart-shopping fa-sm"></i>
                </span>
                <span className="number-shopping-cart"></span>
              </span>
            </li>
            <li className="nav-item">            
              <span className="friends-list">
                <span className="friend-icon">
                  <i className="fa-solid fa-user-group fa-sm"></i>
                </span>
                <span className="number-online"></span>
              </span>
            </li>
            <li className="nav-item">
              <span className="profile">
                <img src="images/diddy_long_hair.jpg" alt="P Diddy with long hair" className="profile-pic" />
                <span className="profile-status"></span>
              </span>
            </li>
          </ul>
        </div>
      </header>
      <SecondaryMenuBar />
    </div>
  );
}

export default MenuBar;
