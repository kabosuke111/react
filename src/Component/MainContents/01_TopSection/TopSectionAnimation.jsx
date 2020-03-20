import React, { useState, useRef } from "react";
import { useSpring, useTrail, animated, config } from "react-spring";
import '../../../css/App.css';

const TopSectionAnimation = () => {
    let bools = true;
    //Hooksでステートをセット
    const [tops, topAct] = useState({
        A_col: 0,
        A_row: 0,
        A_half: 0,
        RS_delay_first: 0,
        A_opac: 0,
      });

    //トレールアニメーションのスタイル
    const trail_anim = useTrail(4, {
        width: `${tops.A_row}%`,
        height: `${tops.A_col}%`,
        left: `calc(50% + ${tops.A_half}px)`,
        opacity: tops.A_opac,
        delay: tops.RS_delay_first,
    });

    const trail_anim_col = useTrail(15, {
        width: `${tops.A_row}%`,
        height: `${tops.A_col}%`,
        left: `calc(50% + ${tops.A_half}px)`,
        opacity: tops.A_opac,
        delay: tops.RS_delay_first,
    });
    
    window.addEventListener('load', () => {
        topAct({
            ...tops,
            A_opac: .2,
            A_col: 100, 
            A_row: 100,
            });
        });
        
    const classnameAction = (name) => {
        name = bools ? "page_top-line row first" : "page_top-line row";
        bools = false;
        return name;
    };

    return (
        <div className="page_top-linebox" id="linebox">
            {trail_anim_col.map((value, index)=>(
                <animated.div className="page_top-line col" style={{...value, width: 0,  left: `calc(50% + ${tops.A_half + (index * 34)}px)`}}>
                    
                </animated.div>
            ))}
            {trail_anim_col.map((value, index)=>(
                <animated.div className="page_top-line col" style={{...value, width: 0,  left: `calc(50% + ${tops.A_half + (index * -34)}px)`}}>
                    
                </animated.div>
            ))}
            {trail_anim.map((value, index)=>(
                <animated.div className={classnameAction()} style={{...value, height: 0,  top: `calc(50% + ${tops.A_half + (index * 34)}px)`}}>
                    
                </animated.div>
            ))}
            {trail_anim.map((value, index)=>(
                <animated.div className="page_top-line row" style={{...value, height: 0,  top: `calc(50% + ${tops.A_half + (index * -34)}px)`}}>
                    
                </animated.div>
            ))}
        </div>
    );
}

export default TopSectionAnimation;