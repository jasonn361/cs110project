import './StoreFeaturedContent.css';
import StoreContentHeader from './StoreContentHeader.js';

function StoreFeaturedContent() {
  return (
    <div className="featured-content-container">
      <StoreContentHeader />
      <a href="#" className="featured-content-body-link .selected">
        <div className="featured-content-body">
          <span className="featured-content-banner-container">
            <span className="featured-content-banner"></span>
          </span>
          <span className="featured-content-info">
            <h4 className="featured-gametitle">Ghost of Tsushima DIRECTOR'S CUT</h4>
            <div className="featured-tag-container">
              <h4 className="featured-tag">Base Game</h4>
              <h4 className="featured-tag">DLC</h4>
            </div>
            <div className="featured-price-container">
              <h4 className="featured-price crossed-out">$69.99</h4>
              <h4 className="featured-price discount">-100%</h4>
              <h4 className="featured-price discounted">$0.00</h4>
            </div>
            <div className="image-gallery">
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/ss_7052f137eb29f3af0a68ae5d743a5cad919d3d17.600x338.jpg?t=1714170012" alt="" className="featured-image" />
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/ss_d9009a1af83285b81d55ffcd9cf96aa0a7955100.600x338.jpg?t=1714170012" alt="" className="featured-image" />
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/ss_7f270dd4a6756a6bac8896b58b36de292a5d76ff.600x338.jpg?t=1714170012" alt="" className="featured-image" />
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/ss_452340faf8fe76e3636cd7c7c08342a04523f2f0.600x338.jpg?t=1714170012" alt="" className="featured-image" />
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/ss_e34670eecfd39ee078b1898f0795c68615d29b2a.600x338.jpg?t=1714170012" alt="" className="featured-image" />
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/ss_1fd27439de184bdbd5ad74d7a1a4346f9350cc3b.600x338.jpg?t=1714170012" alt="" className="featured-image" />
            </div>
          </span>
        </div>
      </a>
    </div>
  );
}

export default StoreFeaturedContent;
