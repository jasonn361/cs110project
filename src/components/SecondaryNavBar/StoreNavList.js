function StoreNavList() {
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <a href="#" className="nav-link selected">
          <h3 className="nav-text">Home</h3>
          <span className="nav-icon"></span>
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          <h3 className="nav-text">Browse</h3>
          <span className="nav-icon"></span>
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          <h3 className="nav-text">Categories</h3>
          <span className="nav-icon"></span>
        </a>
      </li>
    </ul>
  );
}

export default StoreNavList;
