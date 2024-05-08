import SearchBar from './SearchBar.js';
import StoreNavList from './StoreNavList.js';
import './SecondaryMenuBar.css';

function SecondaryMenuBar() {
  return (
    <header className="secondary-navbar-container" role="navigation">
      <SearchBar /> 
      <div clasName='secondary-navbar-content'>
        <StoreNavList />
      </div>
    </header>
  );
}

export default SecondaryMenuBar;
