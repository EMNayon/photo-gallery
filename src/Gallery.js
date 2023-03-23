import React, { useState } from 'react'
import './gallery.css';
import {AiOutlineClose}from "react-icons/ai";
import img1 from './imgs/1.jpg';
import img2 from './imgs/2.jpg';
import img3 from './imgs/3.png';
import img4 from './imgs/4.png';
import img5 from './imgs/5.jpg';
import img6 from './imgs/6.jpg';
import img7 from './imgs/7.jpg';
export default function Gallery() {

    let data = [
        {
            id: 1,
            imgSrc : img1
        },
        {
            id: 2,
            imgSrc :  img2
        },
        {
            id: 3,
            imgSrc :  img3
        },
        {
            id: 4,
            imgSrc :  img4
        },
        {
            id: 5,
            imgSrc :  img5
        },
        {
            id: 6,
            imgSrc :  img6
        },
        {
            id: 7,
            imgSrc :  img7
        }
    ]
    const [model , setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        // console.warn(imgSrc);
        setTempImgSrc(imgSrc);
        setModel(true);
    }
  return (
    <>
      <div className={model ? "model open" : "model"}>
            <img src={tempImgSrc} />
            <AiOutlineClose onClick={()=> setModel(false)}/>
      </div>
       <div className='gallery'>
           { data.map((item,index) => {
                return (
                    <div className='pics' key={index} onClick={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt='gallery' style={{width:'100%'}}/>
                    </div>
                );
            })}
       </div>
    </>
  )
}
