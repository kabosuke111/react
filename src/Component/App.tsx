import React from "react";
import Header from './Header';
import Footer from './Footer';
import Contents from './Contents';
import '../css/App.css';

const App = () => {

  
    //リターン
    return (
        //map関数により順番に要素をセット
    <div id="wrapper">
        <Header />
        <Contents />
        <div style={{height: 1000+"px"}}></div>
        <Footer />
    </div>    
    );
  }
  
export default App;

