import React from "react";
import Card from "./userCard";
import "./userCard.css";

const Favorites = ({ favorites, onRemoveFavorite }) => {
  return (
    <div>
      <h2>Favorite Users</h2>
      <div className="card-list">
        {favorites.length === 0 ? (
          <p>No favorites yet</p>
        ) : (
          favorites.map((user) => (
            <Card
              key={user.id}
              name={user.name}
              avatar={user.avatar}
              isFavorite={true}
              onFavoriteToggle={() => onRemoveFavorite(user.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
