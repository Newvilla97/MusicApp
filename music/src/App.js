import React, { Fragment, useState } from "react";
import Letras from "./components/Letras";
import Lista from "./components/ListaMusica";
import Logo from "./logo.png";

function App() {
  const [cancion, setCancion] = useState("Seleccione una Cancion!");
  const [letraVisible, setLetraVisible] = useState(false);

  const Volver = () => {
    setLetraVisible(false);
  };

  return (
    <Fragment>
      <header>
        <h1>
          <img src={Logo} width="25px" height="30px" float="left" />
          Bienvenido!
        </h1>
      </header>
      {letraVisible ? (
        <Fragment>
          <div className="botonVolver">
            <button
              type="button"
              class="btn btn-warning"
              onClick={() => Volver()}
              style={{ color: "white" }}
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-arrow-left-square"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                />
              </svg>{" "}
              Volver
            </button>
          </div>

          <div class="Letras">
            <Letras cancion={cancion} />
          </div>
        </Fragment>
      ) : 
        <Lista
        setLetraVisible={setLetraVisible}
        setCancion={setCancion}
        />
        
      }
    </Fragment>
  );
}

export default App;
