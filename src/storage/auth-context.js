import React, { useState, useEffect } from 'react';

export function getInfo(list,info){
    const index = list.findIndex(x => x.empresa.label ===info);
   
      const filteredList = list.filter(function(i){ 
        const check=list.indexOf(i);
        
         return check === index;
     });
     
     return filteredList[0]
  }

const AuthContext = React.createContext({
  
  
});
export const AuthContextProvider = (props) => {
    const empresas = [
        { value: 'mexilhao', label: 'Mexilhão' },
        { value: 'bram', label: 'Bram' },
        { value: 'empresa 3', label: 'Empresa 3' },
        { value: 'empresa 4', label: 'Empresa 4' }
      ]
    const data=[{
        empresa:empresas[0],
        dados:[['Liderança Petrobras',	18],['SMS',12],['Supervisão Contratada/Encarregado',11],
        ['Operação+Manutenção+Inspeção(BR)',62], ['Manutenção Contratada',53], ['Movimentação de Cargas',	17],['Hotelaria',30],['Total',	203]],
        resultados:[['Liderança Petrobras', 0 ,18], ['SMS', 0 ,12], ['Supervisão contratada/ Encarregado', 0 ,12], 
        ['Operação + Manutenção + Inspeção (BR)', 11 ,51],['Manutenção Contratada', 0 ,53], 
        ['Movimentação de Cargas', 1 ,16], ['Hotelaria', 1 ,29], ['Total', 13 ,189]],
        sexo:[['Liderança Petrobras', 0 ,18], ['SMS', 0 ,12], ['Supervisão contratada/ Encarregado', 0 ,12], 
        ['Operação + Manutenção + Inspeção (BR)', 11 ,51],['Manutenção Contratada', 0 ,53], 
        ['Movimentação de Cargas', 1 ,16], ['Hotelaria', 1 ,29], ['Total', 13 ,189]],
        causa:[['Liderança Petrobras', 9 ,8,1,7], ['SMS', 9,7,1,0], ['Supervisão contratada/ Encarregado', 7 ,2,4,1], 
        ['Operação + Manutenção + Inspeção (BR)', 33 ,27,2,0],['Manutenção Contratada', 27 ,11,6,8], 
        ['Movimentação de Cargas', 14 ,6,2,0], ['Hotelaria', 15 ,7,7,7], ['Total', 13 ,189,222,25]],
        idade:[['Liderança Petrobras',1	,6,	9	,2,	0], ['SMS', 0	,4,	4	,4,	0], ['Supervisão contratada/ Encarregado', 3,	3	,4,	1,	0], 
        ['Operação + Manutenção + Inspeção (BR)', 4,	28,	20,	9	,1],['Manutenção Contratada', 8	,20,	18,	4	,0], 
        ['Movimentação de Cargas', 0	,3,	9	,4,	0], ['Hotelaria', 11,	12,	5,	2	,0], ['Total', 27	,76,	69,	26,	1]],
        escolaridade:[['Liderança Petrobras',0,	0	,0,	1	,	3,	14], ['SMS',0,	0	,0,	4	,	7	,1], ['Supervisão contratada/ Encarregado',0,	0	,0,	7	,	2	,2], 
        ['Operação + Manutenção + Inspeção (BR)', 0,	0,	0	,20	,	14,	28],['Manutenção Contratada',0	,3	,3,	37	,	6	,4], 
        ['Movimentação de Cargas', 1,	1	,1,	14	,	0	,0], ['Hotelaria', 0,	1	,0,	24,		1	,4], ['Total', 1,	5	,4,	107	,	33,	53]]
        
      },
      {
        empresa:empresas[1],
        dados:[['Liderança Petrobras',	18],['SMS',18],['Supervisão Contratada/Encarregado',11],
        ['Operação+Manutenção+Inspeção(BR)',68], ['Manutenção Contratada',53], ['Movimentação de Cargas',	17],['Hotelaria',30],['Total',	215]],
        resultados:[['Liderança Petrobras', 0 ,18], ['SMS', 0 ,12], ['Supervisão contratada/ Encarregado', 0 ,12], 
        ['Operação + Manutenção + Inspeção (BR)', 11 ,51],['Manutenção Contratada', 0 ,53], 
        ['Movimentação de Cargas', 1 ,16], ['Hotelaria', 15 ,15], ['Total', 27 ,175]],
        sexo:[['Liderança Petrobras', 0 ,18], ['SMS', 0 ,12], ['Supervisão contratada/ Encarregado', 0 ,12], 
        ['Operação + Manutenção + Inspeção (BR)', 11 ,51],['Manutenção Contratada', 0 ,53], 
        ['Movimentação de Cargas', 1 ,16], ['Hotelaria', 1 ,29], ['Total', 13 ,189]],
        causa:[['Liderança Petrobras', 9 ,8,1,0], ['SMS', 9,2,1,0], ['Supervisão contratada/ Encarregado', 6 ,4,3,1], 
        ['Operação + Manutenção + Inspeção (BR)', 33 ,27,2,0],['Manutenção Contratada', 27 ,11,7,8], 
        ['Movimentação de Cargas', 8 ,6,22,1], ['Hotelaria', 0 ,7,7,15], ['Total', 13 ,189,222,25]],
        idade:[['Liderança Petrobras', 9 ,8,1,0,1], ['SMS', 9,2,1,0,1], ['Supervisão contratada/ Encarregado', 6 ,4,3,1,1], 
        ['Operação + Manutenção + Inspeção (BR)', 33 ,27,2,0,1],['Manutenção Contratada', 27 ,11,7,8,1], 
        ['Movimentação de Cargas', 8 ,6,22,1,1], ['Hotelaria', 0 ,7,7,15,1], ['Total', 13 ,189,222,25,7]],
        escolaridade:[['Liderança Petrobras',0,	0	,0,	1	,	3,	14], ['SMS',0,	0	,0,	4	,	7	,1], ['Supervisão contratada/ Encarregado',0,	0	,0,	7	,	2	,2], 
        ['Operação + Manutenção + Inspeção (BR)', 0,	0,	0	,20	,	14,	28],['Manutenção Contratada',0	,3	,3,	37	,	6	,4], 
        ['Movimentação de Cargas', 1,	1	,1,	14	,	0	,0], ['Hotelaria', 0,	1	,0,	24,		1	,4], ['Total', 1,	5	,4,	107	,	33,	53]]
      
      },
      {
        empresa:empresas[2],
        dados:[['Liderança Petrobras',	18],['SMS',12],['Supervisão Contratada/Encarregado',12],
        ['Operação+Manutenção+Inspeção(BR)',62], ['Manutenção Contratada',53], ['Movimentação de Cargas',	27],['Hotelaria',30],['Total',	214]],
        resultados:[['Liderança Petrobras', 0 ,18], ['SMS', 0 ,12], ['Supervisão contratada/ Encarregado', 0 ,12], 
        ['Operação + Manutenção + Inspeção (BR)', 11 ,51],['Manutenção Contratada', 3 ,50], 
        ['Movimentação de Cargas', 1 ,16], ['Hotelaria', 1 ,29], ['Total', 16 ,186]],
        sexo:[['Liderança Petrobras', 0 ,18], ['SMS', 0 ,12], ['Supervisão contratada/ Encarregado', 0 ,12], 
        ['Operação + Manutenção + Inspeção (BR)', 11 ,51],['Manutenção Contratada', 0 ,53], 
        ['Movimentação de Cargas', 1 ,16], ['Hotelaria', 1 ,29], ['Total', 13 ,189]],
        causa:[['Liderança Petrobras', 9 ,8,1,0], ['SMS', 9,2,1,0], ['Supervisão contratada/ Encarregado', 6 ,2,1,1], 
        ['Operação + Manutenção + Inspeção (BR)', 33 ,27,2,0],['Manutenção Contratada', 27 ,11,6,8], 
        ['Movimentação de Cargas', 8 ,6,2,1], ['Hotelaria', 13 ,7,7,2], ['Total', 13 ,189,222,25]],
        idade:[['Liderança Petrobras', 9 ,8,1,0,1], ['SMS', 9,2,1,0,1], ['Supervisão contratada/ Encarregado', 6 ,4,3,1,1], 
        ['Operação + Manutenção + Inspeção (BR)', 33 ,27,2,0,1],['Manutenção Contratada', 27 ,11,7,8,1], 
        ['Movimentação de Cargas', 8 ,6,22,1,1], ['Hotelaria', 0 ,7,7,15,1], ['Total', 13 ,189,222,25,7]],
        escolaridade:[['Liderança Petrobras',0,	0	,0,	1	,	3,	14], ['SMS',0,	0	,0,	4	,	7	,1], ['Supervisão contratada/ Encarregado',0,	0	,0,	7	,	2	,2], 
        ['Operação + Manutenção + Inspeção (BR)', 0,	0,	0	,20	,	14,	28],['Manutenção Contratada',0	,3	,3,	37	,	6	,4], 
        ['Movimentação de Cargas', 1,	1	,1,	14	,	0	,0], ['Hotelaria', 0,	1	,0,	24,		1	,4], ['Total', 1,	5	,4,	107	,	33,	53]]
      },
      {
        empresa:empresas[3],
        dados:[['Liderança Petrobras',	28],['SMS',22],['Supervisão Contratada/Encarregado',11],
        ['Operação+Manutenção+Inspeção(BR)',62], ['Manutenção Contratada',53], ['Movimentação de Cargas',	17],['Hotelaria',30],['Total',	223]],
        resultados:[['Liderança Petrobras', 9 ,9], ['SMS', 0 ,12], ['Supervisão contratada/ Encarregado', 6 ,6], 
        ['Operação + Manutenção + Inspeção (BR)', 11 ,51],['Manutenção Contratada', 0 ,53], 
        ['Movimentação de Cargas', 1 ,16], ['Hotelaria', 1 ,29], ['Total', 28 ,174]],
        sexo:[['Liderança Petrobras', 0 ,18], ['SMS', 0 ,12], ['Supervisão contratada/ Encarregado', 0 ,12], 
        ['Operação + Manutenção + Inspeção (BR)', 11 ,51],['Manutenção Contratada', 0 ,53], 
        ['Movimentação de Cargas', 1 ,16], ['Hotelaria', 1 ,29], ['Total', 13 ,189]],
        causa:[['Liderança Petrobras', 9 ,4,1,4], ['SMS', 9,2,1,17], ['Supervisão contratada/ Encarregado', 6 ,2,4,25], 
        ['Operação + Manutenção + Inspeção (BR)', 33 ,27,2,0],['Manutenção Contratada', 27 ,11,6,8], 
        ['Movimentação de Cargas', 8 ,6,5,1], ['Restauração', 13 ,7,7,2], ['Total', 13 ,189,222,25]],
        idade:[['Liderança Petrobras', 9 ,8,1,0,1], ['SMS', 9,2,1,0,1], ['Supervisão contratada/ Encarregado', 6 ,4,3,1,1], 
        ['Operação + Manutenção + Inspeção (BR)', 33 ,27,2,0,1],['Manutenção Contratada', 27 ,11,7,8,1], 
        ['Movimentação de Cargas', 8 ,6,22,1,1], ['Hotelaria', 0 ,7,7,15,1], ['Total', 13 ,189,222,25,7]],
        escolaridade:[['Liderança Petrobras',0,	0	,0,	1	,	3,	14], ['SMS',0,	0	,0,	4	,	7	,1], ['Supervisão contratada/ Encarregado',0,	0	,0,	7	,	2	,2], 
        ['Operação + Manutenção + Inspeção (BR)', 0,	0,	0	,20	,	14,	28],['Manutenção Contratada',0	,3	,3,	37	,	6	,4], 
        ['Movimentação de Cargas', 1,	1	,1,	14	,	0	,0], ['Hotelaria', 0,	1	,0,	24,		1	,4], ['Total', 1,	5	,4,	107	,	33,	53]]
      },
      ]
  const [selectedCompany,setSelectedCompany]=useState(empresas[0])
  const [question,setQuestion]=useState(getInfo(data,selectedCompany.label))
  useEffect(()=>{
    let timer = setTimeout(() => {
        setQuestion(getInfo(data,selectedCompany.label));
      }, 500);
      return () => clearTimeout(timer)
      }, [selectedCompany]);

  return <AuthContext.Provider
    value={{
      selectedCompany:selectedCompany,
      setSelectedCompany:setSelectedCompany,
      empresas:empresas,
      data:data,
      question:question,
      setQuestion:setQuestion
    }}
  >{props.children}</AuthContext.Provider>
};

export default AuthContext;