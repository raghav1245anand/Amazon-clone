import "./App.css";

function App() {
  const products = [
    {
      name: "Boat Earbuds",
      price: "₹1,299",
      oldPrice: "₹2,999",
      offer: "57% off",
      image:
        "https://m.media-amazon.com/images/I/61KNJav3S9L._SX679_.jpg",
    },

    {
      name: "iPhone 15",
      price: "₹69,900",
      oldPrice: "₹79,999",
      offer: "12% off",
      image:
        "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
    },

    {
      name: "Smart Watch",
      price: "₹2,499",
      oldPrice: "₹4,999",
      offer: "50% off",
      image:
        "https://m.media-amazon.com/images/I/61ZjlBOp+rL._SX679_.jpg",
    },

    {
      name: "4K Smart TV",
      price: "₹41,990",
      oldPrice: "₹64,999",
      offer: "35% off",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ybZKGSLHoZMDjuNo_r9Eb9lBV1pBMWvtLw&s",
    },

    {
      name: "HP Laptop",
      price: "₹45,990",
      oldPrice: "₹59,999",
      offer: "23% off",
      image:
        "https://m.media-amazon.com/images/I/71f5Eu5lJSL._SX679_.jpg",
    },

    {
      name: "Wireless Mouse",
      price: "₹599",
      oldPrice: "₹995",
      offer: "40% off",
      image:
        "https://m.media-amazon.com/images/I/61LtuGzXeaL._SX679_.jpg",
    },

    {
      name: "Samba Shoes",
      price: "₹10999",
      oldPrice: "₹11995",
      offer: "40% off",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSynRvHPxupIEW2HTMEZTzYOjNVryi1_NMssuesh7mcHCt1IUtXZOqRwCU0HObeoAx3fSfqhY0tHzFT1UACby3VYqI1lCZ-SWP-kGTLzLvrCX8RPlbl3Eu-ViBzbZZw-5Do4R_MgA&usqp=CAc",
    },
  ];

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <div className="logo">amazon</div>

        <input
          type="text"
          placeholder="Search Amazon Clone"
          className="search"
        />

        <div className="nav">
          <p>Hello, Sign in</p>
          <h4>Account & Lists</h4>
        </div>

        <div className="cart">🛒 Cart</div>
      </div>

      {/* Menu */}
      <div className="menu">
        <p>All</p>
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Registry</p>
        <p>Gift Cards</p>
        <p>Sell</p>
      </div>

      {/* Hero Banner */}
      <div className="hero">
        <div className="hero-text">
          <h1>Echo Dot (5th Gen)</h1>
          <h2>Smart speaker with Alexa</h2>
          <h1>₹4,499</h1>

          <button>Shop now</button>
        </div>
      </div>

      {/* Categories */}
      <div className="categories">
        <div className="category-card">
          <h2>Styles for men</h2>

          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
            alt=""
          />

          <p>See all offers</p>
        </div>

        <div className="category-card">
          <h2>Home & kitchen</h2>

          <img
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba"
            alt=""
          />

          <p>See all offers</p>
        </div>

        <div className="category-card">
          <h2>Electronics</h2>

          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt=""
          />

          <p>See all offers</p>
        </div>

        <div className="category-card">
          <h2>Sign in</h2>

          <button className="signin-btn">
            Sign in securely
          </button>
        </div>
      </div>

      {/* Products */}
      <div className="product-section">
        <h2>Best sellers in Electronics</h2>

        <div className="products">
          {products.map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <div className="rating">⭐⭐⭐⭐⭐</div>

              <h2>{item.price}</h2>

              <p>
                <span className="old-price">
                  {item.oldPrice}
                </span>

                <span className="offer">
                  {item.offer}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div>
          <h3>Get to Know Us</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
        </div>

        <div>
          <h3>Make Money with Us</h3>
          <p>Sell on Amazon</p>
          <p>Amazon Global Selling</p>
        </div>

        <div>
          <h3>Let Us Help You</h3>
          <p>Your Account</p>
          <p>Returns Centre</p>
        </div>

        <div>
          <h3>Connect with Us</h3>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>YouTube</p>
        </div>
      </div>
    </div>
  );
}

export default App;