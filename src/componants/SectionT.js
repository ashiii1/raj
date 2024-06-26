import React, { useState } from 'react';
import '../App.css';

const imageArray = [
    {
        image: "https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png",
        title: "",
        desc: ""
    },
    {
        image: "https://images.ctfassets.net/u1nb1km7t5q7/5j7ZCC88yr7bP12pqQ7U3J/a8960395f990b42362f28a176d8df983/Aesop_Skin_Sublime_Replenishing_Night_Masque_60mL_Web_Medium_704x374px.png",
        title: "",
        desc: ""
    },
    {
        image: "https://images.ctfassets.net/u1nb1km7t5q7/dOnBqAYKjyXt8FPq50qg7/8ebfb48f20f70b61782149da3d26266d/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Medium_535x522px.png",
        title: "",
        desc: ""
    },
    {
        image: "https://images.ctfassets.net/u1nb1km7t5q7/5j7ZCC88yr7bP12pqQ7U3J/a8960395f990b42362f28a176d8df983/Aesop_Skin_Sublime_Replenishing_Night_Masque_60mL_Web_Medium_704x374px.png",
        title: "",
        desc: ""
    },
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/5puVF2R6wEAclEYaWnwkCh/beca7f94e3ae088337ccdf9a16c67d11/Aesop_Skin_Exalted_Eye_Serum_15ml_Web_Large_684x668px.png",
        title: "",
        desc: ""
    },
    {
        image: "https://images.ctfassets.net/u1nb1km7t5q7/dOnBqAYKjyXt8FPq50qg7/8ebfb48f20f70b61782149da3d26266d/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Medium_535x522px.png",
        title: "",
        desc: ""
    },
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
        <section className="section-two">
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
