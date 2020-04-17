import styled from 'styled-components';

export const INFORMATION =styled.div`
    display:flex;
    flex-direction:column;
    background-color:red;
`;


export const H5 =styled.h5`
    font-size:45px;
    color:#434b5d;
    font-weight:bold;
    position: relative;
  
`;

export const IMG =styled.img`
    width:100%;
    height:100%;
 `;


export const DIV =styled.div`
    width:100%;
    align-self:center;
    position:relative;
    

`;

export const A =styled.a`
     display:inline-block;
     width: 112px;
     height: 30px;
     padding: 0.5em 1.2em 0.5em 1.2em;
     margin:0.3em ;
     font-size:11px;
     font-family: 'Open Sans', sans-serif;
     color:#434B5D;
     background-color:#E3E3E3;
     text-align:center;
     border-radius: 20px;
     text-decoration:none;
     &:hover{
         color:white;
         background-color:#014788;
     }
`;
