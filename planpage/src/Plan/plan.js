import React from 'react'
import {Sectionwrap,Title,H5,P,Plans,Free,Trail,Teacher,Enterprise,Div,Header,Content,Contentsection} from './plancss';
import Edupay from '../Modal/modal';

export const Plan = ({className}) => {
    return (
        <Div>
          <Sectionwrap>
              <Title>
                  <H5>Select a plan</H5>
                  <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tellus velit. Sed at tortor accumsan odio molestie congue.</P>
              </Title>
          </Sectionwrap>
          <Plans>

              <Free span={20} sm={11} lg={5}>
                 <Header className="header">
                 <h5>Free</h5>
                 </Header>
              <Contentsection className="content">
                 <Content>
                 <p> Lorem ipsum</p> 
                 <p>Lorem ipsum dolor</p> 
                 <p> Lorem ipsum Lorem ipsum dolor sit</p>
                 <p> amt Lorem ipsum</p>
                 </Content>
                 <Edupay></Edupay>
              </Contentsection>
              </Free>

              <Trail span={20} sm={11} lg={5}>
              <Header className="header">
                 <h5>7-day Trial</h5>
                 </Header>
               <Contentsection className="content">
                 <Content>
                 <p> Lorem ipsum</p> 
                 <p>Lorem ipsum dolor</p> 
                 <p> Lorem ipsum Lorem ipsum dolor sit</p>
                 <p> amt Lorem ipsum</p>
                 </Content>
                 <Edupay></Edupay>
                 </Contentsection>
              </Trail>
    
              <Teacher span={20} sm={11} lg={5}>
              <Header className="header">
                <h5>Teacher Premium</h5>
                 </Header>
               <Contentsection className="content">
                 <Content>
                 <p> Lorem ipsum</p> 
                 <p>Lorem ipsum dolor</p> 
                 <p> Lorem ipsum Lorem ipsum dolor sit</p>
                 <p> amt Lorem ipsum</p>
                 </Content>
                 <p className="price"><sup>$ </sup>99<sub> / yr</sub></p>
                 <Edupay></Edupay>
                 </Contentsection>
              </Teacher>
    
               <Enterprise span={20} sm={11} lg={5}>
               <Header className="header">
                <h5>Enterprise</h5>
                 </Header>
               <Contentsection className="content">
                 <Content>
                 <p> Lorem ipsum</p> 
                 <p>Lorem ipsum dolor</p> 
                 <p> Lorem ipsum Lorem ipsum dolor sit</p>
                 <p> amt Lorem ipsum</p>
                 </Content>
                 <Edupay></Edupay>
                 </Contentsection>
              </Enterprise>

            </Plans>
        </Div>
    )
}
export default Plan;
