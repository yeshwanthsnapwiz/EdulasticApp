import React from 'react'
import styled from 'styled-components';
import {Select, Tag } from 'antd';
import {SearchOutlined} from '@ant-design/icons';

const  Option =Select.Option;
function tagRender(props) {
  const { label, closable, onClose } = props;

  return (
 
    <TAG  closable={closable} onClose={onClose} style={{ marginRight: "3" ,
    }}>
   {label}
    </TAG>

  
  );
}


export const INPUT = ({className}) => {
    return (
    <div>
    <SELECTWRAP>
     <SELECT
     placeholder="Search by ZIP,Name or City"
     mode="multiple"
     tagRender={tagRender}
     maxTagTextLength={100}
     dropdownAlign={{ offset:[8,8] }}
     getPopupContainer={trigger => trigger.parentNode}>
   
   >
     <Options value="city1">Bang El</Options>
     <Options value="city2">Bangalore International</Options>
     <Options value="city3">Bang El</Options>
     <Options value="city4">Bangalore International</Options>
     <Options value="city5">Bang El</Options>
     <Options value="city6">Bangalore International</Options>
     <Options value="city7">Bang El</Options>
   
    </SELECT>
    <SearchOutlined style={{color:"#1AB395"}}/>
   </SELECTWRAP>
 
   </div>
    )
}



export default INPUT;


export const SELECT =styled(Select)`
width:100%;
border:none;
border-bottom:1px solid grey;

position: relative;
&:hover{
color:"#6A737F";
.anticon-close{
color:white;
}
}
`;

export const Options=styled(Option)`
color:white;
`;


export const TAG=styled(Tag)`
height: 30px;
color:#434B5D;
border-radius:20px;
display:flex;
justify-content:space-between;
align-items:center;
border:none;
font-family: 'Open Sans', sans-serif;
font-size:11px;
font-weight:400;
&:hover{
background-color:#013b70;
color:white;
}
`;
export const SELECTWRAP=styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
height:35px;
border-bottom: 1px solid grey;
z-index:220;
position: relative;
top:20px;
height:auto;
`;
