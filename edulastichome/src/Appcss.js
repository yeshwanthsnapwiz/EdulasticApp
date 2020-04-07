import {createGlobalStyle} from 'styled-components'
export const GlobalStyle =createGlobalStyle`

html,body{
    margin:0px;
    padding:0px;
    overflow-x:hidden;
    width:100%;
    height:650px;

}
*{
    box-sizing:border-box;
}


.getstarted {
    width:130px;
    height:40px;
    position:absolute;
    left:30px;

    color:white;
    border:none;
    background-color:#1AB395;
    opacity:0.8;
    

    
&:hover{
    background-color:#1AB395;
    color:white;
    opacity:1;
}
}
.ant-layout-content
{
    @media screen and (max-width: 780px) {
       display:flex;
       flex-wrap:wrap-reverse;
   } 
}

`;
