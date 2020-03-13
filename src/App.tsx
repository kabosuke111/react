import React from "react";
import Header from './Component/Header';
import Footer from './Component/Footer';
import Main from './Component/Main';
import './css/App.css';

interface Types {
    offset_Y: number;
}

const scroll_point: Types = {
    offset_Y: 0,
}

const App: React.FC = () => {

    window.addEventListener('scroll', (e):void => {
        scroll_point.offset_Y = document.documentElement.scrollTop;
    }, {passive: true});
    //リターン
    return (
        //map関数により順番に要素をセット
    <div id="wrapper">
        <Header />
        <Main offset_Y={scroll_point.offset_Y} />
        <div style={{height: 1000+"px"}}></div>
        <Footer />
    </div>    
    );
  }
  
export default App;

