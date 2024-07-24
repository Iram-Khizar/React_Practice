import React, { useContext } from "react";
import { FavoriteContext } from "./FavoriteContext";
import "./userCard.css";

const Card = ({ name, avatar, id }) => {
  const { favorites, handleFavoriteToggle } = useContext(FavoriteContext);
  const isFavorite = favorites.some((fav) => fav.id === id);

  return (
    <div className="card">
      {avatar ? (
        <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
      ) : (
        <div className="avatar-placeholder">{name.charAt(0)}</div>
      )}
      <div className="card-info">
        <h3>{name}</h3>
        <button
          className={`favorite-icon ${isFavorite ? "favorited" : ""}`}
          onClick={() => handleFavoriteToggle(id)}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>
    </div>
  );
};

export default Card;
