import React from 'react'
import styled from 'styled-components';
import {Select, Tag } from 'antd';
import {SearchOutlined} from '@ant-design/icons';


function tagRender(props) {
  const { label, closable, onClose } = props;
  const  Option =Select.Option
  return (
 
    <TAG  className="tag" closable={closable} onClose={onClose} style={{ marginRight: "3" ,
    
    }}>
   {label}
    </TAG>

  
  );
}


export const INPUT = ({className}) => {
    return (
        <div>
     <SELECT
     placeholder="Search by ZIP,Name or City"
     mode="multiple"
     tagRender={tagRender}
    
   >
     <Option value="lucy">lucy</Option>
     <Option value="lucy">lucy</Option>
     <Option value="lucy">lucy</Option>
     <Option value="lucy">lucy</Option>
     <Option value="lucy">lucy</Option>
     <Option value="lucy">lucy</Option>
     <Option value="lucy">lucy</Option>
    </SELECT>
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
overflow:hidden;
position: relative;
top:10px;
&:hover{
 color:"#6A737F";
}
&:focus{
  box-shadow:none;
  outline:none;
}



`;

export const OPTION=styled(Select.Option)`


`;

export const TAG=styled(Tag)`

  background-color:#E3E3E3;
  color:#434B5D;
    height:23px;
    border-radius:20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border:none;
    &:hover{
      background-color:#014788;
      color:white;
    }



`;


