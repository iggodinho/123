import styled from "styled-components";
import {AiOutlineArrowRight} from 'react-icons/ai';

export const LoginBg=styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #CAF0F8;
`

export const InnerContainer=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  width: 20%;
`

export const Input = styled.input`
    width: 100%;
    background-color: white;
    border-radius: 10px;
    text-align: left;
    padding: 10px;
    font-size: 16px;
    border: 0px;
    color: black;
    outline: none;
    margin-bottom:10px;
    border-color:${props=>
    {return props.validation===false?'red':'none'}};
    background-color:${props=>
    {return props.validation===false?'#fbdada':'none'}};
    &&:focus{
      border-color:${props=>
    {return props.validation===false?'red':'#90E0EF'}};
    }
`

export const ButtonContainer = styled.button `
    margin-top:10px;
    width: 100%;
    padding:10px;
    color: black;
    background-color:#00B4D8;
    font-weight: bold;
    font-size: 20px;
    border:0px;
    border-radius: 10px;  
    cursor:pointer;
    display:flex;
    align-items: center;
    justify-content: center;
    &&:disabled{
      background: #ccc;
      border-color: #ccc;
      color: #666666;
      cursor: not-allowed;
    }
`

export const Icon=styled(AiOutlineArrowRight)`
  width: 20px;
  margin-left: 5px;
 
`