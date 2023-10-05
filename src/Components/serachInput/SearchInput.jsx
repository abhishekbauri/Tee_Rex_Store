import {AiOutlineSearch, AiOutlineFilter} from 'react-icons/ai'
import './SearchInput.css'
const SearchInput = () => {
  return (
    <div className='search-items'>
        <div className='input-box'>
          <input type='text' placeholder='Search for products...' />
        </div>
        <button className='search-icon'>
            <AiOutlineSearch />
        </button>
        <button className='filter-icon'>
          <AiOutlineFilter />
        </button>
    </div>
  )
}

export default SearchInput