import React, { useContext } from "react";
import {  VictoryBar,VictoryChart,VictoryStack,VictoryLabel,VictoryAxis } from "victory";
import {BgContainer, ColorIcon, GraphContainer, LegendContainer, QuestionContainer, TitleDiv } from "../First/styles";

import "gridjs/dist/theme/mermaid.css";
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




export default function Questions(){
  const {question}=useContext(AuthContext)
  
  const header=[[],
  {title:['Área','Concordo fortemente','Concordo mais \nque discordo','Discordo mais \nque concordo','Discordo fortemente'],
background:[,"#FF5050", "#FFC000", "#92D050",'#00B050']}]
  
  
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
        

<Header location='/questoes'/>
<SelectCompany/>

<BgContainer>
  
  <QuestionTitle>A principal causa dos acidentes de trabalho é o azar ou a fatalidade.</QuestionTitle>
  <QuestionContainer>
  <DisplayTable header={header[1]} info={question.causa}/>

<GraphContainer >
        
        <VictoryChart height={400} 
            width={600}
            domainPadding={{ x: 20, y: 0 }}
            horizontal
          >
              <VictoryStack
              
                colorScale={["#FF5050", "#FFC000", "#92D050",'#00B050']}
              >
                {dataset.map((data, i) => {
                  
                  const percentage=(x)=>{
                      if(Math.round(x)!=0){
                        return Math.round(x)+"%"
                      }
                      else{
                        return null
                      }
                  }
                  
                  return <VictoryBar 
                  labelComponent={<CenteredLabel />}
                  barWidth={20}
                  labels={({ datum }) => percentage(datum.y)}
                  style={{ labels: { fill: "black",fontSize:'14px',textAnchor:'middle'}}}
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                  }}
                  data={data} key={i}/>;
                })}
              </VictoryStack>
              <VictoryAxis dependentAxis
                tickFormat={(tick) => `${tick}%`}
                style={{ tickLabels: { fontSize: 16 } }}
              
                
              />
              <VictoryAxis
                tickFormat={["", "", "", "", "",'','']}
                //style={{ tickLabels: { fontSize: 10 } }}
                height={200}
                
            />
          </VictoryChart>
          
        </GraphContainer>
        </QuestionContainer>
        

</BgContainer>
  </>  
    )
}
