import React from "react";
import "./App.css";
import users from "./components/data";
import Card from "./components/userCard";
import Favorites from "./components/favorite";
import { FavoriteProvider } from "./components/FavoriteContext";

function App() {
  return (
    <FavoriteProvider>
      <div className="App">
        <h1>Google Meet Style User Cards</h1>
        <div className="card-list">
          {users.map((user) => (
            <Card
              key={user.id}
              id={user.id}
              name={user.name}
              avatar={user.avatar}
            />
          ))}
        </div>
        <Favorites />
      </div>
    </FavoriteProvider>
  );
}

export default App;
