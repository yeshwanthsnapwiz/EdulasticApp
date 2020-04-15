import React from 'react';
import Nav from './nav/nav';
import {PAGEWRAP} from './background';
import {GlobalStyle} from './Appcss'
import Section from './section/section';


function App() {
  return (
    <PAGEWRAP>
    <GlobalStyle></GlobalStyle>  
    <Nav></Nav>
    <Section></Section>
    </PAGEWRAP>
  );
}

export default App;
