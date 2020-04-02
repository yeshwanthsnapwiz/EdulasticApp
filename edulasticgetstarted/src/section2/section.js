import React from 'react'
import {IMG,DIV,A,INFORMATION,H5} from './sectioncss'
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import Image from '../Images/background1.png';


export const Section = ({className}) => {
    return (
       
   
      <Row align="middle" className="ant-layout-content ">
       <Col push={1} span={24} md={12} >
        
            <DIV>
            <H5>Math</H5>
            <DIV>
           
            <A href="#">EARLY MATH</A>
            <A href="#">ARTHMETIC</A>
            <A href="#">PRE - ALGEBRA</A>
            <A href="#">ALGEBRA 1</A>
            </DIV>
            <DIV>
            <A href="#">GEOMETRY</A>
            <A href="#">ALGEBRA 2</A>
            <A href="#">TRIGONOMETRY</A>
            <A href="#">PRECALCULUS</A>
            </DIV>
            </DIV>
            <DIV>
            <br></br>
            <H5>Math by Grade</H5>
            <DIV>
            <A href="#">PRESCHOOL</A>
            <A href="#">KINDERGARTEN</A>
            <A href="#">1<sup>st</sup> GRADE</A>
            <A href="#">2<sup>nd</sup> GRADE</A>
            </DIV>
            <DIV>
            <A href="#">3<sup>rd</sup> GRADE</A>
            <A href="#">4<sup>th</sup> GRADE</A>
            <A href="#">5<sup>th</sup> GRADE</A>
            <A href="#">6<sup>th</sup> GRADE</A>
            <A href="#">7<sup>th</sup> GRADE</A>
            </DIV>
            <DIV>
            <A href="#">8<sup>th</sup> GRADE</A>
            <A href="#">HIGH SCHOOL</A>
            </DIV>
            </DIV>
           
        </Col>

          <Col span={24} md={12}>
          <IMG src={Image}></IMG>
          </Col>

      </Row>
    
       
    )
}

export default Section;
