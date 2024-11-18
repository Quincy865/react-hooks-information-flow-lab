import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function handleDarkModeToggle() {
    setIsDarkMode((prevMode) => !prevMode);
  }
  const appClass = isDarkMode ? "App dark" : "App light";
  return (
    <div className={appClass}>
      
      <Header onDarkModeClick={handleDarkModeToggle} isDarkMode={isDarkMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}
export default App;

