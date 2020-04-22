import styled  from 'styled-components';


export const LOGO=styled.img`
   width:132px;
   height: 43px;
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
   @media screen and (max-width: 780px) {
   display:none;
   }
`;

export const Signup=styled.button`
   font-size:12px;
   width:132px;
   height:40px;
   border:2px solid #1AB395;
   color:rgb(75,180,149,1);
   font-weight:bold;
   border-radius:3px;
   transition: all 0.1s;
   align-self:center;
   background:white;
   &:hover {
   color:white;
   background-color:#4bb495;
   } 
   @media screen and (max-width: 780px) {
   display:block; 
   left:10px;
   }
`;


export const LI = styled.li`
   list-style-type:none;
a {
   width:50px;
   height:15px;
   font-size:11px;
   font-family: 'Open Sans', sans-serif;
   font-weight:1000;
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


export const Login= styled.li`
   list-style-type:none;
   align-self:center;
   top: 22px;
 a{
   top: 22px;
   width:50px;
   height:15px;
   font-size:12px;
   text-decoration:none;
   opacity: 0.9;
   color: #2E3543;
   font-family: 'Open Sans', sans-serif;
   font-weight:normal;
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
   top:20px;
   display:none;
   cursor: pointer;
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
   left:10px;
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

export const COLLAPSEMENU = styled.div`
   width:100%;
   height:300px;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   justify-content:space-around;
   background-color:white;
  
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




