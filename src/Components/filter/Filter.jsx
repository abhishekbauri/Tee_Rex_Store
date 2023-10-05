import "./Filter.css";
const Filter = () => {
    const color = ['Red', 'Blue', 'Green'];
    const gender = ['Men', 'Women'];
    const type = ['Polo', 'Hoddie', 'Basic'];
    const  price = ['0-250', '251-450', '450'];
   
  return (
    <section>
      <div className="property-name">
        <h3>Colour</h3>
        {color.map((item) => (
          <div key={item} className="property-field">
            <input type="checkbox" value={item} />
            <label>{item}</label>
            <br/>
          </div>
        ))}
      </div>

      <div className="property-name">
        <h3>Gender</h3>
        {gender.map((item) => (
          <div key={item} className="property-field" >
            <input type="checkbox" value={item} />
            <label>{item}</label>
            <br/>
          </div>
        ))}
      </div>

      <div className="property-name">
        <h3>Price</h3>
        {price.map((item) => (
          <div key={item} className="property-field">
            <input type="checkbox" value={item} />
            <label>{item}</label>
            <br/>
          </div>
        ))}
      </div>

      <div className="property-name">
        <h3>Type</h3>
        {type.map((item) => (
          <div key={item} className="property-field">
            <input type="checkbox" value={item} />
            <label>{item}</label>
            <br/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Filter;
