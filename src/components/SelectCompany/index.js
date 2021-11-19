import React,{useState,useEffect,useContext} from "react";
import Select from 'react-select';
import { BgContainer, SelectContainer, Title } from "./styles";

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
            <Title>Empresa selecionada: {selectedCompany.label}</Title>
        </BgContainer>
    )
}