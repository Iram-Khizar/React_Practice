import React from "react";
import "./userCard.css";

const Card = ({ name, avatar, isFavorite, onFavoriteToggle }) => {
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
          onClick={onFavoriteToggle}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>
    </div>
  );
};

export default Card;
