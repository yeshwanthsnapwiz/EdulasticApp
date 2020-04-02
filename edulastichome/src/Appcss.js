import {createGlobalStyle} from 'styled-components'
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
    @media screen and (max-width: 800px) {
        border-top:1px solid lightgrey;
        border-bottom:1px solid lightgrey;
   } 
}

.ant-layout-content {
    display:flex;
    width:100%;
    min-height: 600px;
    @media screen and (max-width: 800px) {
    flex-wrap:wrap-reverse;
   } 
}

.getstarted {
    width:130px;
    height:40px;
    color:white;
    border:none;
    background-color:#4bb495;
&:hover{
    opacity:0.8;
}

`;
