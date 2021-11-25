import styled from "styled-components";

export const MenuContainer=styled.div`
  background-color: white;
  width: 100%;
  display:flex;
  align-items: center;
  
  flex-direction: column;
  background-color: #CAF0F8;
  margin-bottom: 20px;
`

export const MenuList = styled.ul`
    display: flex;
    align-items: center;
    
    justify-content: space-between;
    width:50%;
    margin-right: 30px;
`

export const MenuOption =styled.li`
    display:flex;
    text-decoration: none;
    flex-direction: column;
    align-items:center;
    color: #0077B6;
    font-size: 24px;
    font-weight: bold;
    padding: 10px 20px;
    opacity:${props=>
    {return props.active===true?'100%':'50%'}};
    cursor:pointer;
    &:hover{
      opacity:100%;
    }
`