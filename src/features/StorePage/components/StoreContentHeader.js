import './StoreContentHeader.css';

function StoreContentHeader() {
  return (
    <div className="content-header">
      <span className="content-header-section-left">
        <a href="#" className="content-header-link">
          <h4 className="content-header-text">Featured</h4>
          <span className="content-header-icon">
            <i className="fa-solid fa-chevron-right fa-sm"></i>
          </span>
        </a>
      </span>
      <span className="content-header-section-right">
        <span className="content-header-icon next">
          <i className="fa-solid fa-circle-arrow-left fa-2x"></i>
        </span>
        <span className="content-header-icon next">
          <i className="fa-solid fa-circle-arrow-right fa-2x"></i>
        </span>
      </span>
    </div>
  );
}
