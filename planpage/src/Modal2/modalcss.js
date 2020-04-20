import styled from 'styled-components';
import { Modal,Col,Button,Row} from 'antd';

export const Modalwrap=styled(Modal)`
height:0px;
border-radius:20px;
.ant-modal-content{
border-radius:5px;
}
.ant-modal-body{
height: 500px;
border-radius: 5px;
@media screen and (max-width: 480px) {
height:510px;
}
}
`;

export const Selectbutton=styled(Button)`
width: 222px;
height: 42px;
background: #1AB395 0% 0% no-repeat padding-box;
border-radius: 4px;
opacity: 1;
border:none;
font-family: 'Open Sans', sans-serif;
font-size:11px;
font-weight:400;
color: #FFFFFF;
&:hover{
    background:#05ad8c 0% 0% no-repeat padding-box;
    color: #FFFFFF;
}
`;

export const Content=styled(Row)`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
opacity: 1;
`;

export const Column=styled(Col)`
h5{
  color: #434B5D;
  font-family: 'Open Sans', sans-serif;
  font-size:22px;
  font-weight:bold;
  letter-spacing: -1.1px;
  line-height:2;
}
p{
  font-family: 'Open Sans', sans-serif;
  font-size:14px;
  color: #304050;
}
`;
export const Year=styled(Col)`
width: 100%;
height: 265px;
text-align:center;
align-items:center;
display:flex;
flex-direction:column;
justify-content:center;
background: transparent linear-gradient(119deg, #096CC9 0%, #024788 100%) 0% 0% no-repeat padding-box;
border-radius: 20px;
opacity: 1;
position:relative;
top:10px;
p {
height: 30px;
text-align: center;
font-family: 'Open Sans', sans-serif;
font-size:20px;
font-weight:bold;
letter-spacing: 4.4px;
color: #FFFFFF;
opacity: 1;
}
`;
export const Proceedbutton=styled(Button)`
width: 50%;
height: 42px;
background: #1AB395 0% 0% no-repeat padding-box;
border-radius: 4px;
opacity: 1;
letter-spacing: 0.2px;
color: #FFFFFF;
opacity: 1;
position:relative;
top:30px;
`;


