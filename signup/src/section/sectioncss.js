import styled from 'styled-components';

export const Button=styled.div`
width:120px;
height:35px;
background-color:white;
border:none;
cursor: pointer;
color:#4bb495;
border-radius:2px; 
position:relative;
top:220px;
line-height: 35px;
font-size:0.8em;
font-weight:550;
  
&:hover{
    opacity:0.8;
}
`;


export const Background =styled.div`
width:100%;
height:150px;
background-color:#014788;
border-radius:3px;
margin-top:-80px;
@media screen and (max-width: 780px) {
height:620px;
} 
`;






