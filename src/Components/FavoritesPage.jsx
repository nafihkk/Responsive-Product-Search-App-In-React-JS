import React from 'react';
import './FavoritesPage.css';

const FavoritesPage = ({ favorites, handleRemoveFavorite }) => {
  return (
    <div>
      <h1>Your Favorite Products</h1>
      {favorites.length === 0 ? (
        <p>No favorite products yet.</p>
      ) : (
        favorites.map((product) => (
          <div key={product.id} className="favorite-item">
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} className="favorite-image" />
            <p>Price: ${product.price}</p>
            <button onClick={() => handleRemoveFavorite(product.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesPage;
