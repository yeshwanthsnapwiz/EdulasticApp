import React from 'react'
import {CAPTION,IMAGE,IMG} from './sectioncss'
import { Layout ,Button} from 'antd';
import Image from '../Images/background1.png';
const {Content } = Layout;

export const Section = ({className}) => {
    return (
       
        <Content>
            
          <CAPTION>
          <h1>Practice. Assess. <br></br>Improve.</h1>
          <p><span style={{fontWeight:'bold'}}>SparkEd </span>is a learning companion on a simple idea: <br></br> students learning best by doing</p>
          <Button className="getstarted">GET STARTED</Button>
          </CAPTION>

          <IMAGE>
          <IMG src={Image}></IMG>
          </IMAGE>

        </Content>
       
    )
}

export default Section;
