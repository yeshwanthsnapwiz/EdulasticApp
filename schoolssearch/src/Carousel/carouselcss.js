import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Row,Col, Button} from "antd";
import { LeftOutlined , RightOutlined } from '@ant-design/icons';



export const Div=styled(Row)`
margin:auto;
width:80%;
height:200px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;


h5{
text-align: center;
font-family: 'Open Sans', sans-serif;
font-weight:bold;
font-size:18px;
letter-spacing: -0.9px;
color: #434B5D;
opacity: 1;
line-height:1;
}
`;

export const  Carouselwrap=styled(Col)`
display:flex;
width:100%;
align-items:center;
height:80px;
`;

export const Carouselcontent=styled.div`
height:100px;
display:flex;
h3{
  font-family: 'Open Sans', sans-serif;
  font-weight:600;
  font-size:12px;
  letter-spacing: 0px;
  color: #434B5D;
  opacity: 1;
}

`;

export const Img=styled.img`
margin:auto;
`;
export const Noprofile =styled.div `
margin:auto;
width: 40px;
height: 40px;
display:flex;
justify-content:center;
align-items:center;
background-image:url(${props=>props.img});
background-repeat:no-repeat;
font-family: 'Open Sans', sans-serif;
font-weight:600;
font-size:14px;
color: #FFFFFF;

`;
export const Previous=styled(LeftOutlined)`
color:#1AB395;
position: relative;
top:-10px;
`;
export const Next=styled(RightOutlined)`
color:#1AB395;
position: relative;
top:-10px;
`;
export const Proceed=styled(Button)`
width:30%;
letter-spacing: 0.22px;
font-family: 'Open Sans', sans-serif;
font-weight:600;
font-size:12px;
color: #1AB395;
border: 1px solid #1AB395;
border-radius: 4px;
opacity: 1;
align-self:center;
&:hover{
    background-color:#1AB395;
    color:#fff;
}
`;