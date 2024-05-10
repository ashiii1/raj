import React, { useState } from 'react';
import '../App.css';

const imageArray = [
    {
        image: "https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png",
        title: "",
        desc: "許瑋甯《每個人都是鬼》by湯包(湯明憲)"
    },
    {
        image: "https://images.ctfassets.net/u1nb1km7t5q7/5j7ZCC88yr7bP12pqQ7U3J/a8960395f990b42362f28a176d8df983/Aesop_Skin_Sublime_Replenishing_Night_Masque_60mL_Web_Medium_704x374px.png",
        title: "微電影《喜歡你可以嗎》主題曲",
        desc: "曹祐寧《兩小勿猜》by姚書寰(姚頭)/曜花"
    },
    {
        image: "https://images.ctfassets.net/u1nb1km7t5q7/dOnBqAYKjyXt8FPq50qg7/8ebfb48f20f70b61782149da3d26266d/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Medium_535x522px.png",
        title: "首支個人單曲",
        desc: "亮哲《囡仔》by亮哲"
    },
    {
        image: "https://images.ctfassets.net/u1nb1km7t5q7/5j7ZCC88yr7bP12pqQ7U3J/a8960395f990b42362f28a176d8df983/Aesop_Skin_Sublime_Replenishing_Night_Masque_60mL_Web_Medium_704x374px.png",
        title: "新加坡新銳創作歌手",
        desc: "卓振聲《以後》by方炯鎵，卓振聲"
    },
    {
        image: "https://www.aesop.com/u1nb1km7t5q7/5puVF2R6wEAclEYaWnwkCh/beca7f94e3ae088337ccdf9a16c67d11/Aesop_Skin_Exalted_Eye_Serum_15ml_Web_Large_684x668px.png",
        title: "首支個人單曲",
        desc: "亮哲《囡仔》by亮哲"
    },
    {
        image: "https://images.ctfassets.net/u1nb1km7t5q7/dOnBqAYKjyXt8FPq50qg7/8ebfb48f20f70b61782149da3d26266d/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Medium_535x522px.png",
        title: "首支個人單曲",
        desc: "亮哲《囡仔》by亮哲"
    }
];

const Carousel = () => {
    const [nowIndex, setNowIndex] = useState(0);

    const changeImagePosition = (index) => {
        let newIndex = (nowIndex + index + imageArray.length) % imageArray.length;
        setNowIndex(newIndex);
    };

    return (
        <div className="carouselContainer">
            <div className="carouselArea">
            <div className="carouselPosts">
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
                <i className="fa fa-angle-left" />
            </div>
            <div className="controlRight" onClick={() => changeImagePosition(1)}>
                <i className="fa fa-angle-right" />
            </div>
        </div>
    );
};

export default Carousel;
