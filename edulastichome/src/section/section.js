import React from 'react'
import {H1,P,DIV} from './sectioncss'
import '../App.css';
import {Button} from 'antd';
import { Row, Col } from 'antd';


export const Section = ({className}) => {
    return (
       
       
           
          <Row  justify="center" align='middle' className="ant-layout-content ">
          <Col  align="middle" span={24} md={12}>
          <DIV>
          <H1>Practice.<br></br>Assess.Improve.</H1>
          <P><span style={{fontWeight:'bold'}}>SparkEd
          </span> is a learning companion built on a simple idea: <br></br> students learning best by doing</P>
          <Button  className="getstarted">GET STARTED</Button>
          </DIV>
          </Col>

          <Col className="bg" span={24} md={12}>
      
          </Col>
          
         </Row>
         
      
       
    )
}

export default Section;
