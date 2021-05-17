import { useState, useEffect } from "react";
import Header from "./components/Header";
import CardBoard from "./components/CardBoard";
import Button from "./components/Button";

import { useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <CardBoard />
      <Button />
    </div>
  );
}

export default App;
