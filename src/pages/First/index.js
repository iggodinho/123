import React, { useEffect, useState,useContext } from "react";
import { VictoryPie,VictoryLabel} from "victory";
import {BgContainer, PieContainer, QuestionContainer} from "./styles";
import Header from "../../components/Header";
import QuestionTitle from "../../components/QuestionTitle";
import SelectCompany from "../../components/SelectCompany";
import AuthContext from "../../storage/auth-context";
import DisplayTable from "../../components/DisplayTable";


function toPercentageTotal(num,total){
      const calc=(num/total*100)
      const percent=Math.round(calc)
      return `${percent}%`
    }


const transformData=(dataset) =>{
  const totals = dataset[0].map((data, i) => {
    return dataset.reduce((memo, curr) => {
      return memo + curr[i].y;
    }, 0);
  });
  return dataset.map((data) => {
    return data.map((datum, i) => {
      return { x: datum.x, y: (datum.y / totals[i]) * 100 };
    });
  });
}




export default function First(){
  const {question}=useContext(AuthContext)
  
  const header=[{title:['Área','Sim','Não'], background:[,'#8CB5F8','#F6B2AC']},
  {title:['Área','Feminino','Masculino'], background:[,'#F6B2AC','#8CB5F8']},
  {title:['Área','20-29','30-39','40-49','50-59','60+'], background:[,'cyan','orange','green','yellow','red']},
]
  
  
  const myDataset = [
    [
        { x: "a", y: question.causa[0][1] },
        { x: "b", y: question.causa[1][1] },
        { x: "c", y: question.causa[2][1] },
        { x: "d", y: question.causa[3][1] },
        { x: "e", y: question.causa[4][1] },
        { x: "f", y: question.causa[5][1] },
        { x: "g", y: question.causa[6][1] },
        
    ],
    [
        { x: "a", y: question.causa[0][2] },
        { x: "b", y: question.causa[1][2] },
        { x: "c", y: question.causa[2][2] },
        { x: "d", y: question.causa[3][2] },
        { x: "e", y: question.causa[4][2] },
        { x: "f", y: question.causa[5][2] },
        { x: "g", y: question.causa[6][2] },
    ],
    [
        { x: "a", y: question.causa[0][3] },
        { x: "b", y: question.causa[1][3] },
        { x: "c", y: question.causa[2][3] },
        { x: "d", y: question.causa[3][3] },
        { x: "e", y: question.causa[4][3] },
        { x: "f", y: question.causa[5][3] },
        { x: "g", y: question.causa[6][3] },
    ],
    [
      { x: "a", y: question.causa[0][4] },
      { x: "b", y: question.causa[1][4] },
      { x: "c", y: question.causa[2][4] },
      { x: "d", y: question.causa[3][4] },
      { x: "e", y: question.causa[4][4] },
      { x: "f", y: question.causa[5][4] },
      { x: "g", y: question.causa[6][4] },
  ],
  
  ];


  






const barLabelStyles = {
  fontSize: 14,
  fill: "black",
  textAnchor: "middle"
};
const CenteredLabel = (props) => {
  const { datum, scale } = props;
  const centerPos = scale.y((datum._y1 - datum._y0) / 2 + datum._y0);

  return (
    <VictoryLabel {...props} style={[barLabelStyles]} x={centerPos} dx={0} />
  );
};
const dataset = transformData(myDataset);

    return(
        <>
        

<Header location='/'/>
<SelectCompany/>
<BgContainer>
  
  <QuestionTitle >Você já sofreu algum acidente na plataforma?</QuestionTitle>

<QuestionContainer>
    
<DisplayTable header={header[0]} info={question.resultados}/>
    
    <PieContainer>
      <VictoryPie
      animate={{
        duration: 1000,
        
      }}
      data={[
        { x: toPercentageTotal(question.resultados.slice(-1)[0][2],parseInt(question.resultados.slice(-1)[0][1])+parseInt(question.resultados.slice(-1)[0][2])),
          y: parseInt(question.resultados.slice(-1)[0][2]) },
        { x: toPercentageTotal(question.resultados.slice(-1)[0][1],parseInt(question.resultados.slice(-1)[0][1])+parseInt(question.resultados.slice(-1)[0][2])), y: parseInt(question.resultados.slice(-1)[0][1]) }
      ]}
      colorScale={['#F6B2AC','#8CB5F8']}
      labelPosition={'centroid'}
    />
    </PieContainer>

</QuestionContainer>

<QuestionTitle>SEXO</QuestionTitle>

<QuestionContainer>
    
<DisplayTable header={header[1]} info={question.sexo}/>
    
    <PieContainer>
      <VictoryPie
      animate={{
        duration: 1000,
        
      }}
      data={[
        { x: toPercentageTotal(question.resultados.slice(-1)[0][2],parseInt(question.resultados.slice(-1)[0][1])+parseInt(question.resultados.slice(-1)[0][2])),
          y: parseInt(question.resultados.slice(-1)[0][2]) },
        { x: toPercentageTotal(question.resultados.slice(-1)[0][1],parseInt(question.resultados.slice(-1)[0][1])+parseInt(question.resultados.slice(-1)[0][2])), y: parseInt(question.resultados.slice(-1)[0][1]) }
      ]}
      colorScale={['#8CB5F8','#F6B2AC']}
      labelPosition={'centroid'}
    />
    </PieContainer>
</QuestionContainer>

<QuestionTitle>IDADE</QuestionTitle>

<QuestionContainer>
    
<DisplayTable header={header[2]} info={question.idade}/>
    
    <PieContainer>
      <VictoryPie
      animate={{
        duration: 1000,
        
      }}
      data={[
        { x: toPercentageTotal(question.resultados.slice(-1)[0][2],parseInt(question.resultados.slice(-1)[0][1])+parseInt(question.resultados.slice(-1)[0][2])),
          y: parseInt(question.resultados.slice(-1)[0][2]) },
        { x: toPercentageTotal(question.resultados.slice(-1)[0][1],parseInt(question.resultados.slice(-1)[0][1])+parseInt(question.resultados.slice(-1)[0][2])), y: parseInt(question.resultados.slice(-1)[0][1]) }
      ]}
      colorScale={['cyan','orange','green','yellow','red']}
      labelPosition={'centroid'}
    />
    </PieContainer>
</QuestionContainer>



</BgContainer>


  </>  
    )
}
