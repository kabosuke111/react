import React, {useState} from 'react';
import TopSection from './top_page/TopSection';
import MiddleSection from './top_page/MiddleSection';
import '../css/App.css';

const Contents = () => {
    
    return (
        <main className="main">
            <TopSection />
            <MiddleSection />
        </main>
    )
}

export default Contents;