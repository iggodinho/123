
import {DiGoogleAnalytics} from 'react-icons/di';
import styled from 'styled-components';
import {GoGraph} from 'react-icons/go';
import {AiOutlinePieChart} from 'react-icons/ai';   
import { Link } from 'react-router-dom';

export const HeaderContainer=styled.div`
  background-color: white;
  width: 100%;
  display:flex;
  align-items: center;
  
  flex-direction: column;
  background-color: #CAF0F8;
  margin-bottom: 20px;
`
export const StyledLink=styled(Link)`
 text-decoration:none;
`

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    
    justify-content: space-between;
    width:50%;
    margin-right: 30px;
`

export const NavOption =styled.li`
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




export const PieIcon = styled(AiOutlinePieChart)`
    width: 50px;
    height: 50px; 
`

export const AnalyticsIcon = styled(DiGoogleAnalytics)`
    width: 50px;
    height: 50px;
`

export const GraphIcon = styled(GoGraph)`
    width: 50px;
    height: 50px;
`