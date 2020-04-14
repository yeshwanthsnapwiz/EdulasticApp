import {createGlobalStyle} from 'styled-components';
import 'antd/dist/antd.css';

export const GlobalStyle = createGlobalStyle`
  
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



.ant-select-selection-placeholder{
 color:black;
}
.ant-select-item{

  &:hover{
    background-color:#1AB395;
  }
}
element.style {
    height: 256px;
    overflow-y: hidden;
    overflow-anchor: none;
}
.ant-select-dropdown {
  overflow-y:scroll;
  outline-style: solid;
outline-color:white;
outline-width: 8px;
height:200px;
::-webkit-scrollbar {
width: 5px;
height:5px;
border-radius:10px;
position: relative;
top:20px;
right:100px;
}

/* Track */
::-webkit-scrollbar-track {
background: #f1f1f1; 
border-radius:10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
background: #E3E3E3; 
border-radius:20px;
width: 5px;
height:5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
background: #E3E3E3; 
}
}

`; 