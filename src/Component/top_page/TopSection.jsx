import React, { useState, useRef } from "react";
import TopSectionAnimation from './TopSectionAnimation';
import TopSectionText from './TopSectionText';
import '../../css/App.css';

const TopSection = () => {

    return (
        <section className="l-section page_top">
            
            <h2 className="page_top-section_title">BREEZE GROUP</h2>
            <TopSectionText />
            <TopSectionAnimation />
            <TopSectionAnimation />
        </section>
    );
}

export default TopSection;