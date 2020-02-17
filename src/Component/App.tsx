import React, { useState, useRef } from "react";
import { useSpring, useTrail, animated, config } from "react-spring";
import Footer from './Footer';
import Contents from './Contents';
import TopIcon from '../images/rogo.svg';
import '../css/App.css';

const App = () => {
    //Hooksでステートをセット
    const [anims, animsAct] = useState({
      A_top: 100,
      A_bord: 0,
      A_rotate: 180,
      A_width: 0,
      RS_delay_first: 200,
      A_Big: 1,
    });
  
    //トレールアニメーションのスタイル
    const trail_anim = useTrail(3,{
      config: config.gentle,
      transform: `translateY(${anims.A_top}%) rotateX(${anims.A_rotate}deg)`,
      delay: anims.RS_delay_first,
    });
  
    //スプリングアニメーションのセット
    const spring_anim = useSpring({
      config: config.gentle,
      width: `${anims.A_width}%`
    });
  
    const icon_spring = useSpring({
      config: config.gentle,
      transform: `scale(${anims.A_Big}, ${anims.A_Big}) rotate(${anims.A_rotate*2}deg)`,
    });
  
    //リターン
    return (
        //map関数により順番に要素をセット
    <div>
        <header id="header" onMouseLeave={()=>animsAct({
          ...anims, A_top:100, A_rotate: 180, A_width: 0, A_Big: 1})} >
          <animated.h1 className="top_icon" style={icon_spring} onMouseEnter={()=>animsAct({
            ...anims, A_top:0, A_rotate:0, A_width:100, A_Big: 1.2})}><animated.img src={TopIcon} alt="breeze group" />
          </animated.h1>
  
          <nav>
            <animated.ul className="bord_container" style={spring_anim} 
            
            >
            {trail_anim.map((value, index) => (
              <animated.li  className="bord_item" style={{...value, listStyle: "none"}} >
                <a href="#">文章です。</a>
              </animated.li>)
            )}
            </animated.ul>
            
          </nav>
        </header>
        <Contents />
        <Footer />
    </div>    
    );
  }
  

export default App;