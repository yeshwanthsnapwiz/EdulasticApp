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
    font-size:40px;
    color:#434b5d;
    font-weight:bold;
    line-height:1;
}
p{
    text-align:center;
    color:grey;
    line-height:1;
}
}

h2{
        text-align:center;
        font-size:20px;
        color:#434b5d;
        font-weight:bold;
        line-height:1;
}

`;


