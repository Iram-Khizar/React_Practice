import React, { useContext } from "react";
import { FavoriteContext } from "./FavoriteContext";
import Card from "./userCard";
import "./userCard.css";

const Favorites = () => {
  const { favorites, handleRemoveFavorite } = useContext(FavoriteContext);

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
              id={user.id}
              name={user.name}
              avatar={user.avatar}
              isFavorite={true}
              onFavoriteToggle={() => handleRemoveFavorite(user.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
