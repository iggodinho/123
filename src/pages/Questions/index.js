import React, { useContext } from "react";
import {BgContainer } from "../First/styles";
import "gridjs/dist/theme/mermaid.css";
import Header from "../../components/Header";
import SelectCompany from "../../components/SelectCompany";
import AuthContext from "../../storage/auth-context";
import SelectSection from "../../components/SelectSection";
import GraphQuestion from "../../components/GraphQuestion";

export default function Questions(){
  const {question,selectedSection}=useContext(AuthContext)
  
  const header=[
  {title:['Área','Discordo fortemente','Discordo mais \nque concordo','Concordo mais \nque discordo','Concordo fortemente','NOTA'],
background:[,"#FF5050", "#FFC000", "#92D050",'#00B050','#B3CEFA']},{}]
  



  const Section1=()=>{
    return(
    <>
    <GraphQuestion title='11. A principal causa dos acidentes de trabalho é o azar ou a fatalidade.'
      header={header[0]}
      question={question.q11}
      />
  
      <GraphQuestion title='12. Em caso de acidente, sempre se procura um culpado por ele.'
      header={header[0]}
      question={question.q12}
      />
    </>
    )
  }

  const Section2=()=>{
    return(
      <>
      <GraphQuestion title='(seçao c) 11. A principal causa dos acidentes de trabalho é o azar ou a fatalidade.'
      header={header[0]}
      question={question.q11}
      />
  
      <GraphQuestion title='12. Em caso de acidente, sempre se procura um culpado por ele.'
      header={header[0]}
      question={question.q12}
      />
      
      </>
    )
  }


  const DisplaySelectedSection=()=>{
    if(selectedSection.value==='B'){
      return <Section1/>
    }
    else if(selectedSection.value==='C'){
      return <Section2/>
    }
    else{
      return <Section1/>
    }
  }


    return(
        <>
        

<Header location='/questoes'/>
<SelectCompany/>
<SelectSection/>
<BgContainer>
  <DisplaySelectedSection/>
  
</BgContainer>
  </>  
    )
}
