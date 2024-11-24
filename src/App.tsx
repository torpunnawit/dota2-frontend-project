import './App.css'

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HeroDetailPage from './pages/HeroDetailPage';
import HeroesPage from './pages/HeroesPage';
import ItemsPage from './pages/ItemsPage';
import ItemDetailPage from './pages/ItemDetailPage';
import TeamPage from './pages/TeamPage';
import FavoritePage from './pages/FavoritePage';



function App() {


  return (
    <Router basename={import.meta.env.DEV ? '/' : '/react-vite-gh-pages/'}>
      <Routes >
        <Route path="/" element={<Navigate to="/hero" replace />} />
        <Route path="/hero" element={<HeroesPage />} />
        <Route path="/hero/stat/:heroName" element={<HeroDetailPage />} />
        <Route path="/item" element={<ItemsPage />} />
        <Route path="/teams" element={<TeamPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/item/detail/:itemName" element={<ItemDetailPage />} />


      </Routes>
    </Router>
  );
}

export default App
