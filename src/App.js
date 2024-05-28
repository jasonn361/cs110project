import { StoreHome } from '@/features/StorePage';
import MenuBar from './components/NavBar/NavBar.js';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <MenuBar />
      <StoreHome />
    </div>
  );
}

export default App;
