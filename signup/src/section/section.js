import React from 'react'
import {Button,Background,ROW,COL,ROw,TITLE} from './sectioncss'
import '../App.css';
import {Row,Col} from 'antd';

export const Section = ({className}) => {
    return (
       
        <ROw className="ant-layout-content " >

            {/*Heading*/}
          <COL className="caption">
          <h1>Get started with free account!</h1>
          <p>Join the growing community of teachers who are using Edulastic assessment</p><p> to promote learning</p>
          </COL>

          <Row justify="center">
           <TITLE>Create Your Free Account</TITLE>
           </Row>
    
             {/*Accounts*/}

           <ROW className="card" justify="center" align="middle" >
           
           <Col  align="middle" span={15} md={7} className="student">
           <Button>STUDENT</Button>
           </Col>
           <Col align="middle" span={15}  md={7} className="teacher">
           <Button>TEACHER</Button>
           </Col>
           <Col align="middle" span={15}  md={7} className="admin">
           <Button>ADMINISTRATOR</Button>
           </Col>
           </ROW>


          <Background>
          </Background>

        </ROw>
       
    )
}

export default Section;
