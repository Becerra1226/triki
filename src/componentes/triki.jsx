import { useState, useEffect } from "react";
import Tablero from "./tablero";

const jugador_x = "X";
const jugador_O = "O";

const combinaciones = [
  { combo: [0, 1, 2], claseGanador: "ganador-row-1" },
  { combo: [3, 4, 5], claseGanador: "ganador-row-2" },
  { combo: [6, 7, 8], claseGanador: "ganador-row-3" },

  { combo: [0, 3, 6], claseGanador: "ganador-column-1" },
  { combo: [1, 4, 7], claseGanador: "ganador-column-2" },
  { combo: [2, 5, 8], claseGanador: "ganador-column-3" },

  { combo: [0, 4, 8], claseGanador: "ganador-diagonal-1" },
  { combo: [2, 4, 6], claseGanador: "ganador-diagonal-2" },
];

function checkWinner(celdas, asignarGanador) {
  for (const { combo, claseGanador } of combinaciones) {
    const valorCelda1 = celdas[combo[0]];
    const valorCelda2 = celdas[combo[1]];
    const valorCelda3 = celdas[combo[2]];

    if (
      valorCelda1 !== null &&
      valorCelda1 === valorCelda2 &&
      valorCelda1 === valorCelda3
    ) {
      asignarGanador(claseGanador);
      console.log("ganaste");
    }
  }
}

function Triki() {
  const [celdas, asignarCeldas] = useState(Array(9).fill(null));
  const [turno, asignarTurno] = useState(jugador_x);
  const [claseGanador, asignarGanador] = useState();

  useEffect(() => {
    checkWinner(celdas, asignarGanador);
  }, [celdas]);

  const handtileclick = (index) => {
    if (celdas[index] !== null) {
      return;
    }

    const nuevaCeldas = [...celdas];
    nuevaCeldas[index] = turno;
    asignarCeldas(nuevaCeldas);
    if (turno === jugador_x) {
      asignarTurno(jugador_O);
    } else {
      asignarTurno(jugador_x);
    }
  };

  return (
    <div>
      <h1>Triki</h1>
      <Tablero
        turno={turno}
        celdas={celdas}
        onTileClick={handtileclick}
        claseGanador={claseGanador}
      />
    </div>
  );
}

export default Triki;
