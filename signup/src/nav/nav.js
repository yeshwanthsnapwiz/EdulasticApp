import React from 'react'
import 'antd/dist/antd.css';
import Logo from '../Images/logo.jpg'
import {LOGO,MENU,LI,IMG,LOGIN,SIGNUP,NAV,Label,A,COLLAPSEMENU,SIGNUPB,Checkbox,NAVWRAP }from './navcss';
import { Layout,Button} from 'antd';
const { Header } = Layout;

export const Nav = ({className}) => {
    return (
 
<NAVWRAP>

   {/*Navbar*/}

    <Header>

   {/*LOGO*/}

    <IMG>

    <LOGO src={Logo} ></LOGO>

    </IMG>
   
    <NAV>

    {/*Menu*/}

    <MENU>

    <LI><a href="#">COURSES</a></LI>
    <LI><a href="#">STUDENTS</a></LI>
    <LI><a href="#">TEACHERS</a></LI>
    <LI><a href="#">PRICING</a></LI>

    </MENU>

   <LOGIN>

   <SIGNUP className="login"><a href="#">Already have an account?</a></SIGNUP>
   <Button className="signup">LOGIN</Button>

   </LOGIN>

     {/*toggle icon*/}

   <Label for="toggle" className="barsa" >         
    <li className="bar1"></li>
    <li className="bar2"></li>
    < li className="bar3"></li>
   </Label> 

   </NAV>
  

   </Header>
   
   {/*collpasemenu*/}
   
   <Checkbox type="checkbox" className="toggle" id="toggle" />

   <COLLAPSEMENU className="collapsemenu">

    <A>COURSES</A>
    <A> STUDENTS</A>
    <A>TEACHERS</A>
    <A>PRICING</A>

   </COLLAPSEMENU>


</NAVWRAP>
   
 
     
    )
}
export default Nav;
