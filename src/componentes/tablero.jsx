import Celda from "./celdas";
import Ganador from "./ganador";

function Tablero({ celdas, onTileClick, turno, claseGanador }) {
  return (
    <div className="tablero">
      <Celda
        turno={turno}
        onClick={() => onTileClick(0)}
        value={celdas[0]}
        className="right-border bottom-border"
      />
      <Celda
        turno={turno}
        onClick={() => onTileClick(1)}
        value={celdas[1]}
        className="right-border bottom-border"
      />
      <Celda
        turno={turno}
        onClick={() => onTileClick(2)}
        value={celdas[2]}
        className="bottom-border"
      />
      <Celda
        turno={turno}
        onClick={() => onTileClick(3)}
        value={celdas[3]}
        className="right-border bottom-border"
      />
      <Celda
        turno={turno}
        onClick={() => onTileClick(4)}
        value={celdas[4]}
        className="right-border bottom-border"
      />
      <Celda
        turno={turno}
        onClick={() => onTileClick(5)}
        value={celdas[5]}
        className="bottom-border"
      />
      <Celda
        turno={turno}
        onClick={() => onTileClick(6)}
        value={celdas[6]}
        className="right-border "
      />
      <Celda
        turno={turno}
        onClick={() => onTileClick(7)}
        value={celdas[7]}
        className="right-border "
      />
      <Celda turno={turno} onClick={() => onTileClick(8)} value={celdas[8]} />
      <Ganador claseGanador={claseGanador} />
    </div>
  );
}

export default Tablero;
