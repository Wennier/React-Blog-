
import React from 'react'
import { Carousel } from 'antd';
import './style.css';

const imagesArr = [
    require('./banner_1.png'),
    require('./banner_2.png'),
    require('./banner_3.png'),
];

class SlideShow extends React.Component{
    render(){
        return (
            <Carousel autoplay>
                {imagesArr.map((item,index) => {
                    return <div key={index}><img alt='' src={item}/></div>
                })}
            </Carousel>
        );
    }
}

export default SlideShow