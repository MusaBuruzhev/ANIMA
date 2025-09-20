import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Catalog from './pages/Catalog';
import DetailedCard from './pages/DetailedCard';
import './style/style.css'



function App() {
  return (
    <Router> {/* Это корневая обёртка для всего, что связано с роутингом */}
      <div className="App">
        <Routes> {/* Это контейнер для всех отдельных правил (Route) */}
          {/* Правило: для корневого пути '/' показывай компонент HomePage */}
          <Route path="/" element={<HomePage />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/DetailedCard" element={<DetailedCard />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
