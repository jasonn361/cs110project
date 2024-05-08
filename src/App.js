import Home from './features/components/StorePage/StoreHome.js';
import MenuBar from './components/MenuBar/MenuBar.js';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <MenuBar />
      <Home />
    </div>
  );
}

export default App;
