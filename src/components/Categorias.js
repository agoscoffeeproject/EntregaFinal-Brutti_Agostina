import { Link } from "react-router-dom";
const Categorias = () => {
    return ( 
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-link text-reset">

                        <Link className="nav-link text-reset" to={"/category/1"}>Cafe en grano</Link>

                </li>
                <li className="nav-link text-reset">

                        <Link className="nav-link text-reset" to={"/category/2"}>Tazas</Link>

                </li>
                <li className="nav-link text-reset">

                        <Link className="nav-link text-reset" to={"/category/3"}>Cafeteras</Link>

                </li>
                <li className="nav-link text-reset">

                        <Link className="nav-link text-reset" to={"/category/4"}>Accesorios</Link>

                </li>
            </ul>

    );
}

export default Categorias;