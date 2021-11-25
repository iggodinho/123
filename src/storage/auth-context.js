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
      const sections = [
        { value: 'B', label: 'Sistema de gestão em segurança' },
        { value: 'C', label: 'Prioridade em segurança' },
        { value: 'D', label: 'Exigências de comportamentos de conformidade' },
        { value: 'E', label: 'Desenvolvimentos de comportamentos de iniciativa' },
        { value: 'F', label: 'Treinamentos em segurança' },
        { value: 'G', label: 'Riscos e acidentes' },
        { value: 'H', label: 'Integridade' }
      ]  
    const data=[{
        empresa:empresas[0],
        dados:[['Liderança Petrobras',	18],['SMS',12],['Supervisão Contratada/Encarregado',11],
        ['Operação+Manutenção+Inspeção(BR)',62], ['Manutenção Contratada',53], ['Movimentação de Cargas',	17],['Hotelaria',30],['Total',	203]],
        q10:[['Liderança Petrobras', 0 ,18], ['SMS', 0 ,12], ['Supervisão contratada/ Encarregado', 0 ,12], 
        ['Operação + Manutenção + Inspeção (BR)', 11 ,51],['Manutenção Contratada', 0 ,53], 
        ['Movimentação de Cargas', 1 ,16], ['Hotelaria', 1 ,29], ['Total', 13 ,189]],
        sexo:[['Liderança Petrobras', 0 ,18], ['SMS', 0 ,12], ['Supervisão contratada/ Encarregado', 0 ,12], 
        ['Operação + Manutenção + Inspeção (BR)', 11 ,51],['Manutenção Contratada', 0 ,53], 
        ['Movimentação de Cargas', 1 ,16], ['Hotelaria', 1 ,29], ['Total', 13 ,189]],
        q11:[['(1) Liderança Petrobras', 9 ,8,1,0,1.9], ['(2) SMS', 9,2,1,0,1.1], ['(3) Supervisão contratada/ Encarregado', 6 ,2,1,1,2.3], 
        ['(4) Operação + Manutenção + Inspeção (BR)', 33 ,27,2,0,1.7],['(5) Manutenção Contratada', 27 ,11,6,8,3.0], 
        ['(6) Movimentação de Cargas', 8 ,6,2,1,2.5], ['(7) Hotelaria', 13 ,7,7,2,3.1], ['(8) Total', 105 ,63,20,12,2.3]],
        idade:[['Liderança Petrobras',1	,6,	9	,2,	0], ['SMS', 0	,4,	4	,4,	0], ['Supervisão contratada/ Encarregado', 3,	3	,4,	1,	0], 
        ['Operação + Manutenção + Inspeção (BR)', 4,	28,	20,	9	,1],['Manutenção Contratada', 8	,20,	18,	4	,0], 
        ['Movimentação de Cargas', 0	,3,	9	,4,	0], ['Hotelaria', 11,	12,	5,	2	,0], ['Total', 27	,76,	69,	26,	1]],
        escolaridade:[['Liderança Petrobras',0,	0	,0,	1	,	3,	14], ['SMS',0,	0	,0,	4	,	7	,1], ['Supervisão contratada/ Encarregado',0,	0	,0,	7	,	2	,2], 
        ['Operação + Manutenção + Inspeção (BR)', 0,	0,	0	,20	,	14,	28],['Manutenção Contratada',0	,3	,3,	37	,	6	,4], 
        ['Movimentação de Cargas', 1,	1	,1,	14	,	0	,0], ['Hotelaria', 0,	1	,0,	24,		1	,4], ['Total', 1,	5	,4,	107	,	33,	53]],
        estadoCivil:[['Liderança Petrobras',1,14,2,1,0], ['SMS',0,	10,1,1,0], ['Supervisão contratada/ Encarregado',2,7,1,1,0], 
        ['Operação + Manutenção + Inspeção (BR)', 8,43,5,5,1],['Manutenção Contratada',11,31,2,9,0], 
        ['Movimentação de Cargas', 1,	10,0,4,1], ['Hotelaria', 5,20,3,2,0], ['Total', 28,135,14,23,2]],
        company:[['Petrobras',	90],['Gran IHC',50],['LC Refeições',	30],['Engeman',	16],['Macseal',	8],['Kempetro' ,	3],['CETCO',	1],
        ['L A Falcão Bauer',	1],['MARENOSTRUM',	1] ,['Núcleo Engenharia',	1],['UNIVERSAL',	1]],
        experiencia:[['Liderança Petrobras',3,9,5,0,1,0],['SMS',	0	,0,	3	,5,	2	,2],['Supervisão Contratada / Encarregado',	2	,2,	3	,1,	3	,0],
        ['Operação + Manutenção + Inspeção (BR)',	2	,9,	11	,20	,9,	10],['Manutenção Contratada',	1	,16	,14	,15,	5	,1],
        ['Movimentação de Cargas',	0	,1	,9,	5,	1,	0],['Hotelaria',	6,	11,	10	,0,	1	,2], ['TOTAL'	,14	,48	,55,	46,	22,	15]],
        tempo:[['Petrobras'	,0,	6,	18,	53	,	7,	6],['Gran IHC'	,16	,31,	1	,1,		0,	0],['LC Refeições',	5	,20	,5,	0,		0,	0],
        ['Engeman'	,0,	13,	2,	0	,	1	,0],['Macseal',	2,	4,	2,	0,		0,	0],['Kempetro' ,	3	,0,	0,	0	,	0,	0],['CETCO',	0	,0,	1	,0,		0,	0],
        ['L A Falcão Bauer'	,0,	1,	0	,0,		0	,0],['MARENOSTRUM',	0,	1	,0,	0	,	0	,0],['Núcleo Engenharia',	0	,0,	1	,0,		0,	0], ['UNIVERSAL',	1,	0	,0,	0	,	0,	0],['TOTAL'	,27	,76,	30,	54	,	8	,6]],
        q12:[['(1) Liderança Petrobras', 5,	7	,6,	0], ['(2) SMS', 5,	4,	3,	0], ['(3) Supervisão contratada/ Encarregado',2,	0,	3,	6], 
        ['(4) Operação + Manutenção + Inspeção (BR)', 6	,10,	32,	14],['(5) Manutenção Contratada',8,	7,	7,	30], 
        ['(6) Movimentação de Cargas',3,	3,	3,	7], ['(7) Hotelaria', 4,	8	,9,	8], ['(8) Total', 33 ,39,63,65]],
      },
      {
        empresa:empresas[1],
        dados:[['Liderança Petrobras',	18],['SMS',18],['Supervisão Contratada/Encarregado',11],
        ['Operação+Manutenção+Inspeção(BR)',68], ['Manutenção Contratada',53], ['Movimentação de Cargas',	17],['Hotelaria',30],['Total',	215]],
        q10:[['Liderança Petrobras', 0 ,18], ['SMS', 0 ,12], ['Supervisão contratada/ Encarregado', 0 ,12], 
        ['Operação + Manutenção + Inspeção (BR)', 11 ,51],['Manutenção Contratada', 0 ,53], 
        ['Movimentação de Cargas', 1 ,16], ['Hotelaria', 15 ,15], ['Total', 27 ,175]],
        sexo:[['Liderança Petrobras', 0 ,18], ['SMS', 0 ,12], ['Supervisão contratada/ Encarregado', 0 ,12], 
        ['Operação + Manutenção + Inspeção (BR)', 11 ,51],['Manutenção Contratada', 0 ,53], 
        ['Movimentação de Cargas', 1 ,16], ['Hotelaria', 1 ,29], ['Total', 13 ,189]],
        q11:[['(1) Liderança Petrobras', 9 ,8,1,0], ['(2) SMS', 9,2,1,0], ['(3) Supervisão contratada/ Encarregado', 6 ,4,3,1], 
        ['(4) Operação + Manutenção + Inspeção (BR)', 33 ,27,2,0],['(5) Manutenção Contratada', 27 ,11,7,8], 
        ['(6) Movimentação de Cargas', 8 ,6,22,1], ['(7) Hotelaria', 0 ,7,7,15], ['(8) Total', 13 ,189,222,25]],
        idade:[['Liderança Petrobras', 9 ,8,1,0,1], ['SMS', 9,2,1,0,1], ['Supervisão contratada/ Encarregado', 6 ,4,3,1,1], 
        ['Operação + Manutenção + Inspeção (BR)', 33 ,27,2,0,1],['Manutenção Contratada', 27 ,11,7,8,1], 
        ['Movimentação de Cargas', 8 ,6,22,1,1], ['Hotelaria', 0 ,7,7,15,1], ['Total', 13 ,189,222,25,7]],
        escolaridade:[['Liderança Petrobras',0,	0	,0,	1	,	3,	14], ['SMS',0,	0	,0,	4	,	7	,1], ['Supervisão contratada/ Encarregado',0,	0	,0,	7	,	2	,2], 
        ['Operação + Manutenção + Inspeção (BR)', 0,	0,	0	,20	,	14,	28],['Manutenção Contratada',0	,3	,3,	37	,	6	,4], 
        ['Movimentação de Cargas', 1,	1	,1,	14	,	0	,0], ['Hotelaria', 0,	1	,0,	24,		1	,4], ['Total', 1,	5	,4,	107	,	33,	53]],
        estadoCivil:[['Liderança Petrobras',1	,6,	9	,2,	0], ['SMS', 0	,4,	4	,4,	0], ['Supervisão contratada/ Encarregado', 3,	3	,4,	1,	0], 
        ['Operação + Manutenção + Inspeção (BR)', 4,	28,	20,	9	,1],['Manutenção Contratada', 8	,20,	18,	4	,0], 
        ['Movimentação de Cargas', 0	,3,	9	,4,	0], ['Hotelaria', 11,	12,	5,	2	,0], ['Total', 27	,76,	69,	26,	1]],
        company:[['Petrobras',	90],['Gran IHC',50],['LC Refeições',	30],['Engeman',	16],['Macseal',	8],['Kempetro' ,	3],['CETCO',	1],
        ['L A Falcão Bauer',	1],['MARENOSTRUM',	1] ,['Núcleo Engenharia',	1],['UNIVERSAL',	1]],
        experiencia:[['Liderança Petrobras',3,9,5,0,1,0],['SMS',	0	,0,	3	,5,	2	,2],['Supervisão Contratada / Encarregado',	2	,2,	3	,1,	3	,0],
        ['Operação + Manutenção + Inspeção (BR)',	2	,9,	11	,20	,9,	10],['Manutenção Contratada',	1	,16	,14	,15,	5	,1],
        ['Movimentação de Cargas',	0	,1	,9,	5,	1,	0],['Hotelaria',	6,	11,	10	,0,	1	,2], ['TOTAL'	,14	,48	,55,	46,	22,	15]],
        tempo:[['Petrobras'	,0,	6,	18,	53	,	7,	6],['Gran IHC'	,16	,31,	1	,1,		0,	0],['LC Refeições',	5	,20	,5,	0,		0,	0],
        ['Engeman'	,0,	13,	2,	0	,	1	,0],['Macseal',	2,	4,	2,	0,		0,	0],['Kempetro' ,	3	,0,	0,	0	,	0,	0],['CETCO',	0	,0,	1	,0,		0,	0],
        ['L A Falcão Bauer'	,0,	1,	0	,0,		0	,0],['MARENOSTRUM',	0,	1	,0,	0	,	0	,0],['Núcleo Engenharia',	0	,0,	1	,0,		0,	0], ['UNIVERSAL',	1,	0	,0,	0	,	0,	0],['TOTAL'	,27	,76,	30,	54	,	8	,6]],
        q12:[['(1) Liderança Petrobras', 7,	5	,6,	0], ['(2) SMS', 5,	4,	0,	3], ['(3) Supervisão contratada/ Encarregado',2,	0,	3,	6], 
        ['(4) Operação + Manutenção + Inspeção (BR)', 6	,10,	32,	14],['(5) Manutenção Contratada',8,	7,	7,	30], 
        ['(6) Movimentação de Cargas',3,	3,	3,	7], ['(7) Hotelaria', 4,	8	,9,	8], ['(8) Total', 35 ,37,60,68]],
        
        
      },
      {
        empresa:empresas[2],
        dados:[['Liderança Petrobras',	18],['SMS',12],['Supervisão Contratada/Encarregado',12],
        ['Operação+Manutenção+Inspeção(BR)',62], ['Manutenção Contratada',53], ['Movimentação de Cargas',	27],['Hotelaria',30],['Total',	214]],
        q10:[['Liderança Petrobras', 0 ,18], ['SMS', 0 ,12], ['Supervisão contratada/ Encarregado', 0 ,12], 
        ['Operação + Manutenção + Inspeção (BR)', 11 ,51],['Manutenção Contratada', 3 ,50], 
        ['Movimentação de Cargas', 1 ,16], ['Hotelaria', 1 ,29], ['Total', 16 ,186]],
        sexo:[['Liderança Petrobras', 0 ,18], ['SMS', 0 ,12], ['Supervisão contratada/ Encarregado', 0 ,12], 
        ['Operação + Manutenção + Inspeção (BR)', 11 ,51],['Manutenção Contratada', 0 ,53], 
        ['Movimentação de Cargas', 1 ,16], ['Hotelaria', 1 ,29], ['Total', 13 ,189]],
        q11:[['(1) Liderança Petrobras', 9 ,8,1,0], ['(2) SMS', 9,2,1,0], ['(3) Supervisão contratada/ Encarregado', 6 ,2,1,1], 
        ['(4) Operação + Manutenção + Inspeção (BR)', 33 ,27,2,0],['(5) Manutenção Contratada', 27 ,11,6,8], 
        ['(6) Movimentação de Cargas', 8 ,6,2,1], ['(7) Hotelaria', 13 ,7,7,2], ['(8) Total', 13 ,189,222,25]],
        idade:[['Liderança Petrobras', 9 ,8,1,0,1], ['SMS', 9,2,1,0,1], ['Supervisão contratada/ Encarregado', 6 ,4,3,1,1], 
        ['Operação + Manutenção + Inspeção (BR)', 33 ,27,2,0,1],['Manutenção Contratada', 27 ,11,7,8,1], 
        ['Movimentação de Cargas', 8 ,6,22,1,1], ['Hotelaria', 0 ,7,7,15,1], ['Total', 13 ,189,222,25,7]],
        escolaridade:[['Liderança Petrobras',0,	0	,0,	1	,	3,	14], ['SMS',0,	0	,0,	4	,	7	,1], ['Supervisão contratada/ Encarregado',0,	0	,0,	7	,	2	,2], 
        ['Operação + Manutenção + Inspeção (BR)', 0,	0,	0	,20	,	14,	28],['Manutenção Contratada',0	,3	,3,	37	,	6	,4], 
        ['Movimentação de Cargas', 1,	1	,1,	14	,	0	,0], ['Hotelaria', 0,	1	,0,	24,		1	,4], ['Total', 1,	5	,4,	107	,	33,	53]],
        estadoCivil:[['Liderança Petrobras',1,14,2,1,0], ['SMS',0,	10,1,1,0], ['Supervisão contratada/ Encarregado',2,7,1,1,0], 
        ['Operação + Manutenção + Inspeção (BR)', 8,43,5,5,1],['Manutenção Contratada',11,31,2,9,0], 
        ['Movimentação de Cargas', 1,	10,0,4,1], ['Hotelaria', 5,20,3,2,0], ['Total', 28,135,14,23,2]],
        company:[['Petrobras',	90],['Gran IHC',50],['LC Refeições',	30],['Engeman',	16],['Macseal',	8],['Kempetro' ,	3],['CETCO',	1],
        ['L A Falcão Bauer',	1],['MARENOSTRUM',	1] ,['Núcleo Engenharia',	1],['UNIVERSAL',	1]],
        experiencia:[['Liderança Petrobras',3,9,5,0,1,0],['SMS',	0	,0,	3	,5,	2	,2],['Supervisão Contratada / Encarregado',	2	,2,	3	,1,	3	,0],
        ['Operação + Manutenção + Inspeção (BR)',	2	,9,	11	,20	,9,	10],['Manutenção Contratada',	1	,16	,14	,15,	5	,1],
        ['Movimentação de Cargas',	0	,1	,9,	5,	1,	0],['Hotelaria',	6,	11,	10	,0,	1	,2], ['TOTAL'	,14	,48	,55,	46,	22,	15]],
        tempo:[['Petrobras'	,0,	6,	18,	53	,	7,	6],['Gran IHC'	,16	,31,	1	,1,		0,	0],['LC Refeições',	5	,20	,5,	0,		0,	0],
        ['Engeman'	,0,	13,	2,	0	,	1	,0],['Macseal',	2,	4,	2,	0,		0,	0],['Kempetro' ,	3	,0,	0,	0	,	0,	0],['CETCO',	0	,0,	1	,0,		0,	0],
        ['L A Falcão Bauer'	,0,	1,	0	,0,		0	,0],['MARENOSTRUM',	0,	1	,0,	0	,	0	,0],['Núcleo Engenharia',	0	,0,	1	,0,		0,	0], ['UNIVERSAL',	1,	0	,0,	0	,	0,	0],['TOTAL'	,27	,76,	30,	54	,	8	,6]],
        q12:[['(1) Liderança Petrobras', 5,	7	,6,	0], ['(2) SMS', 5,	4,	3,	0], ['(3) Supervisão contratada/ Encarregado',2,	0,	3,	6], 
        ['(4) Operação + Manutenção + Inspeção (BR)', 6	,10,	32,	14],['(5) Manutenção Contratada',8,	7,	7,	30], 
        ['(6) Movimentação de Cargas',3,	3,	3,	7], ['(7) Hotelaria', 0,	10	,9,	10], ['(8) Total', 29 ,41,63,67]],
      },
      {
        empresa:empresas[3],
        dados:[['Liderança Petrobras',	28],['SMS',22],['Supervisão Contratada/Encarregado',11],
        ['Operação+Manutenção+Inspeção(BR)',62], ['Manutenção Contratada',53], ['Movimentação de Cargas',	17],['Hotelaria',30],['Total',	223]],
        q10:[['Liderança Petrobras', 9 ,9], ['SMS', 0 ,12], ['Supervisão contratada/ Encarregado', 6 ,6], 
        ['Operação + Manutenção + Inspeção (BR)', 11 ,51],['Manutenção Contratada', 0 ,53], 
        ['Movimentação de Cargas', 1 ,16], ['Hotelaria', 1 ,29], ['Total', 28 ,174]],
        sexo:[['Liderança Petrobras', 0 ,18], ['SMS', 0 ,12], ['Supervisão contratada/ Encarregado', 0 ,12], 
        ['Operação + Manutenção + Inspeção (BR)', 11 ,51],['Manutenção Contratada', 0 ,53], 
        ['Movimentação de Cargas', 1 ,16], ['Hotelaria', 1 ,29], ['Total', 13 ,189]],
        q11:[['(1) Liderança Petrobras', 9 ,4,1,4], ['(2) SMS', 9,2,1,17], ['(3) Supervisão contratada/ Encarregado', 6 ,2,4,25], 
        ['(4) Operação + Manutenção + Inspeção (BR)', 33 ,27,2,0],['(5) Manutenção Contratada', 27 ,11,6,8], 
        ['(6) Movimentação de Cargas', 8 ,6,5,1], ['(7) Restauração', 13 ,7,7,2], ['Total(8) ', 13 ,189,222,25]],
        idade:[['Liderança Petrobras', 9 ,8,1,0,1], ['SMS', 9,2,1,0,1], ['Supervisão contratada/ Encarregado', 6 ,4,3,1,1], 
        ['Operação + Manutenção + Inspeção (BR)', 33 ,27,2,0,1],['Manutenção Contratada', 27 ,11,7,8,1], 
        ['Movimentação de Cargas', 8 ,6,22,1,1], ['Hotelaria', 0 ,7,7,15,1], ['Total', 13 ,189,222,25,7]],
        escolaridade:[['Liderança Petrobras',0,	0	,0,	1	,	3,	14], ['SMS',0,	0	,0,	4	,	7	,1], ['Supervisão contratada/ Encarregado',0,	0	,0,	7	,	2	,2], 
        ['Operação + Manutenção + Inspeção (BR)', 0,	0,	0	,20	,	14,	28],['Manutenção Contratada',0	,3	,3,	37	,	6	,4], 
        ['Movimentação de Cargas', 1,	1	,1,	14	,	0	,0], ['Hotelaria', 0,	1	,0,	24,		1	,4], ['Total', 1,	5	,4,	107	,	33,	53]],
        estadoCivil:[['Liderança Petrobras',1,14,2,1,0], ['SMS',0,	10,1,1,0], ['Supervisão contratada/ Encarregado',2,7,1,1,0], 
        ['Operação + Manutenção + Inspeção (BR)', 8,43,5,5,1],['Manutenção Contratada',11,31,2,9,0], 
        ['Movimentação de Cargas', 1,	10,0,4,1], ['Hotelaria', 5,20,3,2,0], ['Total', 28,135,14,23,2]],
        company:[['Petrobras',	90],['Gran IHC',50],['LC Refeições',	30],['Engeman',	16],['Macseal',	8],['Kempetro' ,	3],['CETCO',	1],
        ['L A Falcão Bauer',	1],['MARENOSTRUM',	1] ,['Núcleo Engenharia',	1],['UNIVERSAL',	1]],
        experiencia:[['Liderança Petrobras',3,9,5,0,1,0],['SMS',	0	,0,	3	,5,	2	,2],['Supervisão Contratada / Encarregado',	2	,2,	3	,1,	3	,0],
        ['Operação + Manutenção + Inspeção (BR)',	2	,9,	11	,20	,9,	10],['Manutenção Contratada',	1	,16	,14	,15,	5	,1],
        ['Movimentação de Cargas',	0	,1	,9,	5,	1,	0],['Hotelaria',	6,	11,	10	,0,	1	,2], ['TOTAL'	,14	,48	,55,	46,	22,	15]],
        tempo:[['Petrobras'	,0,	6,	18,	53	,	7,	6],['Gran IHC'	,16	,31,	1	,1,		0,	0],['LC Refeições',	5	,20	,5,	0,		0,	0],
        ['Engeman'	,0,	13,	2,	0	,	1	,0],['Macseal',	2,	4,	2,	0,		0,	0],['Kempetro' ,	3	,0,	0,	0	,	0,	0],['CETCO',	0	,0,	1	,0,		0,	0],
        ['L A Falcão Bauer'	,0,	1,	0	,0,		0	,0],['MARENOSTRUM',	0,	1	,0,	0	,	0	,0],['Núcleo Engenharia',	0	,0,	1	,0,		0,	0], 
        ['UNIVERSAL',	1,	0	,0,	0	,	0,	0],['TOTAL'	,27	,76,	30,	54	,	8	,6]],
        q12:[['(1) Liderança Petrobras', 5,	7	,6,	0], ['(2) SMS', 5,	4,	3,	0], ['(3) Supervisão contratada/ Encarregado',2,	0,	3,	6], 
        ['(4) Operação + Manutenção + Inspeção (BR)', 10	,6,	32,	14],['(5) Manutenção Contratada',8,	7,	17,	20], 
        ['(6) Movimentação de Cargas',3,	3,	3,	7], ['(7) Total', 33 ,27,64,47]],
      },
      ]
  const [selectedCompany,setSelectedCompany]=useState(empresas[0])
  const [selectedSection,setSelectedSection]=useState(sections[0])
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
      setQuestion:setQuestion,
      sections:sections,
      selectedSection:selectedSection,
      setSelectedSection:setSelectedSection,
    }}
  >{props.children}</AuthContext.Provider>
};

export default AuthContext;