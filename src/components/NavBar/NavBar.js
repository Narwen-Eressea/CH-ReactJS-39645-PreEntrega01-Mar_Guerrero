import CartWidget from "../CartWidget/CartWidget";

function NavBar(props) {
    return (
        <nav>
            <h3>Videoclub Fénix - Venta de películas</h3>
            <div>
                <button>Drama</button>
                <button>Comedia</button>
                <button>Suspenso</button>
                <button>Acción</button>
                <button>Infantiles</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;