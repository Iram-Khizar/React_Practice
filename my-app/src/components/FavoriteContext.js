import React, { createContext, useState, useEffect } from "react";
import users from "./data";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

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
    <FavoriteContext.Provider
      value={{ favorites, handleFavoriteToggle, handleRemoveFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
