import React from 'react'
import {Headerwrap,LOGO,PROFILEPIC,PROFILE,DROPDOWNICON,A,CAPTION,NAME,PROFESSION,MENU} from './headercss';
import logo from '../images/logo.svg';
import profile from '../images/img-profile.png';
import dropdown from '../images/dropdown-icon.svg';
import { Col} from 'antd';
const menu = (
  <MENU >
    <MENU.Item >
      <a href="http://www.alipay.com/">1st menu item</a>
    </MENU.Item>
    <MENU.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </MENU.Item>
    <MENU.Divider />
    <MENU.Item key="3">3rd menu item</MENU.Item>
  </MENU>
);
export const Header = ({className}) => {
    return (

    <Headerwrap>
      
     <Col >
      <LOGO src={logo}/>
     </Col>

     <Col >
       <PROFILE overlay={menu}  >
         <A >
         <PROFILEPIC src={profile}/>
         <CAPTION>
         <NAME>Rob Perterson</NAME>
         <PROFESSION>TEACHER</PROFESSION>
         </CAPTION>
         <DROPDOWNICON className="icon" src={dropdown}/>
         </A>
       </PROFILE>
     </Col>
    </Headerwrap>

    )
}
export default Header;
