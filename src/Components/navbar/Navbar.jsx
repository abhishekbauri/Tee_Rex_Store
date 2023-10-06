import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './Navbar.css'

const Navbar = () => {
  const itemCount = useSelector(state => state.cart.totalQuantity)

  const navLinkStyles = ({ isActive }) => {
    return {
      color: 'black',
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <nav>
      <div className="logo">
        <h2>TeeRex Store</h2>
      </div>
      <div className="menu-list">
        <NavLink to="/" style={navLinkStyles}>
          <p>Products</p>
        </NavLink>
        <NavLink to="/cart" style={navLinkStyles}>
          <div className="shopping-cart-icon">
            <FaShoppingCart />
            {itemCount > 0 && <div className="badge">{itemCount}</div>}
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar