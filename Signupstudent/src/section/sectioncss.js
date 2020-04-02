import styled from 'styled-components';

export const DIV =styled.div` 
  display:flex;
  width:70%;
  flex-direction:column;
  text-align:justify;
  .h5{
  font-size:40px;
  color:#434b5d;
  line-height:1;
  }
`;


export const P =styled.p` 
  color:grey;
  line-height:2;
  font-family: 'Roboto', sans-serif;
`;


export const SIGNUP =styled.div` 
  display:flex;
  width:290px;
  height:40px;
  justify-content:space-between;
  margin-top:10px;
  @media screen and (max-width: 780px) {
  flex-direction:column;
  }
`;


export const A =styled.a` 
  color:#4bb495;
  font-weight:bold;
  font-size:10px;
  &:hover{
  color:#4bb495;
  text-decoration:underline;
  }
`;

export const SIGNIN =styled.div` 
  display:flex;
  flex-direction:column;
  width:85%;
  height:140px;
  position: relative;
  top:5%;
  .h2{
  color:white;
  font-size:24px;
  font-family: 'Roboto', sans-serif;
  }
  a {
  font-size:0.75em;
  color:#434b5d;
  font-weight:bold;
  text-align:center;
  display:flex;
  justify-content:center;
  width:85%; 
  height:33px; 
  align-items:center;
  font-family: 'Roboto', sans-serif;

  
  }

`;

export const Li =styled.li` 
  width:100%;
  height:40px;
  list-style-type:none;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  word-spacing:0.1em;
  background-color:white;
  margin-top:5px;
  border-radius:3px;
  &:hover{
    opacity:0.9;
  }
`;


export const PRIVACY =styled.li` 
  width:100%;
  height:45px;
  color:rgb(255,255,255,0.4);
  display:flex;
  justify-content:space-between;
  justify-content:center;
  align-items:center;
  list-style-type:none;
  text-align:justify;
  margin-top:7px;
  margin-left:10px;

  p {
  width:85%;
  font-size:10px;
  margin-top:7px;
  margin-left:25px;
  font-weight:bold;
  font-family: 'Roboto', sans-serif;

  }
`;

export const FORM=styled.div`
  width:85%;
  height:190px;
  align-self:center;
  text-align:start;
 position: relative;
 top:15%;
.h2{
  
  position: relative;
  top:14px;
  height:30px;
  font-size:14px;
  text-align:center;
  color:#434b5d;
  font-family: 'Roboto', sans-serif;
}

.input {
    border:2px solid #e7e7e8;
    outline: 0;
    &:hover{
      border:2px solid #e7e7e8;
    }
}
`;
export const Label=styled.label`
  display: inline-block;
  width:100%;
  font-size:0.8em;
  text-transform:uppercase;
  color:#434b5d;
  font-family: 'Roboto', sans-serif;
  font-weight:bold;
  position: relative;
  top:10px;
`;


export const Button =styled.div`
  font-size:12px;
  width:100%;
  height:35px;
  border:none;
  background-color:#4bb495;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight:bold;
  border-radius:3px;
  transition: all 0.1s;
  margin-top:18px;
&:hover {
  background-color:#389c7e;
}
`;


