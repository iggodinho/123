import React, { useContext } from 'react';


import { NavOption,NavList, PieIcon, GraphIcon, AnalyticsIcon, HeaderContainer, StyledLink } from './styles';

export default function Header({location}){

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
          
          
    </NavList>
    </HeaderContainer>
  )
}