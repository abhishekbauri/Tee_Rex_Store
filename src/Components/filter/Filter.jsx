import { useDispatch, useSelector } from "react-redux";
import { searchFilterAction } from "../../app/searchFilterSlice";

import "./Filter.css";

const Filter = () => {
    const dispatch = useDispatch();

    const selectedColor = useSelector(state => state.searchFilter.selectedColor);
    const selectedGender = useSelector(state => state.searchFilter.selectedGender);
    const selectedType = useSelector(state => state.searchFilter.selectedType);
    const selectedPrice = useSelector(state => state.searchFilter.selectedPrice);
  
    const color = ['Red', 'Blue', 'Green'];
    const gender = ['Men', 'Women'];
    const type = ['Polo', 'Hoodie', 'Basic'];
    const  price = ['0-250', '251-450', '450'];

    const handleColorChange = (color) => {
      dispatch(searchFilterAction.filterByColor(color));
    }

    const handleGenderChange = (gender) => {
      dispatch(searchFilterAction.filterByGender(gender));
    }

    const handleTypeChange = (type) => {
      dispatch(searchFilterAction.filterByType(type));
    }

    const handlePriceChange = (price) => {
      dispatch(searchFilterAction.filterByPrice(price));
    }
   
  return (
    <section>
      <div className="property-name">
        <h3>Colour</h3>
        {color.map((item) => (
          <div key={item} className="property-field">
            <input
              type="checkbox"
              value={item}
              checked= {selectedColor.includes(item)}
              onChange={() => handleColorChange(item)}
            />
            <label>{item}</label>
            <br/>
          </div>
        ))}
      </div>

      <div className="property-name">
        <h3>Gender</h3>
        {gender.map((item) => (
          <div key={item} className="property-field">
            <input 
              type="checkbox" 
              value={item} 
              checked= {selectedGender.includes(item)}
              onChange={() => handleGenderChange(item)}
            />
            <label>{item}</label>
            <br/>
          </div>
        ))}
      </div>

      <div className="property-name">
        <h3>Price</h3>
        {price.map((item) => (
          <div key={item} className="property-field">
            <input
              type="checkbox" 
              value={item} 
              checked= {selectedPrice.includes(item)}
              onChange={() => handlePriceChange(item)}
            />
            <label>{item}</label>
            <br/>
          </div>
        ))}
      </div>

      <div className="property-name">
        <h3>Type</h3>
        {type.map((item) => (
          <div key={item} className="property-field">
            <input 
              type="checkbox" 
              value={item} 
              checked= {selectedType.includes(item)}
              onChange={() => handleTypeChange(item)}
            />
            <label>{item}</label>
            <br/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Filter;
