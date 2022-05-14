import { Routes, Route } from 'react-router-dom';
import s from './App.module.scss';
import Home from './pages/Home';
import About from './pages/About';
import Toolbar from './components/Toolbar';
import CounterPage from './pages/CounterPage';

function App() {

  return (
    <>
      <Toolbar />

      <div className={s.container}>
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='counter' element={<CounterPage />} />
        
      </Routes>
      </div>
    </>
  );
}

export default App;
