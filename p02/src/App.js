import React, { useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);

  const EventAumentar = () => {
    setContador(contador + 1);
  };

  const EventDisminuir = () => {
    setContador(contador - 1);
  };

  return (
    <div className="App">
      <h2>
        <label>Contador: {contador}</label>
      </h2>
      <p />
      <button className="counter" onClick={EventAumentar}>
        Aumentar
      </button>
      <button className="counter" onClick={EventDisminuir}>
        Disminuir
      </button>
    </div>
  );
}

export default App;
