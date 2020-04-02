import React from 'react'
import {Button,Background} from './sectioncss'
import '../App.css';
import {Row,Col} from 'antd';

export const Section = ({className}) => {
    return (
       
        <Row className="ant-layout-content " >

            {/*Heading*/}
          <Col className="caption">
          <h1>Get started with free account!</h1>
          <p>Join the growing community of teachers who are using Edulastic assessment</p><p> to promote learning</p>
          </Col>

          <Row justify="center">
           <h2>Create Your Free Account</h2>
           </Row>
    
             {/*Accounts*/}

           <Row className="card" justify="center" align="middle" >
           
           <Col  align="middle" span={15} md={7} className="student">
           <Button>STUDENT</Button>
           </Col>
           <Col align="middle" span={15}  md={7} className="teacher">
           <Button>TEACHER</Button>
           </Col>
           <Col align="middle" span={15}  md={7} className="admin">
           <Button>ADMINISTRATOR</Button>
           </Col>
           </Row>


          <Background>
          </Background>

        </Row>
       
    )
}

export default Section;
