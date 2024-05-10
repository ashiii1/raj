


import React, { useState } from 'react';
import '../App.css';

const imageArray = [
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/1qKF9KcniWuX07rpfHmHoB/afd3fd8b4d7a79be87ec8a66c0021a7e/Aesop_Skin_Protective_Facial_Lotion_SPF50_50mL_Web_Front_X-Large_3000x3054px.png",
        title: "",
        desc: ""
    },
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/7rQwKlCTwpQ5vNOQBwg7KA/8c79ad1019aa5dfe09583f5a02c77701/Aesop_Skin_Protective_Facial_Lotion_SPF25_Asia_EU_Web_Large_782x796px.png",
        title: "",
        desc: ""
    },
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/6497Z5CI7aE6GSSkpLHqou/9180575f7cab867e82df9436207a6c71/Aesop_Body_Protective_Body_Lotion_SPF50_Asia_EU_150mL_Web_Front_X-Large_3000x3456px.png",
        title: "",
        desc: ""
    },
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/3vyJxHFKnFJHT4PGafyPqU/9704272f3c9eb199098d4ea28f51ba0c/Aesop_Skin_Sage_and_Zinc_Facial_Hydrating_Lotion_SPF15_50mL_Web_X-Large_1173x1194px.png",
        title: "",
        desc: ""
    },
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/D2FJEA5pA57WNR6Crjerl/5a9f34865fac2097cf46d5d30822c79c/Aesop_Body_Petitgrain_Reviving_Body_Gel_150mL_Web_Front_X-Large_3000x3456px.png",
        title: "",
        desc: ""
    },
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/7pSX4Pu6HnCjxoAI6wumyi/228cf97bf6d53cb2cfde1d33c251db38/Aesop_Fragrance_Rozu_Eau_de_Parfum_50mL_Web_Front_X-Large_3000x2930px.png",
        title: "",
        desc: ""
    },//
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/63tJ9VwYYIp1EjOJJtzejf/7b3547dce05e449b122c703a91644ec5/Aesop_Home_Aganice_Aromatique_Candle_Web_Front_A_Large_1800x1573px.png",
        title: "",
        desc: ""
    },
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/3jqPva1xtBadadHegSTGmm/15e2abea6103475fc23442370737331b/Aesop_Bundle_Cleansing_and_Hydration_for_Dry_Skin_Web_Large_960x1090px.png",
        title: "",
        desc: ""
    },
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/3Nhd8WCdxq9zWNMs3uvOBC/f74a12b5ff26a9a6d845a68e0e115dd7/Aesop_Bundle_Resurrection_Hand_Care_Duo_Web_Large_960x1090px.png",
        title: "",
        desc: ""
    }
];

const Carousel = () => {
    const [nowIndex, setNowIndex] = useState(0);

    const changeImagePosition = (index) => {
        let newIndex = (nowIndex + index + imageArray.length) % imageArray.length;
        setNowIndex(newIndex);
    };

    return (
        <section className="section-fi">
            <div className="carouselContainer">
                <div className="carouselArea">
                    <div className="carouselPosts" style={{ transform: `translateX(-${nowIndex * 50}%)` }}>
                        {imageArray.map((item, index) => (
                            <div key={index} className="carouselPostBox">
                                <div className="carouselPostBox-image" style={{ backgroundImage: `url(${item.image})` }} />
                                <div className="carouselPostBox-title">{item.title}</div>
                                <div className="carouselPostBox-desc">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="controlLeft" onClick={() => changeImagePosition(-1)}>
                    <i className="fa fa-angle-left" >{"<"}</i>
                </div>
                <div className="controlRight" onClick={() => changeImagePosition(1)}>
                    <i className="fa fa-angle-right" >{">"}</i>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
