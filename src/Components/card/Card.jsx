/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { cartAction } from "../../app/cartSlice";

import "./Card.css";

const Card = (props) => {
  const dispatch = useDispatch();
  const { name, imageURL, price, quantity, gender, color, type, id } = props;

  const addItemHandler = () => {
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
  return (
    <div className="main-card">
      <div className="card-image">
        <div className="card-title"> {name}</div>
        <img src={imageURL} alt={name} />
      </div>
      <div className="card-content">
        <h2>Rs {price}</h2>
        <button onClick={addItemHandler}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
