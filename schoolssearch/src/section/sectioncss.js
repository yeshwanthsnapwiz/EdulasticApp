import styled from 'styled-components';
import { Row,Col } from 'antd';

export const SECTIONWRAP=styled(Row)`
height:840px; 
justify-content:center;
@media only screen and (max-width: 780px) {
height:600px;
}
`;

export const COL=styled(Col)`
display:flex;
justify-content:center;
`;

export const DIV=styled.div`
width:80%;
height:250px;
position: relative;
display:flex;
flex-direction:column;
justify-content:center;
align-self:center;
h5{
text-align: left;
font-family: 'Open Sans', sans-serif;
font-size:45px;
font-weight:400;
letter-spacing: -3px;
color: #434B5D;
opacity: 1;
line-height:1;
}
p{
font-family: 'Open Sans', sans-serif;
letter-spacing: 0px;
color: #6A737F;
opacity: 1;
}
h4{
text-align: left;
font-family: 'Open Sans', sans-serif;
font-size:11px;
font-weight:400;
letter-spacing: 0.2px;
color: #434B5D;
text-transform: uppercase;
opacity: 1;
}

`;
export const ICON=styled.img`
align-self:flex-start;
`;

export const Div=styled.div`
width:65%;
display:flex;
justify-content:space-between;
position:relative;
top:50px;
text-align:left;
@media only screen and (max-width: 992px) {
width:100%;
flex-direction:column;
}
`;

export const A =styled.a`
width:50%;
text-decoration:none;
color:"#1AB395";
font-family: 'Open Sans', sans-serif;
font-size:11px;
font-weight:400;
@media only screen and (max-width: 780px) {
width:100%;  
}
`;
