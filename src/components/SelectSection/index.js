import React,{useContext} from "react";
import Select from 'react-select';
import { BgContainer, SelectContainer, SelectedCompanyContainer, SelectedTitle, Title } from '../SelectCompany/styles';
import TextTransition, { presets } from "react-text-transition";
import AuthContext from "../../storage/auth-context";

export default function SelectSection(){
    const {selectedSection,setSelectedSection,sections}=useContext(AuthContext)

    return(
        <>
            <BgContainer>
            <Title>Selecione a seção de perguntas desejada.</Title>
            <SelectContainer style={{'width':'350px'}}>
             <Select options={sections} 
             placeholder={selectedSection.label}
             noOptionsMessage={({}) =>  "Empresa não encontrada"} 
             isClearable={true} 
             onChange={(option, triggeredAction) => {
                if (triggeredAction.action === 'clear') {
                    setSelectedSection(sections[0])
                    
                }
                else{
                    setSelectedSection(option)

                }
            }}
            
             />
            </SelectContainer>
            
        </BgContainer>
        </>
    )
}