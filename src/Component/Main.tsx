import React, {useState} from 'react';
import TopSection from './MainContents/01_TopSection/TopSection';
import MiddleSection from './MainContents/01_TopSection/MiddleSection';
import '../css/App.css';

interface Props {
    offset_Y: number;
}

const Main: React.FC<Props> = (props) => {
    return (
        <main className="main">
            <TopSection />
            <MiddleSection offset_Y={props.offset_Y} />
        </main>
    )
}

export default Main;