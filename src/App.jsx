import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import fccLogo from "/img/freecodecamp-logo.png";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="fcc-logo-contenedor">
        <img className="fcc-logo" src={fccLogo} alt="logo de freecodecamp" />
      </div>

      <div className="contenedor-principal">
        <Counter numClics={numClics} />
        <Button texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Button
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
