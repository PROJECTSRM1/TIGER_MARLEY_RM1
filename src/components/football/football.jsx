import React from "react";
import "./football.css";

function Football() {
  const categories = [
    { id: 1, name: "Oversized", image: "/assets/football/oversized.jpg" },
    { id: 2, name: "Hoodie", image: "/assets/football/hoodie.jpg" },
    { id: 3, name: "Half Sleeve", image: "/assets/football/halfsleeves.jpg" },
  ];

   const products = [
  {
    id: 1,
    title: "Cristiano Red Devil Oversized Tee",
    image: "/assets/football/product1.jpg",
    oldPrice: 1299,
    price: 899,
  },
  {
    id: 2,
    title: "Classic Manchester Street Tee",
    image: "/assets/football/product2.jpg",
    oldPrice: 1199,
    price: 799,
  },
  {
    id: 3,
    title: "Ronaldo No.7 Performance Tee",
    image: "/assets/football/product3.jpg",
    oldPrice: 1099,
    price: 749,
  },
  {
    id: 4,
    title: "Shadow Player Graphic Tee",
    image: "/assets/football/product4.jpg",
    oldPrice: 1099,
    price: 699,
  },
  {
    id: 5,
    title: "Goal Hunter Oversized Edition",
    image: "/assets/football/product5.jpg",
    oldPrice: 1299,
    price: 849,
  },
  {
    id: 6,
    title: "PSG Blackout Hoodie",
    image: "/assets/football/product6.jpg",
    oldPrice: 1399,
    price: 999,
  },
  {
    id: 7,
    title: "United Flame Print Tee",
    image: "/assets/football/product7.jpg",
    oldPrice: 1299,
    price: 899,
  },
  {
    id: 8,
    title: "Red Legend Oversized Tee",
    image: "/assets/football/product8.jpg",
    oldPrice: 1199,
    price: 799,
  },
  {
    id: 9,
    title: "R7 Signature Streetwear Tee",
    image: "/assets/football/product9.jpg",
    oldPrice: 1099,
    price: 749,
  },
  {
    id: 10,
    title: "Neon Shadow Graphic Tee",
    image: "/assets/football/product10.jpg",
    oldPrice: 999,
    price: 699,
  },
  {
    id: 11,
    title: "Goal Machine Oversized Tee",
    image: "/assets/football/product11.jpg",
    oldPrice: 1299,
    price: 849,
  },
  {
    id: 12,
    title: "Paris Saint Hoodie Elite Edition",
    image: "/assets/football/product12.jpg",
    oldPrice: 1399,
    price: 999,
  },
  {
    id: 13,
    title: "Cristiano Street Mode Tee",
    image: "/assets/football/product13.jpg",
    oldPrice: 1299,
    price: 899,
  },
  {
    id: 14,
    title: "Red Thunder Oversized Tee",
    image: "/assets/football/product14.jpg",
    oldPrice: 1199,
    price: 799,
  },
  {
    id: 15,
    title: "R7 Energy Training Tee",
    image: "/assets/football/product15.jpg",
    oldPrice: 1099,
    price: 749,
  },
  {
    id: 16,
    title: "Dark Mode Shadow Tee",
    image: "/assets/football/product16.jpg",
    oldPrice: 999,
    price: 699,
  },
  {
    id: 17,
    title: "Goal Seeker Premium Tee",
    image: "/assets/football/product17.jpg",
    oldPrice: 1299,
    price: 849,
  },
  {
    id: 18,
    title: "PSG Champion Hoodie",
    image: "/assets/football/product18.jpg",
    oldPrice: 1399,
    price: 999,
  },
  {
    id: 19,
    title: "CR7 Glory Edition Tee",
    image: "/assets/football/product19.jpg",
    oldPrice: 1299,
    price: 899,
  },
  {
    id: 20,
    title: "ManU Power Red Tee",
    image: "/assets/football/product20.jpg",
    oldPrice: 1199,
    price: 799,
  },
  {
    id: 21,
    title: "Ronaldo Legacy Tee",
    image: "/assets/football/product21.jpg",
    oldPrice: 1099,
    price: 749,
  },
  {
    id: 22,
    title: "Pink Silhouette Oversized Tee",
    image: "/assets/football/product22.jpg",
    oldPrice: 999,
    price: 699,
  },
  {
    id: 23,
    title: "The Finisher Oversized Tee",
    image: "/assets/football/product23.jpg",
    oldPrice: 1299,
    price: 849,
  },
  {
    id: 24,
    title: "PSG Luxe Edition Hoodie",
    image: "/assets/football/product24.jpg",
    oldPrice: 1399,
    price: 999,
  },
  {
    id: 25,
    title: "Game On Streetwear Tee",
    image: "/assets/football/product25.jpg",
    oldPrice: 1299,
    price: 899,
  },
  {
    id: 26,
    title: "Old Trafford Red Spirit Tee",
    image: "/assets/football/product26.jpg",
    oldPrice: 1199,
    price: 799,
  },
  {
    id: 27,
    title: "R7 King of Pitch Tee",
    image: "/assets/football/product27.jpg",
    oldPrice: 1099,
    price: 749,
  },
  {
    id: 28,
    title: "Dynamic Shadow Tee",
    image: "/assets/football/product28.jpg",
    oldPrice: 999,
    price: 699,
  },
  {
    id: 29,
    title: "Goal Chaser Oversized Tee",
    image: "/assets/football/product29.jpg",
    oldPrice: 1299,
    price: 849,
  },
  {
    id: 30,
    title: "Paris Elite Black Hoodie",
    image: "/assets/football/product30.jpg",
    oldPrice: 1399,
    price: 999,
  },
  {
    id: 31,
    title: "Ronaldo Victory Tee",
    image: "/assets/football/product31.jpg",
    oldPrice: 1299,
    price: 899,
  },
  {
    id: 32,
    title: "Red Striker Graphic Tee",
    image: "/assets/football/product32.jpg",
    oldPrice: 1199,
    price: 799,
  },
  {
    id: 33,
    title: "R7 All-Star Street Tee",
    image: "/assets/football/product33.jpg",
    oldPrice: 1099,
    price: 749,
  },
  {
    id: 34,
    title: "Silhouette Glow Tee",
    image: "/assets/football/product34.jpg",
    oldPrice: 999,
    price: 699,
  },
];

  return (
    <div className="football-container">
      <div className="football-categories">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>

      <div className="football-filter">
        <button className="filter-btn">⚙️ Filter</button>
        <select className="sort-dropdown">
          <option>Best selling</option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
      </div>

      <div className="football-products">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>

            <div className="price-section">
              <span className="old-price">₹{item.oldPrice}</span>
              <span className="new-price">₹{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Football;
