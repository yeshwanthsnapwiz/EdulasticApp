import styled from 'styled-components';
import {Input ,Button} from 'antd';

export const DIV =styled.div` 
  display:flex;
  justify-content:center;
  width:70%;
  text-align:left;
  flex-direction:column;
  .h5{
  color:#434B5D;
  letter-spacing:-3px;
  line-height:0.8;
  font-family: 'Open Sans', sans-serif;
  font-size:60px;
  font-weight:bold;
  }
`;


export const P =styled.p` 
  color:grey;
  color: #6A737F;
  font-size:14px;
  letter-spacing: 0px;
  line-height:2;
  color: #6A737F;
`;


export const SIGNUP =styled.div` 
  display:flex;
  width:80%;
  justify-content:space-between;
  position: relative;
  top:4px;
  @media screen and (max-width: 780px) {
  flex-direction:column;
  }
`;

export const IMG=styled.img`
  width: 17px;
  height: 20px;
`;


export const A =styled.a` 
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.2px;
  color: #1AB395;
  font-weight:bold;
  font-size:11px;
  &:hover{
  color:#4bb495;
  text-decoration:underline;
  }
`;

export const SIGNIN =styled.div` 
  justify-content:center;
  height: 246px;
  background: #024788 0% 0% no-repeat padding-box;
  border-radius: 10px 10px 0px 0px;
  opacity: 1;
  .h2{
  position: relative;
  top:20px;
  font-family: 'Open Sans', sans-serif;
  font-weight:bold;
  font-size:26px;
  letter-spacing: -1.3px;
  color: #FFFFFF;
  opacity: 1;
}
`;

export const Li =styled.li` 
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:90%;
  height: 40px;
  list-style-type:none;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  position: relative;
  top:20px;
  margin-bottom:8px;
  .office{
  width: 17px;
  height: 20px;
  background: #E64A19 0% 0% no-repeat padding-box;
  opacity: 1;
}
`;

export const SIGNINP=styled.span`
  width:80%;
  position: relative;
  right:17px;
  font-family: 'Open Sans', sans-serif;
  font-weight:bold;
  font-size:11px;
  letter-spacing: 0.2px;
  color: #434B5D;
  opacity: 1;
`;


export const PRIVACY =styled.li` 
  display:flex;
  justify-content:space-around;
  width:80%;
  height: 34px;
  position: relative;
  top:35px;
  p{
  width:80%;
  text-align: left;
  font-family: 'Open Sans', sans-serif;
  font-weight:bold;
  font-size:10px;
  letter-spacing: 0px;
  color: #FFFFFFA3;
  opacity: 1
  }
`;


export const LOCKIMG=styled.img`

`;

export const FORM=styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  align-self:center;
  text-align:justify;
  height:400px;
  .h2{
  text-align: center;
  font-size:16px;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.3px;
  color: #2F4151;
  position: relative;
  top:20px;
}
`;

export const Label=styled.label`
  text-transform:uppercase;
  font-family: 'Open Sans', sans-serif;
  font-size:12px;
  letter-spacing: 0px;
  color: #434B5D;
  opacity: 1;
  position: relative;
  top:15px;
`;

export const InputGroup=styled.div`
  width:80%;
  align-self:center;
  position: relative;
  top:25px;
`;

export const Hashtag=styled.img`
  position: relative;
  z-index:200;
  cursor:pointer;
`;

export const CustomInput =styled(Input)`
  height:40px;
  outline:none;
  padding-left:35px;
  font-family: 'Open Sans', sans-serif;
  background: #F8F8F8 0% 0% no-repeat padding-box;
  &::placeholder{
  font-size:12px;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.24px;
  color: #6A737F;
  }
  &:hover{
  border:1px solid #B9B9B9;
  }
  &:focus{
  border:1px solid #1AB395;
  box-shadow:none;
  } 
`;

export const Group =styled.div`
  width:80%;
  height:40px;
  border:1px solid #1AB395;
  position: relative;
  top:20px;
`;


export const BUTTON = styled(Button)`
  width:81%;
  height:45px;
  text-transform:uppercase;
  color:white;
  background: #1AB395 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  position: relative;
  top:50px;
  left:1px;
  align-self:center;
  font-family: 'Open Sans', sans-serif;
  &:hover{
  background: #1AB395 0% 0% no-repeat padding-box;
  color:white;
  border:none;
  }
`;



