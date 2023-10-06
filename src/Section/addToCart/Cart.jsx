import { useSelector } from "react-redux";

import "./Cart.css";
import CartItem from "../../Components/cartItem/CartItem";

const Cart = () => {
  const totalAmount = useSelector((state) => state.cart.totalItemsPrice);
  const cartItems = useSelector( state => state.cart.items);
  // console.log("ct->",cartItems)
  return (
    <section className="cart-section">
      <div className="cart-header">
        <h2>Shooping Cart</h2>
      </div>
      {/* list div */}
      <div className="cart-list">
        {cartItems.map( itemsData => (
          <CartItem key={itemsData.id} {...itemsData}/>
        ))}

        {/* for total amount div */}
        {totalAmount ? (
          <div className="total-amount">
            <h3>Total Amount</h3>
            <h3> Rs {totalAmount}</h3>
          </div>
        ): (<h3 className="empty-cart">No Items in cart!</h3>)}
      </div>
    </section>
  );
};

export default Cart;
