import React, {useState} from "react";
import {connect} from 'react-redux';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Main from './Component/Main';
import './css/App.css';
import {AppState} from './store';

interface Types {
    offset_Y: number;
}

const scroll_point: Types = {
    offset_Y: 0,
}

const mapping = (appState: AppState) => {
    return {
        offset_Y: appState.state.offset_Y,
    };
}

const App: React.FC = () => {
    const [scroll_point, scrollAct] = useState<Types>({
        offset_Y: 0,
    });

    //addEventListenerを入れたいが重くなってしまう
    // window.addEventListener('scroll', (e):void => {
    //     let sp:number = document.documentElement.scrollTop;
    //     scrollAct({
    //         offset_Y: sp,
    //     });
    // }, {passive: true});

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
  
  connect(mapping)(App);

export default App;

