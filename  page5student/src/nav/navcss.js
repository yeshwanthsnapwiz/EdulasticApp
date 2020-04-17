import styled  from 'styled-components';


export const LOGO=styled.img`
   width:132px;
   height:42px;
   position:relative;
   top:10px;
   left:34px;
`;

export const Ul = styled.ul`
   display:flex;
   flex-direction:row;
   align-items:center;
   justify-content:space-evenly;
   height:64px;
   top: 23px;

`;
export const UL = styled.ul`
   display:flex;
   flex-direction:row;
   height:64px;
   align-content:center;
   justify-content:space-between;
   .signup{
   font-size:12px;
   width:132px;
   height:40px;
   border:2px solid #1AB395;
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
   list-style-type:none;
a {
   width:50px;
   height:15px;
   font-size:11px;
   font-family: 'Open Sans', sans-serif;
   font-weight:600;
   letter-spacing: 0.2px;
   color: #2E3543;
   opacity: 1;
   text-decoration:none;
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
`;


export const SIGNUP= styled.li`
   list-style-type:none;
   align-self:center;
   top: 22px;
 a{
   top: 22px;
   left: 1246px;
   width:50px;
   height:15px;
   font-size:12px;
   text-decoration:none;
   opacity: 1;
   color: #2E3543;
   font-family: 'Open Sans', sans-serif;
   font-weight:600;
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
   position:absolute;
   top:18px;
   left:3px;
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
   font-size:11px;
   font-family: 'Open Sans', sans-serif;
   font-weight:600;
   color: #2E3543;
}
`;




