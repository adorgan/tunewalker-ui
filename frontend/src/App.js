import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/partials/Header';
import Sidebar from './components/partials/Sidebar';

function App() {
  return (

    <div className='App'>
      <Header />
      <div className='sub-header-container'>
        <Sidebar />
        <Outlet />
      </div>
    </div>

  );
}

export default App;
