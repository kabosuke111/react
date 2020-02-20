import React, { useState } from "react";
import { useSpring, useTrail, animated, config } from "react-spring";
import TopIcon from '../images/rogo.svg';
import '../css/App.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
    //Hooksでステートをセット
    const [anims, animsAct] = useState({
      bools: false,
      A_top: 100,
      A_bord: 0,
      A_rotate: 180,
      A_width: 0,
      A_opacity: 0,
      RS_delay_first: 200,
      A_Big: 1,
    });

    //メニューバーの内容
    const menu_bar = [
      'ホーム',
      '新入社員の方へ',
      '会社情報',
      '社内活動',
      'マニュアル',
      '社内報',
      'アクセス',
      'リンク'
    ]

    console.log(anims.bools);
    //トレールアニメーションのスタイル
    const trail_anim = useTrail(menu_bar.length, {
      config: config.gentle,
      transform: `translateY(${anims.A_top}%) rotateX(${anims.A_rotate}deg)`,
      opacity: anims.A_opacity,
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
      <header className="header">
        <animated.h1 className="top_icon" style={icon_spring} onClick={()=>animsAct(
          !anims.bools ? {...anims, A_top:0, A_rotate:0, A_width:100, A_Big: 1.2, A_opacity: 1, bools: !anims.bools} : {
          ...anims, A_top:100, A_rotate: 180, A_width: 0, A_Big: 1, A_opacity: 0, bools: !anims.bools})}>
          <animated.img src={TopIcon} alt="breeze group" />
        </animated.h1>

        <nav>
          <animated.ul className="bord_container" style={spring_anim}>
            {trail_anim.map((value, index) => (
              <animated.li  className="bord_item" style={{...value, listStyle: "none"}} >
                <AnchorLink href="#footer">{menu_bar[index]}</AnchorLink>
              </animated.li>)
            )}
          </animated.ul>
          
        </nav>
      </header>
    );
  }
  

export default Header;