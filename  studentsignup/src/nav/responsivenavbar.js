import React from 'react'
import { Drawer } from 'antd';
import {Label,COLLAPSEMENU ,Signup} from './navcss';

class Responsivenavbar extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Label htmlFor="toggle" className="barsa"onClick={this.showDrawer} >         
    <li className="bar1"></li>
    <li className="bar2"></li>
    < li className="bar3"></li>
    </Label>
        <Drawer
          placement="left"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <COLLAPSEMENU className="menu-collapse">

          {/* collapsive navbar menu*/}

         <Signup className="signup">SIGN UP</Signup>
         <li><a href="#">COURSES</a></li>
         <li><a href="#">STUDENTS</a></li>
         <li><a href="#">TEACHERS</a></li>
         <li><a href="#">PRICING</a></li>
         <li><a href="#">LOGIN</a></li>
        </COLLAPSEMENU>
        </Drawer>
      </div>
    );
  }
}
export default Responsivenavbar;

