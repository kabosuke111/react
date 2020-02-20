import React from 'react';
import {useSpring, useChain, useTrail} from 'react-spring';
import TopSection from './sections/TopSection';
import '../css/App.css';

const Contents: React.FC = () => {
    return (
        <main className="main">
            <div className="sections">
                <TopSection />
            </div>
        </main>
    )
}

export default Contents;