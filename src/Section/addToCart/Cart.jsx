import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

import './Cart.css'

const Cart = () => {
  return (
    <section className="cart-section">
      <div className="cart-header">
        <h2>Shooping Cart</h2>
      </div>
      {/* list div */}
      <div className="cart-list">
        <div className="cart-items">
          <div className="items-image">
            <img
              src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png"
              alt="photo1"
            />
          </div>
          <div className="items-description">
            <h3>Black polo</h3>
            <p>Rs 250</p>
          </div>
          <div className="items-qunatity">
            <button>
              <AiOutlineMinus color="white" />
            </button>
            <h3>1</h3>
            <button>
              <AiOutlinePlus color="white" />
            </button>
          </div>
          <div className="delete-items">
            <button>Delete</button>
          </div>
        </div>

        {/* for total amount div */}
        <div className="total-amount">
          <h3>Total Amount</h3>
          <h3> Rs 2203</h3>
        </div>
      </div>
    </section>
  );
}

export default Cart;
