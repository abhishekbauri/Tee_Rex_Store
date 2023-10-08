import { useEffect } from 'react'
import Card from '../../Components/card/Card'
import Filter from '../../Components/filter/Filter'
import SearchInput from '../../Components/serachInput/SearchInput'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../app/searchFilterSlice'

import './Product.css'

const Product = () => {
    
    const dispatch = useDispatch();

    const isFilter = useSelector(state => state.filterToggle.showFilter);
    const data = useSelector(state => state.searchFilter.data);

    const selectedColor = useSelector(state => state.searchFilter.selectedColor);
    const selectedGender = useSelector(state => state.searchFilter.selectedGender);
    const selectedType = useSelector(state => state.searchFilter.selectedType);
    const selectedPrice = useSelector(state => state.searchFilter.selectedPrice);
    
    const filteredData = [...selectedColor, ...selectedGender, ...selectedType];

    useEffect( ()=> {
        dispatch(fetchData());
    },[dispatch])

    function filterByPrice(product, selectedPrice){
        if(selectedPrice.length === 0) return true;
        const price = product.price;
        return selectedPrice.some((range) => {
          const [min, max=10000] = range.split("-").map(Number);
          return price >= min && price <= max;
        });
    }

    const cardData =
      data &&
      data.filter((product) => {
        return (
          (selectedColor.length === 0 ||
            filteredData.includes(product.color)) &&
          (selectedType.length === 0 || filteredData.includes(product.type)) &&
          (selectedGender.length === 0 ||
            filteredData.includes(product.gender)) &&
          filterByPrice(product, selectedPrice)
        );
      });

  return (
    <section className='product-section'>
        <div className='search-section'>
            <SearchInput />
        </div>
        <div className='main-section'>
            <div className={`filter-section ${isFilter ? 'show-filter': ''}`}>
                <Filter />
            </div>
            <div className='items-section'>
                {cardData && cardData.map( item => (
                    <Card {...item} key={item.id}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Product