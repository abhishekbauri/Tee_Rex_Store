import { useDispatch } from "react-redux";
import { AiOutlineSearch, AiOutlineFilter } from "react-icons/ai";
import { filterToggleAction } from "../../app/filterToggle";
import { useState } from "react";
import { searchFilterAction } from "../../app/searchFilterSlice";
import { useNavigate } from "react-router-dom";

import "./SearchInput.css";

const SearchInput = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    if(inputValue.length === 0){
      alert("Please enter something to search");
    }else{
      dispatch(searchFilterAction.search(inputValue));
      setInputValue("");
      navigate('/searchedProduct');
    }
  };

  return (
    <div className="search-items" >
      <form className="search-input-box" onSubmit={searchHandler}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Search for products..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button className="search-icon" onSubmit={searchHandler}>
          <AiOutlineSearch />
        </button>
      </form>

      <button
        className="filter-icon"
        onClick={() => dispatch(filterToggleAction.filterToggle())}
      >
        <AiOutlineFilter />
      </button>
    </div>
  );
};

export default SearchInput;
