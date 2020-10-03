import React, { Fragment, useState } from "react";
import Letras from "./components/Letras";
import Logo from "./logo.png";

function App() {
  const [cancion, setCancion] = useState("Seleccione una Cancion!");
  const [letraVisible, setLetraVisible] = useState(false);

  const Vean = () => {
    setCancion(
      "El zamarreo me produce una sana fricción El codazo fue certero, esta vez dolio    ¡Hey forasteros! ¿Tienen algo para dar?    No tenés idea man, a quien acabás de chocar   No para la locura, alguien lo va entender, el velo cae    Vean, vean lo que pocos pueden ver    Vean, vean, ese muro puede caer    Vean, vean, este loco puede hablar    Vean, vean, ese paralítico saltar    ¿Quién fue? ¿Quién vio? ¿Quién ha hecho esto?    Dicen fueron esos dos, pero falta el resto    A este tipo le conviene que no te levantes    Este zamarreo me está gustando más que antes    No para la locura, alguien lo va entender, la urgencia no me apura   Vean, vean lo que pocos pueden ver Vean, vean, ese muro puede caer    Vean, vean, este loco puede hablar    Vean, vean, ese paralitico saltar    No tengo plata, ni oro, pero lo que tengo te doy    No tengo plata, ni oro, pero lo que tengo te doy    Vean lo que pocos pueden ver    Vean, vean, ese muro puede caer   Vean, vean, este loco puede hablar  Vean, vean, ese paralítico saltar    Ese paralítico saltar"
    );
    setLetraVisible(true);
  };
  const MalaMemoria = () => {
    setCancion(
      "Mala memoria para recordar tu historia Mala memoria para recordarte Hey!, hey! Venís a mí con ganas de contarme En donde fue, con quien y como sucedió De recordar el mínimo detalle Y castigar de nuevo a quien ya lo pagó. No sé, de que me falás? No sé, a quien te referís? La culpa duerme en el fondo del mar!, mar!, mar! Mala memoria para recordar tu historia Mala memoria para recordarte Mala memoria para recordar tu historia Mala memoria para recordarte Hey!. Hey! No! No! Lo del perdón te suena loca historia No aceptarás porque poco placer te da No da lugar al que besó la escoria No da sabor al guiso que vos cocinás No sé, de que me falás, man? No sé, a quien te referís? La culpa duerme en el fondo del mar!, mar!, mar! Mala memoria para recordar tu historia Mala memoria para recordarte Mala memoria para recordar tu historia Mala memoria para recordarte Hey!, hey! Tengo muy mala, tengo muy mala Mala memoria para recordarte Tengo muy mala, tengo muy mala Mala memoria para recordarte Mala memoria para recordar tu historia Mala memoria para recordarte Mala memoria para recordar tu historia Mala memoria para recordarte Hey!, hey!, hey!"
    );
    setLetraVisible(true);
  };

  const BuscandoLio = () => {
    setCancion(
      "¿Qué estás buscando, hijo? Si estas buscando lío Estás buscándome a mí Si estas buscando lío Estás buscándome a mí ¡Locos! Tantos, que no tienen miedo? Ojos, labios, juegan con el fuego Tienen nada, pero entregan todo Buscan, nadan ríos en el lodo Si estás buscando lío Estás buscándome a mí Buscando lío Estás buscándome Si estás buscando lío Estás buscándome a mí Buscando lío Estás buscándome, ¡ah! Ellas, (ella) tocan donde más te duele Ellos, dicen (dicen) lo que no conviene Como niños para ver lo eterno Vieron sombras (sombras) que curan enfermos Si estás buscando lío Estas buscándome a mí Buscando lío Estás buscándome Si estás buscando lío Estas buscándome a mí Buscando lío Estás buscándome, ¡Ah! Buscando como siempre el equilibrio de mi premio Sin encontrarme tan ebrio, ¡soberbios! Se manejan de mala manera Ahí me planto con mi furia y mis críos, armando lío Navego en una América, en una atmósfera que me asfixia Revolución de ángeles reclaman justicia Lastima lo que ves, porquerías que no dan enseñanza y esto avanza, sin esperanza ¡Se alza el bandolero al ataque! ¡Al rescate! Si estás buscando lío Estás buscándome ¿De qué sirve el precio en la mano del necio para comprar sabiduría? Si estás buscando lío Estás buscándome ¿Quién diría? Mansos como corderos Y astutos como serpientes, ¡valientes! Buscando lío Se apagará la lámpara de los impíos Buscando lío ¡Se apagará la lámpara! Si estás buscando lío Estás buscándome a mí Buscando lío Estás buscándome Si estás buscando lío Estás buscándome a mí Buscando lío Estás buscándome, ¡Ah! Buscando lío, buscándome Buscando lío, buscándome Buscando lío, buscándome Buscando lío, buscándome Si, ¡Rescate!"
    );
    setLetraVisible(true);
  };

  const QuitaManchas = () => {
    setCancion(
      "Quitamancha Quitamancha El día que te aplasta, la noche que te gasta Volumen que te eleva, manada que te lleva La mente que decide, el cuerpo que te pide Futuro que te acuesta y que hagan las apuestas ¿Cómo poder ablandar una vida tan dura? ¿Cómo poderme frenar en un mundo que apura? ¿Cómo quitarme la mancha que me hace morir? Quitamancha Quitamancha ¿Cómo sigo parado, si miro a cada lado? Si miro para arriba encuentro la salida Libera de la pena y quita la condena La palabra que siento no se la lleva el viento Si me pudiste ablandar una vida tan dura Si me pudiste frenar en un mundo que apura Si me quitaste la mancha y me haces vivir Quitamancha Quitamancha Hey Hey Hey Hey Hey Hey Hey Hey Hey, hey, hey, hey Hey, hey, hey, hey Hey, hey, hey, hey Hey, hey, hey, hey Hey, hey, Quitamancha Quitamancha Quitamancha Quitamancha"
    );
    setLetraVisible(true);
  };

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
      ) : (
        <div class="Lista">
          <div class="TituloListaCanciones">Lista de Canciones</div>

          <div className="ListaMusica">
            <div className="separador"></div>
            <div>
              <button
                type="button"
                class="btn btn-warning"
                onClick={() => Vean()}
                style={{ color: "white" }}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-music-note-beamed"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                  <path
                    fill-rule="evenodd"
                    d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"
                  />
                  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                </svg>{" "}
                Vean
              </button>
            </div>
            <div className="separador"></div>
            <div>
              <button
                type="button"
                class="btn btn-warning"
                onClick={() => MalaMemoria()}
                style={{ color: "white" }}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-music-note-beamed"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                  <path
                    fill-rule="evenodd"
                    d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"
                  />
                  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                </svg>{" "}
                Mala memoria
              </button>
            </div>
            <div className="separador"></div>
            <div>
              <button
                type="button"
                class="btn btn-warning"
                onClick={() => BuscandoLio()}
                style={{ color: "white" }}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-music-note-beamed"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                  <path
                    fill-rule="evenodd"
                    d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"
                  />
                  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                </svg>{" "}
                Buscando Lio
              </button>
            </div>
            <div className="separador"></div>
            <div>
              <button
                type="button"
                class="btn btn-warning"
                onClick={() => QuitaManchas()}
                style={{ color: "white" }}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-music-note-beamed"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                  <path
                    fill-rule="evenodd"
                    d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"
                  />
                  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                </svg>{" "}
                Quita Manchas
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default App;
