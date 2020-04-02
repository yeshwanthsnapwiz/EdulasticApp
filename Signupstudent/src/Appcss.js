import {createGlobalStyle} from 'styled-components'
import 'antd/dist/antd.less'; // Import Ant Design styles by less entry

export const GlobalStyle =createGlobalStyle`

html,body{
    margin:0px;
    padding:0px;
    overflow-x:hidden;
    width:100%;
}
*{
    box-sizing:border-box;
}
.ant-layout-header {
    display:flex;
    justify-content:space-between;
    position:sticky;
    height: 64px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 64px;
    background:white;
    @media screen and (max-width: 780px) {
        border-top:1px solid lightgrey;
        border-bottom:1px solid lightgrey;
   } 
}
.ant-layout-content {
   min-height: 600px;
}

.form{
display:flex;
background-color:red;
flex-direction:column;
height:550px;
background:linear-gradient(#014788 40%, white 40%);
border:1px solid lightgrey;
border-radius:10px;
@media screen and (max-width: 780px) {
position: relative;
top:20px;
  }
}

.input{
width:100%;
height:35px;
background-color:whitesmoke;
color:rgb(0,0,0,0.6);
margin-top:15px;
border:1px solid #e7e7e8;
}


.ant-input{
    background-color:whitesmoke;
    border:none;
    outline:none;
    &::placeholder{
    font-size:12px;
    font-weight:bold;
    color:rgb(0,0,0,0.3);
    }
   
  .ant-input:placeholder-shown {
   margin-left:10px;
}


.
`;

