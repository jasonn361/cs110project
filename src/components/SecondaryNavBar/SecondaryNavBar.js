import SearchBar from './SearchBar.js';
import StoreNavList from './StoreNavList.js';
import './SecondaryNavBar.css';

function SecondaryMenuBar() {
  return (
    <header className="secondary-navbar-container" role="navigation">
      <SearchBar /> 
      <div className='secondary-navbar-content'>
        <StoreNavList />
      </div>
    </header>
  );
}

export default SecondaryMenuBar;
