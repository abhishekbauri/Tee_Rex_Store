/* eslint-disable react/prop-types */
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import "./CartItem.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../../app/cartSlice";

const CartItem = (props) => {
  const {
    imageURL,
    name,
    itemsQuant,
    totalPrice,
    id,
    quantity,
    price,
    gender,
    color,
    type,
  } = props;
  
  const dispatch = useDispatch();

  const increaseCartItemHandler = () => {
    dispatch(
      cartAction.addItemToCart({
        name,
        imageURL,
        price,
        quantity,
        gender,
        color,
        type,
        id,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(cartAction.removeItemFromCart(id));
  };

  const removeAllHandler = () => {
    dispatch(cartAction.removeAllFromCart(id));
  };

  return (
    <div className="cart-items">
      <div className="items-image">
        <img src={imageURL} alt={name} />
      </div>
      <div className="items-description">
        <h3>{name}</h3>
        <p>Rs {totalPrice}</p>
      </div>
      <div className="items-qunatity">
        <button onClick={removeItemHandler}>
          <AiOutlineMinus color="white" />
        </button>
        <h3>{itemsQuant}</h3>
        <button onClick={increaseCartItemHandler}>
          <AiOutlinePlus color="white" />
        </button>
      </div>
      <div className="delete-items">
        <button onClick={removeAllHandler}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
