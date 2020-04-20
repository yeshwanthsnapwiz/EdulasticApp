import styled from 'styled-components';
import { Modal, Button,Row,Col,Input,DatePicker} from 'antd';

export const Modalwrap=styled(Modal)`
height:0px;
border-radius:20px;
.ant-modal-content{
border-radius:20px;
}
.ant-modal-body{
height:651px;
background:linear-gradient( white 40%, #024788 40%);
border-radius:5px;
@media screen and (max-width: 480px) {
height:650px;
}
}
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
export const Card=styled(Col)`
width: 477px;
height: 265px;
background: transparent linear-gradient(119deg, #096CC9 0%, #024788 100%) 0% 0% no-repeat padding-box;
border-radius: 20px;
opacity: 1;
display:flex;
flex-direction:column;
justify-content:center;
position: relative;
top:10px;
`;
export const Cardwrap=styled.div`
width:90%;
text-align:left;
align-self:center;
align-content:space-around;
flex-wrap:wrap;
`;

export const Edulogo=styled.img`
width: 105px;
height: 34px;
`;

export const Cardlogo=styled.img`
width:60px;
`;

export const DIV=styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-self:center;
position:relative;
top:-20px;
`;

export const Ul=styled(Row)`
width:70%;
display:flex;
justify-content:space-between;
font-family: 'Open Sans', sans-serif;
font-size:26px;
font-weight:bold;
letter-spacing: -1.3px;
color: #FFFFFF;
opacity: 1;
text-align:left;
li {
  list-style-type:none;
}
@media screen and (max-width: 480px) {
width:100%;
font-size:26px;
}
`;

export const INFO=styled.div`
width:100%;
display:flex;
justify-content:space-between;
position: relative;
top:10px;
h5{
text-align: left;
font-family: 'Open Sans', sans-serif;
font-size:12px;
letter-spacing: 0px;
color: #B1B3B7;
text-transform: uppercase;
opacity: 1;
}
h4{
font-family: 'Open Sans', sans-serif;
font-size:18px;
font-weight:bold;
letter-spacing: -0.9px;
color: #FFFFFF;
opacity: 1;
}


`;
export const Inputnumber=styled(Input)`
border:none;
height: 40px;
color: #6A737F;
font-family: 'Open Sans', sans-serif;
&::placeholder
{
font-family: 'Open Sans', sans-serif;
font-size:13px;
letter-spacing: 0.24px;
color: #6A737F;
opacity: 1;
}
&::-webkit-outer-spin-button,
::-webkit-inner-spin-button {
-webkit-appearance: none;
 margin: 0;
}
`;

export const DAtepicker=styled(DatePicker)`
height: 40px;
.ant-picker-input input{
text-align:center;
&::placeholder{
font-family: 'Open Sans', sans-serif;
font-size:13px;
letter-spacing: 0.24px;
color: #6A737F;
opacity: 1;
text-align:center;
}
}
`;

export const Form=styled(Col)`
width:100%;
height:200px;
label {
letter-spacing: 0px;
color: #FFFFFF;
text-transform: uppercase;
opacity: 1;
font-family: 'Open Sans', sans-serif;
font-size:10px;
font-weight:bold;
}
position: relative;
top:30px;
`;

export const Formgroup=styled(Row)`
position: relative;
top:20px;
`;

export const BUTTON=styled(Button)`
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

export const Paybutton=styled(Row)`
height:90px;
justify-content:center;
align-items:center;
position: relative;
top:20px;
`;
export const Selectbutton=styled(Button)`
width:185px;
height: 40px;
border: 1px solid #1AB395;
font-family: 'Open Sans', sans-serif;
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