import React from 'react';
import 'antd/dist/antd.css';
import {GlobalStyle} from './Appcss';
import Header from './Header/header';
import Plan from './Plan/plan';


function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
  <Header></Header>
  <Plan></Plan>
    </div>
  );
}

export default App;
