import React from 'react'
import {P,BUTTON,SIGNUP,A,DIV,SIGNIN,Li,PRIVACY,FORM,Label,IMG,SIGNINP,LOCKIMG,CustomInput,InputGroup,Hashtag} from './sectioncss';
import  Logo from '../Images/google-btn.svg';
import  Logoa from '../Images/office.svg';
import  Lock from '../Images/lock.svg';
import  PREFIXTAG from '../Images/hash';
import  PREFIXUSER from '../Images/roundeduser.svg';
import  PREFIXMAil from '../Images/mail.png';
import { Row, Col, Typography } from 'antd';
const { Title } = Typography;





export const Section = ({className}) => {
    return (

       <div>

    <Row  justify="space-between" align="middle"  className="ant-layout-content ">
    <Col align="middle" span={24}  md={12}>

       {/*for students*/}

         <DIV>
         <Title className="h5" level={5}>for students </Title>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,consectetur adipiscing elit.</P>

          <SIGNUP >
          <A href="#">SIGN UP AS TEACHER  >></A>
          <A href="#">SIGN UP AS ADMINISTRATOR  >></A>
          </SIGNUP>
         </DIV>

    </Col>

    <Col align="middle"  span={24} md={12}>

      <Row justify="space-around" align="middle">
      <Col align="middle" className="form" flex="454px">
          
         {/*sign-in and sign-up block*/}

         <SIGNIN>
          
         <Title className="h2" level={2}>Sign up </Title>
         <Li as="a"><IMG src={Logo}></IMG><SIGNINP>SIGN IN WITH GOOGLE</SIGNINP></Li>
         <Li as="a"><IMG src={Logoa}></IMG>< SIGNINP>SIGN IN WITH OFFICE 365</SIGNINP></Li>
         <PRIVACY> <LOCKIMG src={Lock}></LOCKIMG > <p>Edulastic doesn't share your information with third parties <br></br> your data will be completely private and secure.</p></PRIVACY>

         </SIGNIN>

         <FORM>

         <Title className="h2" level={2}>Or create your account </Title>
         
         <InputGroup> <Label htmlFor="classcode">class code <span style={{textTransform:"capitalize"}}> (Provided by your Teacher)</span></Label><br></br>
         <Hashtag src={PREFIXTAG} style={{top:"30px",left:"10px"}}></Hashtag><CustomInput  className="input" align="middle" type="text" placeholder="Insert your class code" name="classcode"  /></InputGroup>
        <InputGroup>   <Label htmlFor="name">Name</Label><br></br>
        <Hashtag src={PREFIXUSER} style={{top:"32px",left:"8px"}}></Hashtag> <CustomInput className="input" align="middle" type="text" placeholder="Insert your name" name="name"  /></InputGroup>
         <InputGroup>  <Label htmlFor="input">username / email</Label><br></br>
         <Hashtag src={PREFIXMAil} style={{top:"28px",left:"12px"}}></Hashtag><CustomInput className="input" align="middle" type="email" placeholder="Insert your username or email" name="name" /></InputGroup>
         <BUTTON>SIGN UP AS STUDENT</BUTTON>
         </FORM>

      </Col>
      </Row>

    </Col>
    </Row>
  </div>
       
    )
}

export default Section;
