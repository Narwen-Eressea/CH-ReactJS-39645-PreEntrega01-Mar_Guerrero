import cart from './assets/cart.png'

function CartWidget() {
    return (
        <div>
            <img src={cart} alt="cart-widget" style={{ height: "8vh" }} />
            0
        </div>
    )
}

export default CartWidget