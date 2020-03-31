import styled from 'styled-components';

export const CAPTION =styled.div`
    display:flex;
    flex-direction:column;
    min-height:200px;
    justify-content:center;
h1{
    text-align:center;
    font-size:40px;
    color:#434b5d;
    font-weight:bold;
    line-height:1;
}
p{
    text-align:center;
    color:grey;
    line-height:1;
}
`;



export const ACCOUNT =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    flex-wrap:wrap;
    width:100%;
    height:300px;
    z-index:200;
h1{
    text-align:center;
    font-size:20px;
    color:#434b5d;
    font-weight:bold;
    line-height:1;
}
`;


export const MEMBERS =styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    width:100%;
    height:200px;
    margin-bottom:4em;
`;

export const DIV =styled.div`
    display:flex;
    flex:0 1 220px;
    height:280px;
    margin:1em 1em;
    background:url(${props => props.img});
    background-size: 100% 100%;
    border-radius:8px;
    justify-content:center;
    align-items:center;
`;

export const Button=styled.div`
    width:120px;
    height:35px;
    background-color:white;
    border:none;
    cursor: pointer;
    color:#4bb495;
    border-radius:2px;
    text-align:center;
    position:relative;
    top:90px;
    line-height: 35px;
    font-size:0.8em;
    font-weight:550;
  
&:hover{
    opacity:0.8;
}
`;


export const Background =styled.div`
width:100%;
height:200px;
background-color:#014788;
border-radius:3px;
margin-top:-80px;
@media screen and (max-width: 758px) {
height:450px;
}
@media screen and (max-width: 520px) {
height:770px;
}
`;






