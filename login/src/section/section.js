import React from 'react'
import {BUTTON,Background,SIGNIN,Li,FORM,Label,IMG,SIGNINP,ForgotPassword,Checkbox,CustomInput,InputGroup,Hashtag} from './sectioncss';
import  Logo from '../Images/google-btn.svg';
import  Logoa from '../Images/office.svg';
import  Lock from '../Images/lock.svg';
import  PREFIXMAil from '../Images/mail.png';
import { Row, Col, Typography } from 'antd';
const { Title } = Typography;





export const Section = ({className}) => {
    return (

       <div>

    <Row  justify="space-between" align="middle"  className="ant-layout-content ">
  

    <Col align="middle"  span={24} md={24}>

      <Row justify="space-around" align="middle">
      <Col align="middle" className="form" flex="454px">
          
         {/*sign-in and sign-up block*/}

         <SIGNIN>
          
         <Title className="h2" level={2}>Login </Title>
         <Li as="a"><IMG src={Logo}></IMG><SIGNINP>SIGN IN WITH GOOGLE</SIGNINP></Li>
         <Li as="a"><IMG src={Logoa}></IMG>< SIGNINP>SIGN IN WITH OFFICE 365</SIGNINP></Li>
         <Li as="a"><span style={{color:"#436CF2",fontSize:"23px",fontWeight:"bold"}}>C</span>< SIGNINP>SIGN IN WITH CLEVER</SIGNINP></Li>

         </SIGNIN>

         <FORM>

         <Title className="h2" level={2}>Or you can always... </Title>

        
         <InputGroup>  <Label htmlFor="input">username / email</Label><br></br>
         <Hashtag src={PREFIXMAil} style={{top:"28px",left:"12px"}}></Hashtag><CustomInput className="input" align="middle" type="email" placeholder="Insert your username or email" name="name" /></InputGroup>
         <InputGroup> <Label htmlFor="classcode">PASSWORD</Label><br></br>
         <Hashtag src={Lock} style={{top:"30px",left:"10px"}}></Hashtag><CustomInput  className="input" align="middle" type="password" placeholder="Insert your Password" name="classcode"  /></InputGroup>
         <ForgotPassword>
        <label className="label">
        <Checkbox type="checkbox"  /> 
        <span className="checkmark"></span>
        </label>
        <span className ="rememberme">Remember me</span>
        <span><a href="#">FORGOT PASSWORD?</a></span>
         </ForgotPassword>

         <BUTTON>SIGN IN</BUTTON>
         </FORM>
      </Col>
      </Row>
     <Background>
     </Background>
    </Col>
    </Row>
  </div>
       
    )
}

export default Section;
