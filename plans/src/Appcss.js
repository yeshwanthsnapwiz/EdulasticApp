import {createGlobalStyle} from 'styled-components';
import 'antd/dist/antd.css';

export const GlobalStyle = createGlobalStyle`

html,body{
  margin:0;
  padding:0;
  overflow-x:hidden;
  width:100%;
}

* {
   box-sizing: border-box;
 }
 `;