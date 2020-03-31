import React from 'react'
import {CAPTION,ACCOUNT,MEMBERS,DIV,Button,Background} from './sectioncss'
import studenta from '../Images/student.jpeg';
import studentb from '../Images/teacher.jpeg';
import studentc from '../Images/admin.jpeg';
import { Layout} from 'antd';
const {Content } = Layout;

export const Section = ({className}) => {
    return (
       
        <Content>

            {/*Heading*/}
          <CAPTION>
          <h1>Get started with free account!</h1>
          <p>Join the growing community of teachers who are using Edulastic assessment</p><p> to promote learning</p>
         
          </CAPTION>

           <ACCOUNT>
           <div>
           <h1>Create Your Free Account</h1>
           </div>

             {/*Accounts*/}

           <MEMBERS>
           <DIV img={studenta}>
           <Button>STUDENT</Button>
           </DIV>
           <DIV img={studentb}>
           <Button>TEACHER</Button>
           </DIV>
           <DIV  img={studentc}>
           <Button>ADMINISTRATOR</Button>
           </DIV>
           </MEMBERS>
         
           </ACCOUNT>
           <Background>
           </Background>

        </Content>
       
    )
}

export default Section;
