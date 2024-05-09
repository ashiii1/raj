import React, { useState, useRef, useEffect } from 'react';
import Footer from './componants/Footer';
import './App.css';

function App() {
  const [currentPageSection1, setCurrentPageSection1] = useState(1);
  const [currentPageSection2, setCurrentPageSection2] = useState(1);
  const imageContainerRefSection1 = useRef(null);
  const imageContainerRefSection2 = useRef(null);

  useEffect(() => {
    const containerSection1 = imageContainerRefSection1.current;
    const containerSection2 = imageContainerRefSection2.current;
    let intervalIdSection1;
    let intervalIdSection2;

    const scrollToNextImageSection1 = () => {
      const nextPage = currentPageSection1 === 3 ? 1 : currentPageSection1 + 1;
      const nextScrollLeft = containerSection1.offsetWidth * (nextPage - 1);
      containerSection1.scrollTo({
        left: nextScrollLeft,
        behavior: 'smooth'
      });
      setCurrentPageSection1(nextPage);
    };

    const scrollToNextImageSection2 = () => {
      const nextPage = currentPageSection2 === 4 ? 1 : currentPageSection2 + 1;
      const nextScrollLeft = containerSection2.offsetWidth * (nextPage - 1);
      containerSection2.scrollTo({
        left: nextScrollLeft,
        behavior: 'smooth'
      });
      setCurrentPageSection2(nextPage);
    };

    intervalIdSection1 = setInterval(scrollToNextImageSection1, 10000);
    intervalIdSection2 = setInterval(scrollToNextImageSection2, 10000);

    return () => {
      clearInterval(intervalIdSection1);
      clearInterval(intervalIdSection2);
    };
  }, [currentPageSection1, currentPageSection2]);

  const scrollToPageSection1 = (page) => {
    const container = imageContainerRefSection1.current;
    const nextScrollLeft = container.offsetWidth * (page - 1);
    container.scrollTo({
      left: nextScrollLeft,
      behavior: 'smooth'
    });
    setCurrentPageSection1(page);
  };

  const scrollToPageSection2 = (page) => {
    const container = imageContainerRefSection2.current;
    const nextScrollLeft = container.offsetWidth * (page - 1);
    container.scrollTo({
      left: nextScrollLeft,
      behavior: 'smooth'
    });
    setCurrentPageSection2(page);
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
  <div className='items2'>
    <div className="image-carousel-two" ref={imageContainerRefSection2}>
      <div className="images-two">
        <img className="img4" src="https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png" alt="Page 1" />
        <img className='img5' src="https://images.ctfassets.net/u1nb1km7t5q7/5j7ZCC88yr7bP12pqQ7U3J/a8960395f990b42362f28a176d8df983/Aesop_Skin_Sublime_Replenishing_Night_Masque_60mL_Web_Medium_704x374px.png" alt="Page 2" />
        <img className='img6' src="https://images.ctfassets.net/u1nb1km7t5q7/dOnBqAYKjyXt8FPq50qg7/8ebfb48f20f70b61782149da3d26266d/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Medium_535x522px.png" alt="Page 3" />
        <img className='img7' src="https://images.ctfassets.net/u1nb1km7t5q7/5j7ZCC88yr7bP12pqQ7U3J/a8960395f990b42362f28a176d8df983/Aesop_Skin_Sublime_Replenishing_Night_Masque_60mL_Web_Medium_704x374px.png" alt="Page 2" />
        <img className='img8' src="https://www.aesop.com/u1nb1km7t5q7/5puVF2R6wEAclEYaWnwkCh/beca7f94e3ae088337ccdf9a16c67d11/Aesop_Skin_Exalted_Eye_Serum_15ml_Web_Large_684x668px.png" alt="Page 4" />
        <img className='img6' src="https://images.ctfassets.net/u1nb1km7t5q7/dOnBqAYKjyXt8FPq50qg7/8ebfb48f20f70b61782149da3d26266d/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Medium_535x522px.png" alt="Page 3" />
      </div>
      <div className="carousel-controls">
            <div className="arrow left-arrow" onClick={() => scrollToPageSection2(currentPageSection2 === 1 ? 4 : currentPageSection2 - 1)}>&lt;</div>
            <div className="page-numbers">
              <span className="current-page">{currentPageSection2}/4</span>
            </div>
            <div className="arrow right-arrow" onClick={() => scrollToPageSection2(currentPageSection2 === 4 ? 1 : currentPageSection2 + 1)}>&gt;</div>
          </div>
        </div>
        </div>
      </section>

<section className='section-3' style={{ marginBottom: "20px" }}>
  <div className='items3'>
    <figure style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <img className="img4" style={{ width: "45%", height: "auto", marginRight: "10px" }} src="https://www.aesop.com/u1nb1km7t5q7/j8oGkUxQfevPzSThpybbK/94b61719b73361cf3d46da235e779694/Aesop_Travel_2023_Web_Landing_Page_2_Secondary_Mid_Tablet_1400x788px.jpg" alt="Page 1" />
      <figcaption style={{ width: "45%", padding: "10px", textAlign: "right", marginTop: "-20px" }}>
Experience Karst Eau de Parfum
A seasonal offer
In celebration of balmy summer days, receive a complimentary vial of fresh, herbaceous, marine Karst Eau de Parfum with the purchase of two eligible formulations. (Excludes Click and Collect.) </figcaption>
    </figure>
  </div>
</section>

<section className='section-3.1' style={{ marginTop: "-470px", marginBottom: "30px" }}>
  <div className='items3'>
    <figure style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <figcaption style={{ width: "45%", padding: "15px" }}>Options, streamlined
This practical and playful tool designed to aid in choosing a suitable offering allows the range to be sorted according to a variety of criteria.</figcaption>
      <img className="img4" style={{ width: "45%", height: "auto", marginLeft: "10px" }} src="https://www.aesop.com/u1nb1km7t5q7/33jC1RNNiSeYosSCN0cKiC/1421c9199c986832eb2120251deb0759/Aesop_Gifting_2024_Web_Homepage_Secondary_Gift_Guide_GL_Mid_Desktop_2560x1440px.jpg" alt="Page 1" />
    </figure>
  </div>
</section>

{/* 
<section className='section-3.2'>
  <div className='item'>
    <div className="image-carousel-tHree">
      <div className="images-t">
        <img className="im" src="https://www.aesop.com/u1nb1km7t5q7/3ayr8uwVaZb22D3K7w7Fpj/6c61aeafabac6a762cc7993f24bd8e4a/Aesop_Hand_Eleos_Aromatique_Hand_Balm_75mL_Web_Front_X-Large_3000x3559px.png" alt="Aesop Hand Eleos Aromatique Hand Balm" />
        <img className='im' src="https://www.aesop.com/u1nb1km7t5q7/6ZQhryRe2slYhtGmdiWlUQ/bc59a136742dc8ffc0942d8c171cbddb/Aesop_Skin_Immaculate_Facial_Tonic_100mL_Web_Front_X-Large_3000x3054px.png" alt="Aesop Skin Immaculate Facial Tonic" />
        <img className='im' src="https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png" alt="Aesop Skin Lucent Facial Concentrate" />
        <img className='im' src="https://www.aesop.com/u1nb1km7t5q7/1qKF9KcniWuX07rpfHmHoB/afd3fd8b4d7a79be87ec8a66c0021a7e/Aesop_Skin_Protective_Facial_Lotion_SPF50_50mL_Web_Front_X-Large_3000x3054px.png" alt="Aesop Skin Protective Facial Lotion SPF50" />
        <img className='i8' src="https://www.aesop.com/u1nb1km7t5q7/4hQAXgS0eGue4ds2OyZOIK/5557c667d029da695fd286e5c39f75b1/Aesop-Geranium-Leaf-Duet-with-Product-Large-1584x962px.png" alt="Aesop Geranium Leaf Duet with Product" />
        <img className='i6' src="https://www.aesop.com/u1nb1km7t5q7/3diH0GAnUrFpI7JU19ZfMQ/99b51cbd41d6c18c3e75cd225ec22674/Aesop_Fragrance_Rozu_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" alt="Aesop Fragrance Rozu Eau de Parfum" />
        <img className='i6' src="https://www.aesop.com/u1nb1km7t5q7/3jqPva1xtBadadHegSTGmm/15e2abea6103475fc23442370737331b/Aesop_Bundle_Cleansing_and_Hydration_for_Dry_Skin_Web_Large_960x1090px.png" alt="Aesop Bundle Cleansing and Hydration for Dry Skin" />
        <img className='im' src="https://www.aesop.com/u1nb1km7t5q7/3Nhd8WCdxq9zWNMs3uvOBC/f74a12b5ff26a9a6d845a68e0e115dd7/Aesop_Bundle_Resurrection_Hand_Care_Duo_Web_Large_960x1090px.png" alt="Aesop Bundle Resurrection Hand Care Duo" />
        <img className='i6' src="https://www.aesop.com/u1nb1km7t5q7/7HiBQE8eBJQl5hsO7l3yTi/8fe99fb794f72fda03d157b266337215/Aesop_Bundle_Tacit_Ensemble_Web_Large_960x1090px.png" alt="Aesop Bundle Tacit Ensemble" />
      </div>
    </div>
  </div>
</section>

      {/* <div className="carousel-controls">
        <div className="arrow left-arrow" onClick={() => scrollToPageSection2(currentPageSection2 === 1 ? 4 : currentPageSection2 - 1)}>&lt;</div>
        <div className="page-numbers">
          <span className="current-page"></span>
        </div>
        <div className="arrow right-arrow" onClick={() => scrollToPageSection2(currentPageSection2 === 4 ? 1 : currentPageSection2 + 1)}>&gt;</div>
      </div> 
    */}


<section className='section-5'>
  <div className='items-last'>
  <Footer/>
  </div>
</section>
    </div>
  );
}

export default App;