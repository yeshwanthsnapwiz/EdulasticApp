import React from 'react'
import {H1,P,DIV,BUTTON} from './sectioncss'
import { Row, Col } from 'antd';
import '../App.css';



export const Section = ({className}) => {
    return (
       
   
      <Row align="middle" className="ant-layout-content ">
        
       <Col align="middle"  span={24} md={12} >
       <DIV>
          <H1>Practice.<br></br>Assess.Improve.</H1>
          <P><span style={{fontWeight:'bold'}}>SparkEd
          </span> is a learning companion built on a simple idea: <br></br> students learning best by doing</P>
           <BUTTON>GET STARTED</BUTTON>
          </DIV>
        </Col>

        <Col className="bg" span={24} md={12}>
        
        </Col>

      </Row>
    
       
    )
}

export default Section;
