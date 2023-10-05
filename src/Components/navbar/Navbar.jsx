import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

import './Navbar.css'
const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: 'black',
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <nav>
      <div className='logo'>
          <h2>TeeRex Store</h2>
      </div>
      <div className='menu-list'>
        <NavLink to= '/' style={navLinkStyles}><p>Products</p></NavLink>
        <NavLink to = '/cart' style={navLinkStyles}>  <FaShoppingCart/> </NavLink>
      </div>
    </nav>
  )
}

export default Navbar