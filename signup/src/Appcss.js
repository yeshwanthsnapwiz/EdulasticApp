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
    @media screen and (max-width: 780px) {
        border-top:1px solid lightgrey;
        border-bottom:1px solid lightgrey;
   } 
}
.ant-layout-content {
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;  
}



 .card {
   width:60%;
   justify-content: space-between;
   height:400px;
   position:relative;
   top:30px;
   @media screen and (max-width: 780px) {
   width:80%;
   justify-content: center;
  .student,.teacher,.admin {
   margin-top: 10px;
    }
    
 }
 
}


.caption{
    display:flex;
    flex-direction:column;
    min-height:200px;
    justify-content:center;
h1{
    text-align:center;
    font-size:55px;
    color: #434B5D;
    font-weight:bold;
    line-height:1;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: -2.75px;
    position:relative;
    top:30px;
}
p{
    text-align:center;
    color: #6A737F;
    font-size:16px;
    line-height:1;
    font-family: 'Open Sans', sans-serif;
    position:relative;
    top:30px;
}
}

h2{
        text-align:center;
        font-size:18px;
        color:#434b5d;
        line-height:1;
        font-family: 'Open Sans', sans-serif;
        letter-spacing: -0.9px;
        position:relative;
        top:30px;
}

`;


