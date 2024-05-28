import './SearchBar.css';

function SearchBar() {
  return (
    <span className="searchbar-container">
      <input type="search" className="searchbar" placeholder="Search the store" />
      <span className="searchbar-icon">
        <i className="fa-solid fa-magnifying-glass fa-lg"></i>
      </span>
    </span>
  );
}

export default SearchBar;
