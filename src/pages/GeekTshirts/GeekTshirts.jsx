import React from "react";
import { useNavigate } from "react-router-dom";
import { geekTshirts } from "../../data/products";

const categories = [
  { key: "shop-all", label: "SHOP ALL", img: "/images/categories/all.png" },
  { key: "t-shirts", label: "T-SHIRTS", img: "/images/categories/tshirts.png" },
  { key: "hoodies", label: "HOODIES", img: "/images/categories/hoodies.png" },
  { key: "oversized", label: "OVERSIZED", img: "/images/categories/oversized.png" },
  { key: "full-sleeve", label: "SLEEVES", img: "/images/categories/sleeves.png" },
  { key: "kids", label: "KIDS", img: "/images/categories/kids.png" },
];

const GeekTshirts = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      {/* Banner */}
      <img
        src="/images/geek-banner.png"
        alt="Geek Banner"
        style={{
          width: "100%",
          maxWidth: "1200px",
          height: "auto",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      />

      {/* Category Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginBottom: "40px",
          flexWrap: "wrap",
          fontWeight: "600",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.key}
            onClick={() => navigate(`/geek/${cat.key}`)}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 15px",
              borderRadius: "6px",
              border: "1.5px solid #af3828",
              color: "#af3828",
              textTransform: "uppercase",
              userSelect: "none",
              transition: "background-color 0.3s, color 0.3s",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#af3828";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#af3828";
            }}
          >
            <img
              src={cat.img}
              alt={cat.label}
              style={{ width: "24px", height: "24px", objectFit: "contain" }}
            />
            <span>{cat.label}</span>
          </div>
        ))}
      </div>

      {/* Product List */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "0px",
        }}
      >
        {geekTshirts.map((product) => (
          <div
            key={product.id}
            onClick={() =>
              navigate(`/product/${product.id}`, {
                state: {
                  id: product.id,
                  name: product.title,
                  image: product.image,
                  oldPrice: `₹${parseInt(product.price) + 300}`,
                  newPrice: `₹${product.price}`,
                  description:
                    product.description || "High-quality geek t-shirt for fans.",
                },
              })
            }
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              width: "220px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                borderRadius: "10px",
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />

            <h3 style={{ margin: "15px 0 5px" }}>{product.title}</h3>
            <p style={{ fontWeight: "bold" }}>₹{product.price}</p>

            <button
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#af3828",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeekTshirts;
