import react from 'react';
import '../App.css'; 
import CartWidget from './CardWidget';

export const NavBar = () => {
    return (
        <div>
            <nav className='nav'>
                <div>
                    <a className='Nav-logo'>COFFEE LOVERS</a>
                </div>
                <div>
                <ul className='nav-list'>
                    <li>
                        <a className='nav-link'>Tienda</a>
                    </li>
                    <li>
                        <a className='nav-link'>Lugares Recomendados</a>
                    </li>
                    <li>
                        <a className='nav-link'>Contacto</a>
                    </li>
                    <li>
                        <a className='nav-link' href='#'>
                            <CartWidget/>0
                        </a>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
