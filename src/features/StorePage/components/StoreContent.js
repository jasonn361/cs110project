import StoreContentHeader from "./StoreContentHeader";

function StoreContent() {
  return (
    <div class="content-container">
      <StoreContentHeader />
      <a href="#" class="content-body-link">
        <div class="content-body">
          <div class="content-banner-container">
            <span class="content-banner"></span>
          </div>
          <div class="content-info">
            <h4 class="gametitle">HELLDIVERS 2</h4>
            <span class="tag-container">
              <h4 class="tag">Base Game</h4>
            </span>
            <h4 class="price">$39.99</h4>
          </div>
        </div>
      </a>       
    </div>
  );
}

export default StoreContent;
