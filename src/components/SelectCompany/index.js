import React,{useContext} from "react";
import Select from 'react-select';
import { BgContainer, SelectContainer, SelectedCompanyContainer, SelectedTitle, Title } from "./styles";
import TextTransition, { presets } from "react-text-transition";

import AuthContext from "../../storage/auth-context";


export default function SelectCompany(){
    
    const {selectedCompany,setSelectedCompany,empresas}=useContext(AuthContext)
    
    
    return(
        <BgContainer>
            <Title>Selecione a empresa desejada.</Title>
            <SelectContainer>
             <Select options={empresas} 
             placeholder={selectedCompany.label}
             noOptionsMessage={({}) =>  "Empresa não encontrada"} 
             isClearable={true} 
             onChange={(option, triggeredAction) => {
                if (triggeredAction.action === 'clear') {
                    setSelectedCompany(empresas[0])
                    //setQuestion(getInfo(data,empresas[0]))
                }
                else{
                    setSelectedCompany(option)

                }
            }}
            
             />
            </SelectContainer>
            <SelectedCompanyContainer>
                <Title>Empresa selecionada:  </Title>
                    <SelectedTitle><TextTransition
                    text={selectedCompany.label  }
                    springConfig={ presets.wobbly }/></SelectedTitle>
               
            </SelectedCompanyContainer>
        </BgContainer>
    )
}