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
height: 649px;
top: 50px;
border: 1px solid #DDDDE6;
border-radius: 10px;
background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: 1;
@media screen and (max-width: 780px) {
position: relative;
top:20px;
  }
}

`;

