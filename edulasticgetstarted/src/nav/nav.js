import React from 'react'
import 'antd/dist/antd.css';
import Logo from '../Images/logo.jpg'
import {LOGO,MENU,LI,IMG,LOGIN,SIGNUP,NAV,Label,A,COLLAPSEMENU,SIGNUPB,Checkbox,NAVWRAP }from './navcss';
import { Layout,Button} from 'antd';
const { Header } = Layout;

export const Nav = ({className}) => {
    return (
 
<NAVWRAP>
   <Header>

  
   <IMG>
   <LOGO src={Logo} ></LOGO>
   </IMG>
   
   <NAV>

   <MENU>
    <LI><a href="#">COURSES</a></LI>
    <LI><a href="#">STUDENTS</a></LI>
    <LI><a href="#">TEACHERS</a></LI>
    <LI><a href="#">PRICING</a></LI>
   </MENU>

   <LOGIN>
   <SIGNUP className="login"><a href="#">LOGIN</a></SIGNUP>
   <Button className="signup">SIGNUP</Button>
   </LOGIN>

   <Label for="toggle" className="barsa" >         
         <li className="bar1"></li>
         <li className="bar2"></li>
        < li className="bar3"></li>
    </Label> 
   </NAV>
  

   </Header>
   
   <Checkbox type="checkbox" className="toggle" id="toggle" />
 <COLLAPSEMENU className="collapsemenu">
    <A>COURSES</A>
    <A> STUDENTS</A>
    <A>TEACHERS</A>
    <A>PRICING</A>

    <SIGNUPB className="login"><a href="#">LOGIN</a></SIGNUPB>
 </COLLAPSEMENU>


 </NAVWRAP>
   
 
     
    )
}
export default Nav;
