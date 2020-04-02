import styled  from 'styled-components';


export const LOGO=styled.img`
   width:50px;
   height:50px;
`;

export const Ul = styled.ul`
   display:flex;
   flex-direction:row;
   align-items:center;
   justify-content:space-evenly;
   height:64px;

`;
export const UL = styled.ul`
   display:flex;
   flex-direction:row;
   height:64px;
   align-content:center;
   justify-content:space-between;
   .signup{
   font-size:12px;
   width:120px;
   height:35px;
   border:2px solid #4bb495;
   color:rgb(75,180,149,1);
   font-weight:bold;
   border-radius:3px;
   transition: all 0.1s;
   align-self:center;
   &:hover {
   color:white;
   background-color:#4bb495;
} 
   }
  

`;

export const LI = styled.li`
    font-size:12px;
    list-style-type:none;
a {
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    text-decoration:none;
    color:rgb(0,0,0,0.8);
    font-weight:bold;
&:hover {
    color:#409bfb;
}   
}
@media screen and (max-width: 780px) {
    display:none;
   }
`;

export const LOGIN = styled.ul`
    display:flex;
    height:64px;
    justify-content:space-between;

}
`;


export const SIGNUP= styled.li`
    list-style-type:none;
    align-self:center;
 a{
    text-decoration:none;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight:bold;
    color:rgb(0,0,0,0.7);
    font-weight:bold;  
    &:hover{
    color:#409bfb;
    }
    @media screen and (max-width: 780px) {
    display:none;
   }
   
`;


export const Label= styled.label`
     width:25px;
     height:25px;
     border-radius:5px;
     position:absolute;
     top:18px;
     left:15px;
     cursor: pointer;
     display:none;
    .bar1,.bar2,.bar3{
     list-style-type:none;
     width:25px;
     height:3px;
     background-color:#5ac2e5;
     color:#5ac2e5;
     margin-top:5px;
   }
   @media screen and (max-width: 780px) {
     display:block; 
   }
 
`;

export const Checkbox= styled.input`
   display:none;
   &:checked ~ .menu-collapse {
   height:250px;
   visibility:visible;
   opacity:1;
}

`;

export const COLLAPSEMENU = styled.ul`
   display:flex;
   flex-direction:column;
   justify-content:space-around;
   width:100%;
   background-color:white;
   height:0px;
   visibility: hidden;
   transition: 0.2s ease-in;
   opacity:0;
   background-color:white;
@media screen and (min-width: 781px) {
   display:none;
   }
li {
   list-style-type:none;
}
a{
   text-decoration:none;
   color:rgb(0,0,0,0.8);
   font-weight:bold;
}
`;




