import React, { useState } from "react";
import "./App.css";
import users from "./components/data";
import Card from "./components/userCard";
import Favorites from "./components/favorite";

function App() {
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteToggle = (userId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.find((user) => user.id === userId)) {
        return prevFavorites.filter((user) => user.id !== userId);
      } else {
        const newUser = users.find((user) => user.id === userId);
        return [...prevFavorites, newUser];
      }
    });
  };

  const handleRemoveFavorite = (userId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((user) => user.id !== userId)
    );
  };

  return (
    <div className="App">
      <h1>Google Meet Style User Cards</h1>
      <div className="card-list">
        {users.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            avatar={user.avatar}
            isFavorite={favorites.some((fav) => fav.id === user.id)}
            onFavoriteToggle={() => handleFavoriteToggle(user.id)}
          />
        ))}
      </div>
      <Favorites
        favorites={favorites}
        onRemoveFavorite={handleRemoveFavorite}
      />
    </div>
  );
}

export default App;
