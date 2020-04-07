import React from 'react'
import {H1,P,IMG} from './sectioncss'
import '../App.css';
import {Button} from 'antd';
import { Row, Col } from 'antd';
import Image from '../Images/background1.png';

export const Section = ({className}) => {
    return (
       
       
           
          <Row  justify="middle" className="ant-layout-content ">

          <Col  align="middle" span={24} md={12}>
          <H1>Practice.<br></br> Assess.Improve.</H1>
          <P><span style={{fontWeight:'bold'}}>SparkEd
          </span> is a learning companion built on a simple idea: <br></br> students learning best by doing</P>
          <Button  className="getstarted">GET STARTED</Button>
          </Col>

          <Col span={24} md={12}>
          <IMG src={Image}></IMG>
          </Col>
          
         </Row>
         
      
       
    )
}

export default Section;
