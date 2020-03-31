import styled from 'styled-components';

export const INFORMATION =styled.div`
    display:flex;
    flex-direction:column;
    background-color:red;
`;


export const H5 =styled.h5`
    font-size:32px;
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
     padding: 0.5em 1.2em 0.5em 1.2em;
     margin:0.3em ;
     font-size:12px;
     font-family:Arial, Helvetica, sans-serif;
     font-weight:bold;
     color:rgb(0,0,0,0.55);
     background-color:#e3e3e3;
     border-radius:55px;
     text-decoration:none;
     &:hover{
         color:white;
         background-color:#014788;
     }
`;
