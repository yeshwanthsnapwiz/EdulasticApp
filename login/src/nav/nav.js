import React from 'react'
import 'antd/dist/antd.css';
import Logo from '../Images/logo.svg';
import {LOGO,LI,SIGNUP,Label,COLLAPSEMENU,Checkbox,Ul,UL }from './navcss';
import {Button, Row,Col} from 'antd';


export const Nav = ({className}) => {
    return (
<div>

<Row className="menu">

   <Col span={11} md={7}  >
   <LOGO src={Logo} ></LOGO>
   </Col> 

   <Col span={0} md={9}>
    <Ul>
    <LI><a href="#">COURSES</a></LI>
    <LI><a href="#">STUDENTS</a></LI>
    <LI><a href="#">TEACHERS</a></LI>
    <LI><a href="#">PRICING</a></LI>
    </Ul>
   </Col>

   <Col span={8} md={7}>

    <UL>
    <SIGNUP className="login"><a href="#">Don't have an account yet?</a></SIGNUP>
    <Button className="signup">SIGN UP</Button>
    </UL>
   </Col>

   <Col span={5} md={2}>
    <Label htmlFor="toggle" className="barsa" >         
    <li className="bar1"></li>
    <li className="bar2"></li>
    < li className="bar3"></li>
    </Label>
  </Col>

   </Row>

    <div>
  <Checkbox type="checkbox" className="toggle" id="toggle" />
  <COLLAPSEMENU className="menu-collapse">
    <li><a href="#">COURSES</a></li>
    <li><a href="#">STUDENTS</a></li>
    <li><a href="#">TEACHERS</a></li>
    <li><a href="#">PRICING</a></li>
    <li><a href="#">LOGIN</a></li>
  </COLLAPSEMENU>
    </div>

  </div>
   
 
     
    )
}
export default Nav;
