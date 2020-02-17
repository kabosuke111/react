import React from 'react';
import {useSpring, useChain, useTrail} from 'react-spring';
import TopSection from './sections/TopSection';
import '../css/App.css';

const Contents: React.FC = () => {
    return (
        <main id="main">
            <div className="Sections">
                <TopSection msg="BREEZEGROUP" />
            </div>
        </main>
    )
}

export default Contents;