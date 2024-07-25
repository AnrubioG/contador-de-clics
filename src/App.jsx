import "./App.css";
import Button from "./components/Button";
import fccLogo from "/img/freecodecamp-logo.png";

function App() {
  const manejarClic = () => {
    console.log("Clic");
  };

  const reiniciarContador = () => {
    console.log("Reiniciar");
  };

  return (
    <div className="App">
      <div className="fcc-logo-contenedor">
        <img className="fcc-logo" src={fccLogo} alt="logo de freecodecamp" />
      </div>

      <div className="contenedor-principal">
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
