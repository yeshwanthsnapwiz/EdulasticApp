import {createGlobalStyle} from 'styled-components';
import 'antd/dist/antd.css';

export const GlobalStyle = createGlobalStyle`
  html,body{
    margin:0;
    padding:0;
    overflow-x:hidden;
    width:100%;
    height:900px;
   }

  *{
    box-sizing:border-box;
  
   }
   
   .ant-select{
    font-family: 'Open Sans', sans-serif;
    font-size:16px;
    font-weight:400;
   }

   .ant-select-selector{
    border-bottom:1px solid grey;
   }


.ant-select-multiple .ant-select-selector{
border:none;
outline:none;
box-shadow:none;
}

.ant-select-dropdown{
  background-color:"red";
}
.ant-select-selection-placeholder{
 
}

`; 