import React from 'react'
import { Dropdown,SPAN,UL,DROPDOWNICON,A,Li,DIV,Div,AA,ROW} from './sectioncss'
import '../App.css';
import { Col,Typography} from 'antd';
import Dropicon from '../Images/drop.svg';
const { Title } = Typography;

export const Section = ({className}) => {
    return (
       
       
           
          <ROW  justify="center" align="middle" className="ant-layout-content ">

          <Col  align="middle" span={24} md={12}>

           <DIV>

           <Title className="title" level={2}>State</Title>
           <p>choose state</p>

          <Dropdown>
          <SPAN>Alabama</SPAN><DROPDOWNICON className="icon" src={Dropicon}></DROPDOWNICON>
          <UL className="dropdown">
          <Li> <A>LOREM IPSUM</A></Li>
          <Li> <A>LOREM IPSUM</A></Li>
          <Li> <A>LOREM IPSUM</A></Li>
          <Li> <A>LOREM IPSUM</A></Li>
          <Li> <A>LOREM IPSUM</A></Li>
          <Li> <A>LOREM IPSUM</A></Li>
          <Li> <A>LOREM IPSUM</A></Li>
          <Li> <A>LOREM IPSUM</A></Li>
          <Li> <A>LOREM IPSUM</A></Li>
          </UL>
          </Dropdown>

          <Title className="text" level={2}>text aligned</Title>

           <Div>
            <AA href="#">ILLUSTRATIVE MATHEMATICS</AA>
            <AA href="#">EURKA MATH/ENGAGENY</AA>
            </Div>

          </DIV>
          </Col>
          <Col className="bg" span={24} md={12}>
    
          </Col>
          
         </ROW>
         
      
       
    )
}

export default Section;
