import React from 'react'
import {P,SIGNUP,A,DIV,SIGNIN,Li,PRIVACY,FORM,Label,Button} from './sectioncss'
import { Row, Col,Input, Typography } from 'antd';
import { GoogleOutlined,WindowsOutlined,LockOutlined,NumberOutlined,UserOutlined,MailOutlined } from '@ant-design/icons';
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
      <Col align="middle" className="form" flex="420px">
          
         {/*sign-in and sign-up block*/}

         <SIGNIN>
          
         <Title className="h2" level={2}>sign up </Title>
         <Li><GoogleOutlined style={{color:"#e64e2e"}}/> < a href="www.google.com">SIGN IN WITH GOOGLE</a></Li>
         <Li><WindowsOutlined style={{color:"#e8592e"}} /> < a href="www.google.com">SIGN IN WITH OFFICE 365</a></Li>
         <PRIVACY> <LockOutlined style={{fontSize:"20px"}}/><p>Edulastic doesn't share your information with third parties <br></br> your data will be completely private and secure.</p></PRIVACY>

         </SIGNIN>

         <FORM>

         <Title className="h2" level={2}>or create your account </Title>
         
         <Label htmlFor="classcode">class code <span style={{ color:"rgb(0,0,0,0.7)",textTransform:"capitalize"}}>(Provided by your Teacher)</span></Label><br></br>
         <Input  className="input" align="middle" type="text" placeholder="Insert your class code" name="classcode" style={{ color:'rgba(0,0,0,.45)'}} prefix={<NumberOutlined style={{color:"gray"}}/>} /><br></br>
         <Label htmlFor="name">Name</Label><br></br>
         <Input className="input" align="middle" type="text" placeholder="Insert your name" name="name" prefix={<UserOutlined   />} /><br></br>
         <Label htmlFor="input">user / email</Label><br></br>
         <Input className="input" align="middle" type="email" placeholder="Insert your email" name="name" prefix={<MailOutlined style={{color:"gray"}} />} />
         <Button className="signup">SIGN UP AS STUDENT</Button>

         </FORM>

      </Col>
      </Row>

    </Col>
    </Row>
  </div>
       
    )
}

export default Section;
