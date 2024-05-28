import StoreContent from '../../components/StoreContent.js'
import StoreFeaturedContent from './StoreFeaturedContent.js';
import './StoreHome.css';

function StoreHome() {
  return (
    <div className="main-content-container">
      <StoreFeaturedContent />
      <StoreContent />
    </div>
  );
}

export default StoreHome;
