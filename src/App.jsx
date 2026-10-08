import { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Areca Palm",
    category: "Indoor Plants",
    price: 499,
    emoji: "🌴",
  },
  {
    id: 2,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 399,
    emoji: "🪴",
  },
  {
    id: 3,
    name: "Rose Plant",
    category: "Flowering Plants",
    price: 299,
    emoji: "🌹",
  },
  {
    id: 4,
    name: "Money Plant",
    category: "Indoor Plants",
    price: 249,
    emoji: "🌿",
  },
  {
    id: 5,
    name: "Aloe Vera",
    category: "Medicinal Plants",
    price: 199,
    emoji: "🌱",
  },
  {
    id: 6,
    name: "Jade Plant",
    category: "Succulents",
    price: 349,
    emoji: "🪴",
  },
];

const categories = [
  { name: "Indoor Plants", icon: "🪴" },
  { name: "Flowering Plants", icon: "🌸" },
  { name: "Outdoor Plants", icon: "🌳" },
  { name: "Succulents", icon: "🌵" },
  { name: "Medicinal Plants", icon: "🌿" },
  { name: "Seeds", icon: "🌱" },
];

function App() {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="app">

      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        <div>🌱 Fresh Plants • Healthy Living</div>

        <div className="top-contact">
          📞{" "}
          <a href="tel:+919824813427">
            +91 98248 13427
          </a>

          <span>|</span>

          👤 Owner: <strong>Gaurav Kumar</strong>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <div className="logo">
          <span>🌿</span>

          <div>
            <strong>NARAYAN</strong>
            <small>NURSERY</small>
          </div>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#plants">Plants</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="cart-btn">
          🛒 Cart ({cart.length})
        </button>

      </nav>

      {/* ================= HERO ================= */}
      <section className="hero" id="home">

        <div className="leaf leaf-one">🍃</div>
        <div className="leaf leaf-two">🌿</div>
        <div className="leaf leaf-three">🍃</div>

        <div className="hero-content">

          <span className="hero-tag">
            🌱 GROW • BLOOM • LIVE
          </span>

          <h1>
            Bring <span>Nature</span>
            <br />
            Into Your Home
          </h1>

          <p>
            Discover beautiful plants, flowers and gardening essentials
            carefully selected to make your home, office and garden
            greener and happier.
          </p>

          <div className="hero-buttons">

            <a href="#plants" className="primary-btn">
              Explore Plants →
            </a>

            <a href="#about" className="secondary-btn">
              Learn More
            </a>

          </div>

          <div className="hero-owner">
            <span>🌿</span>
            <div>
              <small>WELCOME TO</small>
              <strong>NARAYAN NURSERY</strong>
            </div>
          </div>

        </div>

        <div className="hero-plant">

          <div className="sun-glow"></div>

          <div className="plant-circle">
            <div className="big-plant">🌴</div>
          </div>

          <div className="floating-card card-one">
            🌿
            <span>Fresh Plants</span>
          </div>

          <div className="floating-card card-two">
            ⭐
            <span>Premium Quality</span>
          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}
      <section className="features">

        <div>
          <span>🌱</span>

          <div>
            <strong>Healthy Plants</strong>
            <p>Carefully grown</p>
          </div>
        </div>

        <div>
          <span>🚚</span>

          <div>
            <strong>Safe Delivery</strong>
            <p>Delivered with care</p>
          </div>
        </div>

        <div>
          <span>🌿</span>

          <div>
            <strong>Expert Guidance</strong>
            <p>Garden advice</p>
          </div>
        </div>

        <div>
          <span>💚</span>

          <div>
            <strong>Happy Plants</strong>
            <p>Quality guaranteed</p>
          </div>
        </div>

      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="categories-section" id="categories">

        <div className="section-heading">

          <span>EXPLORE OUR COLLECTION</span>

          <h2>Shop By Category</h2>

          <p>
            Find the perfect green companion for your home,
            office or garden.
          </p>

        </div>

        <div className="category-grid">

          {categories.map((category) => (

            <button
              key={category.name}
              className="category-card"
              onClick={() => {
                setActiveCategory(category.name);

                document
                  .getElementById("plants")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >

              <div className="category-icon">
                {category.icon}
              </div>

              <h3>{category.name}</h3>

              <span>
                Explore →
              </span>

            </button>

          ))}

        </div>

      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="products-section" id="plants">

        <div className="section-heading">

          <span>OUR GREEN COLLECTION</span>

          <h2>Popular Plants</h2>

          <p>
            Beautiful plants for homes, offices and gardens.
          </p>

        </div>

        <div className="filter-buttons">

          <button
            className={activeCategory === "All" ? "active" : ""}
            onClick={() => setActiveCategory("All")}
          >
            All Plants
          </button>

          {categories.slice(0, 4).map((category) => (

            <button
              key={category.name}
              className={
                activeCategory === category.name
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveCategory(category.name)
              }
            >
              {category.name}
            </button>

          ))}

        </div>

        <div className="product-grid">

          {filteredProducts.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              <div className="product-image">

                <span className="sale-badge">
                  POPULAR
                </span>

                <div className="product-emoji">
                  {product.emoji}
                </div>

                <button className="heart">
                  ♡
                </button>

              </div>

              <div className="product-info">

                <small>
                  {product.category}
                </small>

                <h3>
                  {product.name}
                </h3>

                <div className="rating">
                  ⭐⭐⭐⭐⭐
                  <span> (4.8)</span>
                </div>

                <div className="product-bottom">

                  <strong>
                    ₹{product.price}
                  </strong>

                  <button
                    onClick={() =>
                      addToCart(product)
                    }
                  >
                    + Add
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= OFFER ================= */}
      <section className="offer-section">

        <div className="offer-content">

          <span>
            🌿 SPECIAL OFFER
          </span>

          <h2>
            Make Your Space Greener
          </h2>

          <p>
            Get special discounts on selected plants
            and gardening products.
          </p>

          <a href="#plants">
            Shop Now →
          </a>

        </div>

        <div className="offer-plant">
          🪴
        </div>

      </section>

      {/* ================= ABOUT ================= */}
      <section className="about-section" id="about">

        <div className="about-image">

          <div className="about-circle">
            🌳
          </div>

        </div>

        <div className="about-content">

          <span>
            ABOUT NARAYAN NURSERY
          </span>

          <h2>
            Growing Nature,
            Growing Happiness
          </h2>

          <p>
            At Narayan Nursery, we believe every home,
            office and garden deserves a touch of nature.
            We provide healthy and beautiful plants
            carefully nurtured for better growth.
          </p>

          <p>
            From indoor plants to flowering plants,
            outdoor greenery and gardening essentials,
            we help you create your own beautiful
            green space.
          </p>

          <div className="about-points">

            <div>
              ✓ Healthy & Fresh Plants
            </div>

            <div>
              ✓ Quality Gardening Products
            </div>

            <div>
              ✓ Expert Plant Care Guidance
            </div>

            <div>
              ✓ Affordable Prices
            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">

        <div className="section-heading">

          <span>
            GET IN TOUCH
          </span>

          <h2>
            Let's Grow Together 🌱
          </h2>

          <p>
            Visit Narayan Nursery or contact us
            for your gardening needs.
          </p>

        </div>

        <div className="contact-grid">

          <div className="contact-card">

            <span>📞</span>

            <h3>
              Call Us
            </h3>

            <a
              href="tel:+919824813427"
              className="contact-link"
            >
              +91 98248 13427
            </a>

          </div>

          <div className="contact-card">

            <span>👤</span>

            <h3>
              Owner
            </h3>

            <p>
              Gaurav Kumar
            </p>

          </div>

          <div className="contact-card">

            <span>📍</span>

            <h3>
              Visit Us
            </h3>

            <p>
              Ring Road, Samarvarni,
              <br />
              Silvassa,
              <br />
              U.T. of Dadra And Nagar Haveli
              <br />
              - 396230
            </p>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer>

        <div className="footer-logo">
          🌿 <strong>NARAYAN NURSERY</strong>
        </div>

        <p>
          Bringing nature closer to you.
        </p>

        <div className="footer-contact">

          <a href="tel:+919824813427">
            📞 +91 98248 13427
          </a>

          <span>•</span>

          <span>
            👤 Gaurav Kumar
          </span>

        </div>

        <div className="footer-address">
          📍 Ring Road, Samarvarni, Silvassa,
          U.T. of Dadra And Nagar Haveli - 396230
        </div>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#plants">Plants</a>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="copyright">
          © 2026 Narayan Nursery.
          All Rights Reserved.
        </div>

      </footer>

    </div>
  );
}

export default App;