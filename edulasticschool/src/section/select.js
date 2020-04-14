import React from 'react'
import styled from 'styled-components';
import {Select, Tag } from 'antd';
import {SearchOutlined} from '@ant-design/icons';
const options = [{ value: 'red' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' },{value:'yesh'},];

function tagRender(props) {
  const { label, closable, onClose } = props;

  return (
 
    <TAG  className="tag" closable={closable} onClose={onClose} style={{ marginRight: "3" ,
    width:"100px",
    height:"23px",
    borderRadius:"20px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    color:"#434B5D"
    }}>
   {label}
    </TAG>

  
  );
}


export const INPUT = () => {
    return (
        <div>
               <SELECT
               placeholder="Search by ZIP,Name or City"
     mode="multiple"
     tagRender={tagRender}
     options={options}
   />
   <SearchOutlined style={{color:"#1AB395"}}/>
  
        </div>
    )
}



export default INPUT;


export const SELECT =styled(Select)`
width:90%;
border:none;
border-bottom:1px solid grey;
box-shadow:none;
background-color:"red";
&:hover{
 color:"#6A737F";
}
&:focus{
  box-shadow:none;
  outline:none;
}
`;

export const TAG=styled(Tag)`

`;


