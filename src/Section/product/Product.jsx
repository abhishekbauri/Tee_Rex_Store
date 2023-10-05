import { useEffect, useState } from 'react'
import Card from '../../Components/card/Card'
import Filter from '../../Components/filter/filter'
import SearchInput from '../../Components/serachInput/SearchInput'

import './Product.css'

const Product = () => {
    const [cardData, setCardData] = useState([]);

    const findData = async () => {
        const url = `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`;
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            setCardData(data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect( ()=> {
        
        findData();
    },[])

  return (
    <section className='product-section'>
        <div className='search-section'>
            <SearchInput />
        </div>
        <div className='main-section'>
            <div className='filter-section'>
                <Filter />
            </div>
            <div className='items-section'>
                {cardData.map( item => (
                    <Card {...item} key={item.id}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Product