import styled from 'styled-components';
import { Row,Dropdown} from 'antd';
import { Menu} from 'antd';


export const Headerwrap =styled(Row)`
width:100%;
height:64px;
background: #FFFFFF ;
border-bottom: 1px solid #DADAE4;
opacity:1;
justify-content:space-between;
align-items:center;
`;


export const A=styled.a`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
position: relative;
right:40px;
cursor: pointer;
&:hover > .icon{
transform:rotate(180deg);
}

`;
export const LOGO = styled.img`
position:relative;
left:34px;
width:131px;
height:43px;
@media screen and (max-width: 480px) {
width:100px;
left:20px;
}
`;

export const PROFILEPIC = styled.img`
width: 40px;
height: 40px;
position: relative;
right:10px;
`;

export const PROFILE =styled(Dropdown)`
position: relative;
height:45px;
`;
export const DROPDOWNICON =styled.img`
position: relative;
left:15px;
transition:0.2s ease;
`;

export const CAPTION=styled.div`
position: relative;
top:5px;
`;

export const NAME=styled.h5`
text-align: left;
font-family: 'Open Sans', sans-serif;
font-size:12px;
font-weight:400;
letter-spacing: 0px;
color: #434B5D;
opacity: 1;
align-self:center;
line-height:1;
`;

export const PROFESSION=styled.h5`
text-align: left;
font-size:10px;
font-family: 'Open Sans', sans-serif;
font-weight:400;
letter-spacing: 0.45px;
color: #878E9B;
text-transform: uppercase;
align-self:Center;
opacity: 1;
line-height:1;
`;

export const MENU=styled(Menu)`
position:relative;
width:170px;
min-width:170px;
`;