function Celda({className, value, onClick, turno }) {

    let hoverClass = null;
    if(value==null && turno!= null){
        hoverClass = `${turno.toLowerCase()}-hover`
    }
    return ( 
        <div onClick={onClick} className = {`celdas ${className} ${hoverClass}`}>{value}</div>
     );
}

export default Celda;