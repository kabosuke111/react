import React from 'react';
import '../../css/App.css';
import image01 from '../../images/top/sample01.jpg';
import image02 from '../../images/top/sample02.jpg';
import image03 from '../../images/top/sample03.jpg';

const ImageComponent = () => {
    const image_sources = {
        first: image01,
        second: image02,
        third: image03,
    }

    let source_url = [];

    for(let key in image_sources) {
        source_url.push(image_sources[key]);
    }

    console.log(source_url);

    return (
       <div class="middle_images">{source_url.map((value) => (<img src={value} />))}</div>
    );
}

const MiddleSection = () => {
    return (
        <section className="l-section page_top-middle">
            <ImageComponent />
        </section>
    );
}
export default MiddleSection;