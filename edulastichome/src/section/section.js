import React from 'react'
import {IMG,H1,P} from './sectioncss'
import { Layout ,Button} from 'antd';
import { Row, Col } from 'antd';
import Image from '../Images/background1.png';
const {Content } = Layout;

export const Section = ({className}) => {
    return (
       
        <Content>
           
          <Row  align="middle"  className="ant-layout-content ">
          <Col className="captioncol" push={1}span={24} md={12}>
          <H1>Practice. Assess. <br></br>Improve.</H1>
          <P><span style={{fontWeight:'bold'}}>SparkEd
          </span>is a learning companion on a simple idea: <br></br> students learning best by doing</P>
          <Button className="getstarted">GET STARTED</Button>
          </Col>

          <Col span={24} md={12}>
          <IMG src={Image}></IMG>
          </Col>
         </Row>
         
        </Content>
       
    )
}

export default Section;
