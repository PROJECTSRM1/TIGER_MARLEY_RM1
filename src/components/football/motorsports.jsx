import React, { useState } from "react";
import "./motorsports.css";

import halfsleeves from "../../assets/motorsportsimages/halfsleeves.jpg";
import oversized from "../../assets/motorsportsimages/oversized.jpg";
import hoodies from "../../assets/motorsportsimages/hoodies.jpg";

import motorsport1 from "../../assets/motorsportsimages/motorsport1.jpg";
import motorsport2 from "../../assets/motorsportsimages/motorsport2.jpg";
import motorsport3 from "../../assets/motorsportsimages/motorsport3.jpg";
import motorsport4 from "../../assets/motorsportsimages/motorsport4.jpg";
import motorsport5 from "../../assets/motorsportsimages/motorsport5.jpg";
import motorsport6 from "../../assets/motorsportsimages/motorsport6.jpg";
import motorsport7 from "../../assets/motorsportsimages/motorsport7.jpg";
import motorsport8 from "../../assets/motorsportsimages/motorsport8.jpg";
import motorsport9 from "../../assets/motorsportsimages/motorsport9.jpg";
import motorsport10 from "../../assets/motorsportsimages/motorsport10.jpg";
import motorsport11 from "../../assets/motorsportsimages/motorsport11.jpg";
import motorsport12 from "../../assets/motorsportsimages/motorsport12.jpg";
import motorsport13 from "../../assets/motorsportsimages/motorsport13.jpg";
import motorsport14 from "../../assets/motorsportsimages/motorsport14.jpg";

const Motorsports = () => {
  const categories = [
    { id: 1, name: "Half Sleeve", image: halfsleeves },
    { id: 2, name: "Oversized", image: oversized },
    { id: 3, name: "Hoodie", image: hoodies },
  ];

  const allProducts = [
    { id: 1, name: "Best Seller", image: motorsport1, oldPrice: 1800, newPrice: 899 },
    { id: 2, name: "McLaren Team Hoodie", image: motorsport2, oldPrice: 1800, newPrice: 899 },
    { id: 3, name: "Ferrari Motorsport Tee", image: motorsport3, oldPrice: 2200, newPrice: 999 },
    { id: 4, name: "RedBull Racing Hoodie", image: motorsport4, oldPrice: 2500, newPrice: 1099 },
    { id: 5, name: "Porsche Oversized Tee", image: motorsport5, oldPrice: 1500, newPrice: 899 },
    { id: 6, name: "Lamborghini Hoodie", image: motorsport6, oldPrice: 2300, newPrice: 999 },
    { id: 7, name: "F1 Limited Edition Tee", image: motorsport7, oldPrice: 2000, newPrice: 899 },
    { id: 8, name: "BMW Motorsport Hoodie", image: motorsport8, oldPrice: 2100, newPrice: 999 },
    { id: 9, name: "Mercedes Racing Tee", image: motorsport9, oldPrice: 2200, newPrice: 1099 },
    { id: 10, name: "Aston Martin Oversized Tee", image: motorsport10, oldPrice: 2400, newPrice: 999 },
    { id: 11, name: "Nissan GTR Hoodie", image: motorsport11, oldPrice: 2000, newPrice: 899 },
    { id: 12, name: "Toyota Gazoo Tee", image: motorsport12, oldPrice: 1700, newPrice: 799 },
    { id: 13, name: "Audi Motorsport Hoodie", image: motorsport13, oldPrice: 2000, newPrice: 999 },
    { id: 13, name: "Audi Motorsport Hoodie", image: motorsport14, oldPrice: 2000, newPrice: 999 },
  ];

  const [sortOption, setSortOption] = useState("Featured");
  const [products, setProducts] = useState(allProducts);

  const handleSortChange = (option) => {
    setSortOption(option);
    let sorted = [...allProducts];

    if (option === "Price, low to high") {
      sorted.sort((a, b) => a.newPrice - b.newPrice);
    } else if (option === "Price, high to low") {
      sorted.sort((a, b) => b.newPrice - a.newPrice);
    } else if (option === "Alphabetically, A-Z") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "Alphabetically, Z-A") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    }

    setProducts(sorted);
  };

  return (
    <div className="motorsports-page">
      <div className="category-section">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <img src={cat.image} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>

      <div className="filter-section">
        <label>Filter: </label>
        <select value={sortOption} onChange={(e) => handleSortChange(e.target.value)}>
          <option>Featured</option>
          <option>Best selling</option>
          <option>Alphabetically, A-Z</option>
          <option>Alphabetically, Z-A</option>
          <option>Price, low to high</option>
          <option>Price, high to low</option>
          <option>Date, old to new</option>
        </select>
      </div>

      <div className="product-grid">
        {products.map((prod) => (
          <div key={prod.id} className="product-card">
            <img src={prod.image} alt={prod.name} />
            <h4>{prod.name}</h4>
            <p>
              <span className="old-price">₹{prod.oldPrice}</span>
              <span className="new-price">₹{prod.newPrice}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Motorsports;
