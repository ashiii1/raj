import './App.css';

function App() {
  return (
  <>
      <div className="App">
        <div className='first-nav'>
          <p>Purchase two eligible seasonal products to receive a karst Eau de parfum. <a href='https://www.aesop.com/hk/en/r/summertime-allies/'>Browse formulations</a></p>
        </div>
        <div className='second-nav'>
          <p>Click and Collect is now available in Hong Kong. Enjoy complimentary shipping on all orders. <span className="plus">+</span> </p>
        </div>
  
      <div className='third-nav'>
        <div className='nav-items'>
          <ul>
            <li>Skin Care</li>
            <li>Body & Hand</li>
            <li>Hair</li>
            <li>Fragrance</li>
            <li>Kits & Travel</li>
            <li>Gifts</li>
            <li>Read</li>
            <li>Stores</li>
            <li>Facial Appointments</li>
            <li className="search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </li>
            <ul className="second-list">
              <li>Login</li>
              <li>Cabinet</li>
              <li>Cart</li>
            </ul>
          </ul>
        </div>
    </div>
    <div className="image-container">
    <img  className="images" src="https://www.aesop.com/u1nb1km7t5q7/7Imo9dLHKBnqUO6aWwOyni/6a842852ce91de8e786a9e0f930237e9/Aesop_Gifting_2024_Mothers_Day_Web_Homepage_Primary_Full_Bleed_Desktop_5120x1856px.jpg" alt="L"/>
    </div>
    </div>
    </>
  );
}

export default App;
