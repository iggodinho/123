import React, { useContext } from 'react';
import AuthContext from '../../storage/auth-context';
import { useNavigate } from "react-router-dom";


import { NavOption,NavList, PieIcon, GraphIcon, AnalyticsIcon, HeaderContainer, StyledLink, LogoutIcon } from './styles';

export default function Header({location}){
  const {onLogout}=useContext(AuthContext)
  const navigate=useNavigate()
  const logoutHandler=()=>{
    onLogout();
    window.location.reload()
    navigate('/')
  }
  const home=location==='/'
  const graph=location==='/questoes'
  const compare=location==='/comparacao'

  return(
    <HeaderContainer>
    <NavList>
          <StyledLink to='/' ><NavOption active={home}>
            <PieIcon/>Demográfico
          </NavOption>
          </StyledLink>
          <StyledLink to='/questoes'>
            <NavOption active={graph}><GraphIcon/>Questões
          </NavOption></StyledLink>
          <StyledLink to='/comparacao' >
            <NavOption active={compare} ><AnalyticsIcon/>Comparador
          </NavOption></StyledLink>
          
          <NavOption onClick={logoutHandler}><LogoutIcon/>Sair</NavOption>
          
    </NavList>
    </HeaderContainer>
  )
}