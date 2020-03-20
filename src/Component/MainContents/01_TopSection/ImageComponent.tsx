import React, {useState} from 'react';
import '../../../css/App.css';
import image01 from '../../../images/top/sample01.jpg';
import image02 from '../../../images/top/sample02.jpg';
import image03 from '../../../images/top/sample03.jpg';
import {useSpring, useTrail, animated, config} from 'react-spring';

interface Props {
    offset_Y: number;
}

const ImageComponent: React.FC<Props> = (props) => {


    const image_sources: any = {
        first: image01,
        second: image02,
        third: image03,
    }

    let source_url = [];

    for(let key in image_sources) {
        source_url.push(image_sources[key]);
    }

    return (
      <div className="l-middle_images">
            {source_url.map((value) => (<div className="middle_images-item_box">
              <img src={value} alt="" className="middle_images-item" />
            </div>))}
      </div>
    );
}

export default ImageComponent;