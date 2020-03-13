import React from 'react';
import '../../../css/App.css';
import ImageComponent from './ImageComponent';

interface Props {
    offset_Y: number;
}


const MiddleSection: React.FC<Props> = (props) => {
    return (
        <section className="l-section page_top-middle">
            <ImageComponent offset_Y={props.offset_Y} />
        </section>
    );
}
export default MiddleSection;