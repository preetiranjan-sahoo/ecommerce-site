import React, { useState } from "react";
import { Link } from "react-router-dom";
import productData from "../products.json";
import SelectedCategory from "../components/SelectedCategory";

const title = (
  <h2>
    Search Your One Product from <span>Thousands</span> of Products
  </h2>
);
// const desc = "Mere pass sab type ka collection hai";
const desc = "We have all type of collection for products";
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    // text: "Bahut customer he mera",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    // text: "Bahut merchent bhi hai bro",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    // text: "Kuchh bhi kharid sakta hai",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterProducts, setFilterProducts] = useState(productData);
  //   console.log(productData);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilterProducts(filtered);
  };
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCategory select={"all"} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search your product here"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filterProducts.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
