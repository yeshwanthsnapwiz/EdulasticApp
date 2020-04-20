import React from 'react';
import 'antd/dist/antd.css';
import {GlobalStyle} from './Appcss';
import Header from './Header/header';
import Section from './section/section';



function App(){
  return (
    <div>
  <GlobalStyle></GlobalStyle>
  <Header></Header>
  <Section></Section>
    </div>
  );
}


export default App;
