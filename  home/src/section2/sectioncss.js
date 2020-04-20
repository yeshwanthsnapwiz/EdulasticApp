import styled from 'styled-components';
import {Button} from 'antd';

export const DIV= styled.div`
width:70%;
text-align:left;
@media only screen and (max-width: 780px) {
text-align:center;
}
`;


export const H1 =styled.h1`
font-size:40px;
font-family: 'Open Sans', sans-serif;
font-weight:bold;
letter-spacing: -3px;
line-height:1;
color: #434B5D;
opacity: 1;
`;


export const P =styled.p`
   color:#6A737F;
`;

export const BUTTON =styled(Button)`
   width:130px;
    height:40px;
    color:white;
    border:none;
    background-color:#1AB395;
&:hover{
    background-color:#1AB395;
    color:white;
    opacity:0.8; 
}
`;

