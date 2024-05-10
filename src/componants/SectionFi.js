import React, { useState } from 'react';
import '../App.css';

const imageArray = [
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/10Zw5151dK7os0RdWL2Mjm/cf0287cd3a857eebbc4f64f9fb54f702/Aesop_Hand_Eleos_Aromatique_Hand_Balm_75mL_Web_Front_Small_700x830px.png",
        title: "",
        desc: ""
    },
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/3NERkrIn0dOcjmOMTiqDlv/70be9f433dc806b809b4fa3cd73559b0/Aesop_Skin_Immaculate_Facial_Tonic_100mL_Web_Front_Large_900x916px.png",
        title: "",
        desc: ""
    },
    {
        image: "https://images.ctfassets.net/u1nb1km7t5q7/dOnBqAYKjyXt8FPq50qg7/8ebfb48f20f70b61782149da3d26266d/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Medium_535x522px.png",
        title: "",
        desc: ""
    },
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/1qKF9KcniWuX07rpfHmHoB/afd3fd8b4d7a79be87ec8a66c0021a7e/Aesop_Skin_Protective_Facial_Lotion_SPF50_50mL_Web_Front_X-Large_3000x3054px.png",
        title: "",
        desc: ""
    },
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/1mMB0Lyr5i2SgYQMASDBy3/d2b0ff186b202ed3419d0d4d6e4a1935/Aesop-Geranium-Leaf-Duet-with-Product-Medium-1238x752px.png",
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
