import styled from 'styled-components';
import {Row,Col} from 'antd';

export const Button=styled.div`
width:120px;
height:35px;
background-color:white;
border:none;
cursor: pointer;
color:#4bb495;
border-radius:2px; 
position:relative;
top:220px;
line-height: 35px;
font-size:0.8em;
font-weight:550;
  
&:hover{
    opacity:0.8;
}
`;


export const Background =styled.div`
width:100%;
height:200px;
background-color:#014788;
border-radius:3px;
margin-top:-80px;
@media screen and (max-width: 780px) {
height:650px;
}

`;

export const ROW=styled(Row)`
width:60%;
justify-content: space-between;
height:400px;
position:relative;
top:30px;
@media screen and (max-width: 780px) 
{ width:80%;
    justify-content: center;
    .student,.teacher,.admin {
    margin-top: 10px;
    }
    }

`;

export const COL=styled(Col)`
display:flex;
flex-direction:column;
min-height:200px;
justify-content:center;
h1{
text-align:center;
font-size:55px;
color: #434B5D;
font-weight:bold;
line-height:1;
font-family: 'Open Sans', sans-serif;
letter-spacing: -2.75px;
position:relative;
top:30px;
}
p{
text-align:center;
color: #6A737F;
font-size:16px;
line-height:2;
font-family: 'Open Sans', sans-serif;
position:relative;
top:30px;
}

`;


export const ROw=styled(Row)`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
`;
export const TITLE=styled.h2`
 text-align:center;
    font-size:18px;
    color:#434b5d;
    line-height:1;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: -0.9px;
    position:relative;
    top:30px;
`;




