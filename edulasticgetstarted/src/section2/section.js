import React from 'react'
import {INFORMATION,IMAGE,IMG,DIV,A} from './sectioncss'
import { Layout } from 'antd';
import Image from '../Images/background1.png';
const {Content } = Layout;

export const Section = ({className}) => {
    return (
       
        <Content>
            
          <INFORMATION>
            <DIV>
            <h5>Math</h5>
            <DIV>
           
            <A href="#">EARLY MATH</A>
            <A href="#">ARTHMETIC</A>
            <A href="#">PRE -ALGEBRA</A>
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
            <h5>Math by Grade</h5>
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
          </INFORMATION>

          <IMAGE>
          <IMG src={Image}></IMG>
          </IMAGE>

        </Content>
       
    )
}

export default Section;
