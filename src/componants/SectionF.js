import React, { useState, useRef, useEffect } from 'react';

const SectionF = () => {

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
 <>
    
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
      </>
  )
}

export default SectionF