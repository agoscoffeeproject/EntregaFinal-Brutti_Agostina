import {useState} from 'react';

const ItemCount = ({inicial, stock, onAdd}) => {
    
    const [contador, setContador] = useState(inicial);
    
    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)
    
    const agregarAlCarrito = () => onAdd(contador)

    return (
        <div>
            <button onClick={restar} className="btn btn-dark">-</button>
                    {contador}
            <button onClick={sumar} className="btn btn-dark">+</button>
            <button className="btn btn-primary"onClick={agregarAlCarrito}><i className="bi bi-cart4"></i></button>
        </div>
    );
}

export default ItemCount;