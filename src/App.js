import React, { useState, useRef, useEffect } from 'react';
import SectionT from './componants/SectionT'
import './App.css';

function App() {
  const [currentPageSection1, setCurrentPageSection1] = useState(1);
  const imageContainerRefSection1 = useRef(null);

  useEffect(() => {
    const containerSection1 = imageContainerRefSection1.current;
    let intervalIdSection1;

    const scrollToNextImageSection1 = () => {
      const nextPage = currentPageSection1 === 3 ? 1 : currentPageSection1 + 1;
      const nextScrollLeft = containerSection1.offsetWidth * (nextPage - 1);
      containerSection1.scrollTo({
        left: nextScrollLeft,
        behavior: 'smooth'
      });
      setCurrentPageSection1(nextPage);
    };

    

    intervalIdSection1 = setInterval(scrollToNextImageSection1, 10000);

    return () => {
      clearInterval(intervalIdSection1);
    };
  }, [currentPageSection1]);

  const scrollToPageSection1 = (page) => {
    const container = imageContainerRefSection1.current;
    const nextScrollLeft = container.offsetWidth * (page - 1);
    container.scrollTo({
      left: nextScrollLeft,
      behavior: 'smooth'
    });
    setCurrentPageSection1(page);
  };


  return (
    <div className="App">
      <section className='section-1'>
        <div className='first-nav'>
          <p>Purchase two eligible seasonal products to receive a karst Eau de parfum. <a className='formulation-link' href='https://www.aesop.com/hk/en/r/summertime-allies/'>Browse formulations</a></p>
        </div>
        <div className='second-nav'>
          <p className='second-nav-para'>Click and Collect is now available in Hong Kong. Enjoy complimentary shipping on all orders. <span className="plus">+</span> </p>
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

        <div className="image-carousel">
          <div className="images" ref={imageContainerRefSection1}>
            <img className="img1" src="https://www.aesop.com/u1nb1km7t5q7/7Imo9dLHKBnqUO6aWwOyni/6a842852ce91de8e786a9e0f930237e9/Aesop_Gifting_2024_Mothers_Day_Web_Homepage_Primary_Full_Bleed_Desktop_5120x1856px.jpg" alt="Page 1" />
            <img className='img2' src="https://www.aesop.com/u1nb1km7t5q7/75bEmyIFH0TlczfbHwVoAP/e1af4ae744f84585a8402df82db1f4a2/Aesop_Exfoliating_Replenishing_Duo_HK_Web_Homepage_Secondary_50-50_Desktop_XL_2560x1200px.jpg" alt="Page 2" />
            <img className='img3' src="https://www.aesop.com/u1nb1km7t5q7/3puyIWfEeiEk9TDvdn17J3/1132610ba1a1a4ce94776e33216d7e93/Aesop_IFT_2024_Web_Homepage_3_GL_Primary_50-50_Desktop_XL_2560x1200px.jpg" alt="Page 3" />
          </div>
          <div className="carousel-controls">
            <div className="page-numbers">
              <span className="arrow" onClick={() => scrollToPageSection1(currentPageSection1 === 1 ? 3 : currentPageSection1 - 1)}>&lt;</span>
              <span className="current-page">{currentPageSection1}/3</span>
              <span className="arrow" onClick={() => scrollToPageSection1(currentPageSection1 === 3 ? 1 : currentPageSection1 + 1)}>&gt;</span>
            </div>
          </div>
        </div>
      </section>

      <section className='section-2'>
  <SectionT/>
      </section>
      <section className='section-3' style={{ marginBottom: "20px" }}>
  <div className='items3'>
    <figure style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <img className="img4" style={{ width: "45%", height: "auto", marginRight: "10px" }} src="https://www.aesop.com/u1nb1km7t5q7/j8oGkUxQfevPzSThpybbK/94b61719b73361cf3d46da235e779694/Aesop_Travel_2023_Web_Landing_Page_2_Secondary_Mid_Tablet_1400x788px.jpg" alt="Page 1" />
      <figcaption style={{ width: "45%", padding: "10px", textAlign: "right", marginTop: "-20px" }}>
        Experience Karst Eau de Parfum
        A seasonal offer
        In celebration of balmy summer days, receive a complimentary vial of fresh, herbaceous, marine Karst Eau de Parfum with the purchase of two eligible formulations. (Excludes Click and Collect.)
      </figcaption>
    </figure>
  </div>
</section>

<section className='section-3.1' style={{ marginTop: "30px", marginBottom: "30px" }}>
  <div className='items3'>
    <figure style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <figcaption style={{ width: "45%", padding: "15px" }}>Options, streamlined
        This practical and playful tool designed to aid in choosing a suitable offering allows the range to be sorted according to a variety of criteria.
      </figcaption>
      <img className="img4" style={{ width: "45%", height: "auto", marginLeft: "10px" }} src="https://www.aesop.com/u1nb1km7t5q7/33jC1RNNiSeYosSCN0cKiC/1421c9199c986832eb2120251deb0759/Aesop_Gifting_2024_Web_Homepage_Secondary_Gift_Guide_GL_Mid_Desktop_2560x1440px.jpg" alt="Page 1" />
    </figure>
  </div>
</section>

<section className='section-l' style={{ marginTop: "30px" }}>
  <footer id="footer">
    <div className="foot-col-1">
      <div className="logo">
        <img src="//www.sofitmobile.com/images/sofit-icon.png" alt='LO'/>
      </div>
      <p>Lorem ipsum dolor sit amet, feugiat delicat liberavisse id cum no quo. Lorem ipsum dolor sit amet, feugiat delicat liberavisse id cum no quo. Lorem ipsum dolor sit amet, feugiat delicat liberavisse id cum no quo.</p>
    </div>

    <div className="foot-col-2">
      <h4>Navigation</h4>
      <ul>
        <li>Home</li>
        <li>Overview</li>
        <li>About</li>
        <li>Buying Options</li>
        <li>Support</li>
      </ul>
    </div>

    <div className="foot-col-3">
      <h4>Extended Navigation</h4>
      <ul>
        <li>More</li>
        <li>More</li>
        <li>More</li>
        <li>More</li>
        <li>More</li>
      </ul>
    </div>
  </footer>
</section>
    </div>
  );
}

export default App; 