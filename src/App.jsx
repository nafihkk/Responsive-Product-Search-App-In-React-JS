import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchPage from './Components/SearchPage';
import ProductDetailPage from './Components/ProductDetailPage';
import FavoritesPage from './Components/FavoritesPage';
import './App.css';


const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddFavorite = (product) => {
    if (!favorites.some(fav => fav.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  const handleRemoveFavorite = (id) => {
    setFavorites(favorites.filter(product => product.id !== id));
  };

  return (
    <Router>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/favorites" className="nav-link">Favorites</Link>
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="navbar-search-input"
          />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<SearchPage searchTerm={searchTerm} />} />
        <Route path="/product/:id" element={<ProductDetailPage handleAddFavorite={handleAddFavorite} />} />
        <Route path="/favorites" element={<FavoritesPage favorites={favorites} handleRemoveFavorite={handleRemoveFavorite} />} />
      </Routes>
    </Router>
  );
};

export default App;
