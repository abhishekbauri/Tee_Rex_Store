import Card from "../../Components/card/Card";
import Filter from "../../Components/filter/filter";
import ErrorPage from "../../Components/errorPage/ErrorPage";
import SearchInput from "../../Components/serachInput/SearchInput";
import { useSelector } from "react-redux";

import "./Product.css";

const SearchedProduct = () => {
  const isFilter = useSelector((state) => state.filterToggle.showFilter);
  const data = useSelector((state) => state.searchFilter.searchedData);
  
  const selectedColor = useSelector(state => state.searchFilter.selectedColor);
  const selectedGender = useSelector(state => state.searchFilter.selectedGender);
  const selectedType = useSelector(state => state.searchFilter.selectedType);
  const selectedPrice = useSelector(state => state.searchFilter.selectedPrice);
  
  const filteredData = [...selectedColor, ...selectedGender, ...selectedType];
  
  
  function filterByPrice(product, selectedPrice) {
    if (selectedPrice.length === 0) return true;
    const price = product.price;
    return selectedPrice.some((range) => {
      const [min, max = 10000] = range.split("-").map(Number);
      return price >= min && price <= max;
    });
  }
  
  const cardData =
    data &&
    data.filter((product) => {
      return (
        (selectedColor.length === 0 || filteredData.includes(product.color)) &&
        (selectedType.length === 0 || filteredData.includes(product.type)) &&
        (selectedGender.length === 0 ||
          filteredData.includes(product.gender)) &&
        filterByPrice(product, selectedPrice)
      );
    });

  const isEmptyCardData = cardData.length === 0 ? true : false;
  
  return (
    <section className="product-section">
      <div className="search-section">
        <SearchInput />
      </div>

      {isEmptyCardData ? (
        <ErrorPage />
      ) : (
        <div className="main-section">
          <div className={`filter-section ${isFilter ? "show-filter" : ""}`}>
            <Filter />
          </div>
          <div className="items-section">
            {cardData &&
              cardData.map((item) => <Card {...item} key={item.id} />)}
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchedProduct;
