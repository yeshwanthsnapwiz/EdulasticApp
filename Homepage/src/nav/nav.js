import React from 'react'
import 'antd/dist/antd.css';
import Logo from '../Images/logo.svg';
import {LOGO,LI,Ul,UL,Signup,Login  }from './navcss';
import {Row,Col} from 'antd';
import Responsivenavbar from './responsivenavbar'
import '../App.css'


export const Nav = ({className}) => {
    return (
<div>

<Row>

   {/*Logo*/}

   <Col span={20} md={7}  >
    <LOGO src={Logo} ></LOGO>
   </Col> 

    {/*Menu*/}

   <Col span={0} md={11}>
    <Ul>
    <LI><a href="#">COURSES</a></LI>
    <LI><a href="#">STUDENTS</a></LI>
    <LI><a href="#">TEACHERS</a></LI>
    <LI><a href="#">PRICING</a></LI>
    </Ul>
   </Col>

    {/*Login /signup*/}

   <Col span={0} md={5}>
    <UL>
    <Login className="login"><a href="#">LOGIN</a></Login>
    <Signup className="signup">SIGN UP</Signup>
    </UL>
   </Col>

    {/*Responsive navbar*/}

   <Col span={2} md={1}>
   <Responsivenavbar></Responsivenavbar>
   </Col>

   </Row>


  </div>
   
 
     
    )
}
export default Nav;
