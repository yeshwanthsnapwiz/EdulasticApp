import {createGlobalStyle} from 'styled-components';
import 'antd/dist/antd.css';

export const GlobalStyle = createGlobalStyle`

*{
box-sizing:border-box;
}

html,body{
margin:0;
padding:0;
overflow-x:hidden;
width:100%;
}
.ant-select{
width:100%;
font-family: 'Open Sans', sans-serif;
font-size:16px;
font-weight:400;
border:none;
&:focus-within{
box-shadow:none;
}
  }

.ant-select-selector{
&:focus-within{
box-shadow:none;
}
border-bottom:1px solid grey;
}

.ant-select-multiple .ant-select-selector{
border:none;
outline:none;
box-shadow:none;
&:focus-within{
box-shadow:none;
}
}



.ant-select-selection-placeholder{
color:black;
}
.ant-select-item{
height:50px;
&:hover{
color:white;
background-color:#1AB395;
}
}

.ant-select-dropdown {
width:100%;
outline-style: solid;
outline-color:white;
outline-width: 8px;
height:200px;
}

.ant-select-dropdown div{
&:nth-child(2){
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
}
.carousel {
     display:flex;
     align-items:center;
     justify-content:center;
     
 }
 .ant-carousel{
   width:100%;
   text-align:center;
 }
 .ant-carousel .slick-slide {
  height:80px;
  overflow: hidden;

}


.ant-carousel .slick-slide {
  width:100%;
  display:flex;
  flex-direction:column;
  text-align:center;
  justify-content:center;
}

`; 