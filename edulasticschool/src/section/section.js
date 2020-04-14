import React from 'react'
import {SECTIONWRAP,COL,DIV,ICON,Div,A} from './sectioncss'
import icon from '../images/school-community.svg'
import INPUT from './select';
export const Section = () => {
    return (
       <SECTIONWRAP>
       <COL span={24} md={12} >
       <DIV>
        <ICON src={icon}/>
        <h5>Join your school community</h5>
        <p>collaborate with your colleagues and more.</p>
       </DIV>
     
        </COL>
        <COL span={24} md={12}>
        <DIV>
        <h4>SEARCH SCHOOL</h4>
        <INPUT></INPUT>
        <Div>
            <A style={{color:"#1AB395"}}>REQUEST A NEW SCHOOL >></A>
            <A style={{color:"#1AB395"}}>I WANT HOME SCHOOL >></A>
        </Div>
       </DIV>
       
        </COL>
       </SECTIONWRAP> 
    )
}

export default Section;