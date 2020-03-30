import React from 'react';
import Nav from './nav/nav';
import {GlobalStyle} from './Appcss'
import Section from './section/section';


function App() {
  return (
    <div>
    <GlobalStyle></GlobalStyle>  
    <Nav></Nav>
  <Section></Section>
  </div>
  );
}

export default App;
