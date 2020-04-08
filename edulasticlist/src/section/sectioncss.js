import styled from 'styled-components';



export const H1 =styled.h1`
width:90%;
text-align:justify;
color: #2E3543;
font-size:60px;
font-family: 'Open Sans', sans-serif;
letter-spacing: -3px;
line-height:1;
color: #434B5D;
opacity: 1;
`;

export const IMG =styled.img`
width:100%;
height:100%;
 `;

export const P =styled.p`
color:#6A737F;
width:90%;
text-align:justify;
`;

export const Dropdown=styled.div`
position: relative;
display: flex;
justify-content:space-between;
width:100%;
height:50px;
border-bottom:1px solid #A0A0A0;
&:hover  .dropdown{
display: block; 
}
&:hover  .icon{
transform:rotate(180deg);  
}
`;

export const  SPAN =styled.span`
position: relative;
left:20px;
font-size:20px;
color:#434B5D;
text-transform:uppercase;
letter-spacing: -1px;
font-family: 'Open Sans', sans-serif;
`;

export const Li =styled.li` 
text-align:left;
list-style-type:none;
 `;

export const UL =styled.ul`
display: none;
position: absolute;
top:48px;
width:100%;
height:200px;
overflow-y:scroll;
text-align:left;
background-color: white;
box-shadow:2px 2px 8px 12px rgba(0,0,0,0.2);
padding: 12px 16px;
z-index: 1;
outline-style: solid;
outline-color:white;
outline-width: 8px;
::-webkit-scrollbar {
width: 5px;
height:5px;
border-radius:10px;
position: relative;
top:20px;
right:100px;
}

/* Track */
::-webkit-scrollbar-track {
background: #f1f1f1; 
border-radius:10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
background: #E3E3E3; 
border-radius:20px;
width: 5px;
height:5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
background: #E3E3E3; 
}
  
`;
export const DROPDOWNICON =styled.img`
position: relative;
right:20px;
transition:all 0.2s ease;
 `;

export const A =styled.a`
font-size:20px;
font-family:bold;
color:#434B5D;
text-transform:uppercase;
letter-spacing: -1px;
font-family: 'Open Sans', sans-serif;
 `;

export const DIV =styled.div`
width:70%;
text-align:left;
.title{
text-align: justify;
font-family: 'Open Sans', sans-serif;
font-family:bold;
font-size:45px;
letter-spacing: -2.25px;
color: #434B5D;
opacity: 1
}
p{
text-align: left;
font-family: 'Open Sans', sans-serif;
text-transform:uppercase;
letter-spacing: 0.2px;
color: #434B5D;
opacity: 1;
}
.text {
position: relative;
top:40px;
text-align: justify;
font-size:45px;
font-family: 'Open Sans', sans-serif;
letter-spacing: -2.25px;
color: #434B5D;
opacity: 1;
text-transform:capitalize;
 }
 `;


export const Div =styled.div`
display:flex;
position: relative;
top:40px;
@media only screen and (max-width: 980px) {
flex-direction:column;
justify-content:center;
align-items:center;
}
`;


export const AA =styled.a`
display:inline-block;
width: 200px;
height: 30px;
padding:0.4em;
margin:0.1em;
text-align:center;
font-size:11px;
font-family: 'Open Sans', sans-serif;
color:#434B5D;
background-color:#E3E3E3;
border-radius: 20px;
text-decoration:none;
&:hover{
color:white;
background-color:#014788;
     }
`;


 





