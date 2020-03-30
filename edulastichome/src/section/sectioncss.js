import styled from 'styled-components';

export const CAPTION =styled.div`
display:flex;
  flex-direction:column;
  justify-content:center;
  align-self:center;
    margin:auto;
  
h1{
  
    font-size:50px;
    font-stretch: expanded;
    color:#434b5d;
    font-weight:bold;
    line-height:1;
}

p{
    color:grey;
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
}
`;

export const IMAGE =styled.div`
    margin:auto;
`;

export const IMG =styled.img`
     width:100%;
     height:100%;
     
`;