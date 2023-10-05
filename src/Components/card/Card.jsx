/* eslint-disable react/prop-types */

import './Card.css'
const Card = (props) => {
    const {name, imageURL, price} = props;
  return (
    <div className='main-card'>
        <div className='card-image'>
            <div className='card-title'> {name}</div>
            <img src={imageURL} alt={name} />
        </div>
        <div className='card-content'>
            <h2>Rs {price}</h2>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card