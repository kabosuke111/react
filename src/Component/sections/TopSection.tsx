import React, { useState, useRef } from "react";
import { useSpring, useTrail, animated, config } from "react-spring";
import '../../css/App.css';

type Props = {
    msg: string;
}

const TopSection: React.FC<Props>=(props:Props) => {

    return (
        <section className="l-section l-section_top">
            <h2 className="top_section_title">{props.msg}</h2>
        </section>
    );
}

export default TopSection;