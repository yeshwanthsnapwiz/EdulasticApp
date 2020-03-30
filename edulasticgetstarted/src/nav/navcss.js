import styled  from 'styled-components';

export const NAVWRAP = styled.div`
`;

export const IMG = styled.div`
   width:10%;
`;

export const LOGO=styled.img`
   width:50px;
   height:50px;
`;

export const NAV= styled.nav`
   display:flex;
   justify-content:flex-end;
   flex: 0 1 720px;
`;

export const MENU = styled.ul`
   display:flex;
   flex-direction:row;
   justify-content:space-around;
   flex: 0 1 430px;
   height:64px;
@media screen and (max-width: 780px) {
   display:none; 
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
    padding-top:30px;
   }

`;

export const LOGIN = styled.ul`
    display:flex;
    height:64px;
    justify-content:space-between;
    flex: 0 1 220px;
.signup{
    font-size:12px;
    width:120px;
    height:35px;
    align-self:center;
    border:2px solid #4bb495;
    color:rgb(75,180,149,1);
    font-weight:bold;
    border-radius:3px;
    transition: all 0.1s;
&:hover {
    color:white;
    background-color:#4bb495;
} 
}
`;


export const SIGNUP= styled.li`
    align-self:center;
    list-style-type:none;
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
}
`;


export const Label= styled.label`
     width:25px;
     height:25px;
     border-radius:5px;
     position: relative;
     top:20px;
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
     &:checked ~ .collapsemenu {
         visibility:visible;
     height:270px;
     opacity:1;
}

`;


export const COLLAPSEMENU =styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content:space-around;
    width:100%;
    height:0px;
    visibility: hidden;
    transition: 0.4s;
    opacity:0;
    background-color:white;
@media screen and (min-width: 781px) {
    display:none;
   }
`;

export const A = styled.a`
    text-align:center;
    width:100%;
    font-size:12px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    text-decoration:none;
    color:rgb(0,0,0,0.8);
    font-weight:bold;
&:hover {
    color:#409bfb;  
}   

`;

export const SIGNUPB= styled.li`
    width:100%;
    list-style-type:none;
    text-align:center;
 a{

    text-decoration:none;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight:bold;
    color:rgb(0,0,0,0.7);
    font-weight:bold;  
    &:hover {
    color:#409bfb;
}  
 } 
}
`;



