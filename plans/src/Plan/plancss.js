import styled from 'styled-components';
import { Row,Col,Button} from 'antd';

const Onhover=`
.content{
    background-color:#0000001A;
}
.button {
    background-color:#1AB395;
    color
    :#FFFFFF;
}
}
`;
const title=`
margin:auto;
height: 34px;
position: relative;
top:20px;
text-align: left;
font-family: 'Open Sans', sans-serif;
font-size:25px;
font-weight:bold;
letter-spacing: -1.25px;
opacity: 1;
width:73%;
`;

const transition=`
h5{
    color:#FFFFFF;
}
`;

export const Div=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`;

export const Sectionwrap=styled(Row)`
position: relative;
height:250px;
justify-content:center;
`;

export const Title=styled(Col)`
position: relative;
top:82px;
width:80%;
height:100px;
`;

export const H5=styled.h5`
text-align: left;
font-size:35px;
font-family: 'Open Sans', sans-serif;
font-weight:bold;
letter-spacing: -1.75px;
color: #434B5D;
opacity: 1;
`;

export const P=styled.p`
font-size:14px;
font-family: 'Open Sans', sans-serif;
text-align: left;
letter-spacing: 0px;
color: #6A737F;
opacity: 1;
`;

export const Plans=styled(Row)`
justify-content:center;
width:93%;
justify-content:space-evenly;
align-self:flex-end;
`;

export const Free=styled(Col)`
height:490px;

.header > h5 {
${title};
color: #5EB500;
}

&:hover{
.header{
 background-color:#5EB500;
${transition};
}
${Onhover};
}


`;
export const Trail=styled(Col)`
height:490px;

.header > h5 {
${title};
color: #434B5D;
}

&:hover{
.header{
 background-color:#434B5D;
 ${transition};
}
${Onhover};
}

`;

export const Enterprise=styled(Col)`
height:490px;

.header > h5 {
${title};
color: #FFA200;
}

&:hover{
.header{
background-color:#FFA200;
${transition};
}
${Onhover};
}

`;
export const Teacher=styled(Col)`
height:490px;

.header > h5 {
${title};
color: #4E95F3;
width:80%;
line-height:1;
position: relative;
top:25px;
}

&:hover{
.header{
background-color:#4E95F3;
${transition};
}
${Onhover};
}

`;

export const Header=styled.div`
border: 1px solid #DADAE4;
border-radius: 5px;
opacity: 1;
height: 90px;
width:100%;
transition:0.3s all;
`;

export const Contentsection=styled.div`
display:flex;
flex-direction:column;
align-items:center;
height:370px;
border-radius: 5px;
position: relative;
top:5px;
transition:0.3s all;
.price {
text-align: center;
font-size:33px;
color: #434B5D;
font-family: 'Open Sans', sans-serif;
font-weight:bold;
opacity: 1;
letter-spacing: -1.6px;
color: #434B5D;
}
`;

export const Content=styled.div`
width:100%;
height:370px;
display:flex;
flex-direction:column;
align-items:center;
position: relative;
top:50px;
p{
width:90%;
font-size:14px;
font-family: 'Open Sans', sans-serif;
list-style-type:none;
text-align:left;
letter-spacing: 0px;
color: #6A737F;
opacity: 1;
line-height:1.2;
}
`;

export const Selectbutton=styled(Button)`
width:85%;
height: 40px;
border: 1px solid #1AB395;
color: #1AB395;
border-radius: 4px;
opacity: 1;
transition:0.1s all;
position: relative;
bottom:20px;
&:hover{
background-color:#1AB395;
color:#FFFFFF;
}
`;

export const Trailheader=styled.div`
border: 1px solid #DADAE4;
border-radius: 5px;
opacity: 1;
height: 90px;
width:100%;
h5{
margin:auto;
width:70%;
height: 34px;
position: relative;
top:20px;
text-align: left;
font-family: 'Open Sans', sans-serif;
font-size:25px;
letter-spacing: -1.25px;
color: #5EB500;
opacity: 1;
}
`;