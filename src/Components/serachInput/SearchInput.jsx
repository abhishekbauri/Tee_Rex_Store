import { useDispatch } from 'react-redux'
import {AiOutlineSearch, AiOutlineFilter} from 'react-icons/ai'
import { filterToggleAction } from '../../app/filterToggle'

import './SearchInput.css'
const SearchInput = () => {
  const dispatch = useDispatch();
  return (
    <div className='search-items'>
        <div className='input-box'>
          <input type='text' placeholder='Search for products...' />
        </div>
        <button className='search-icon'>
            <AiOutlineSearch />
        </button>
        <button className='filter-icon' onClick={ () => dispatch(filterToggleAction.filterToggle())}>
          <AiOutlineFilter />
        </button>
    </div>
  )
}

export default SearchInput