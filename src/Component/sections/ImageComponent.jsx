import React from 'react';
import '../../css/App.css';

export const ImageComponent = () => {
    const image_sources = {
        first: 'omega',
        second: 'gunmma',
        third: 'alpha',
    }

    return (
       <div class="middle_images">{image_sources.map((value, index) => (<div>{value}</div>))}</div>
    );
}

export default ImageComponent;