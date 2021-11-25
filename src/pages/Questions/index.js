import React, { useContext } from "react";
import {  VictoryBar,VictoryChart,VictoryStack,VictoryLabel,VictoryAxis } from "victory";
import {BgContainer, ColorIcon, GraphContainer, LegendContainer, QuestionContainer, TitleDiv } from "../First/styles";

import "gridjs/dist/theme/mermaid.css";
import Header from "../../components/Header";
import QuestionTitle from "../../components/QuestionTitle";
import SelectCompany from "../../components/SelectCompany";

import AuthContext from "../../storage/auth-context";
import DisplayTable from "../../components/DisplayTable";
import { MenuContainer, MenuList, MenuOption } from "./styles";
import SelectSection from "../../components/SelectSection";



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


const getDataset=(question)=>{
  const size=question.length
  
  const first=()=>{
    const list=[]
    for(let i=0;i<size;i++){
      list.push({x: (i+1).toString(), y: question[i][1]})
    }
    return list.reverse()
  }
  const second=()=>{
    const list=[]
    for(let i=0;i<size;i++){
      list.push({x: (i+1).toString(), y: question[i][2]})
    }
    return list.reverse()
  }
  const third=()=>{
    const list=[]
    for(let i=0;i<size;i++){
      list.push({x: (i+1).toString(), y: question[i][3]})
    }
    return list.reverse()
  }
  const fourth=()=>{
    const list=[]
    for(let i=0;i<size;i++){
      list.push({x: (i+1).toString(), y: question[i][4]})
    }
    return list.reverse()
  }
  
  const dataset=[
    first(),
    second(),
    third(),
    fourth()
  ];
  return transformData(dataset)
}

const getLabels=(question)=>{
  const size=question.length
  const list=[]
  for(let i=0;i<size;i++){
    list.push((i+1).toString())
  }
}



export default function Questions(){
  const {question,selectedSection}=useContext(AuthContext)
  
  const header=[
  {title:['Área','Discordo fortemente','Discordo mais \nque concordo','Concordo mais \nque discordo','Concordo fortemente','NOTA'],
background:[,"#FF5050", "#FFC000", "#92D050",'#00B050','#B3CEFA']},{}]
  
  
getLabels(question.q12)
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


  const Section1=()=>{
    return(
    <>
    <QuestionTitle>11. A principal causa dos acidentes de trabalho é o azar ou a fatalidade.</QuestionTitle>
  <QuestionContainer>
    <DisplayTable header={header[0]} info={question.q11}/>
    <GraphContainer > 
        <VictoryChart height={400} 
            width={600}
            domainPadding={{ x: 20, y: 0 }}
            horizontal
          >
              <VictoryStack
                colorScale={["#FF5050", "#FFC000", "#92D050",'#00B050']}
              >
                {getDataset(question.q11).map((data, i) => {
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
                    //duration: 500,
                    
                  }}
                  data={data} key={i}/>;
                })}
              </VictoryStack>
              <VictoryAxis dependentAxis
                tickFormat={(tick) => `${tick}%`}
                style={{ tickLabels: { fontSize: 16 } }}               
              />
              <VictoryAxis
                tickFormat={getLabels(question.q12)}
                height={200}
            />
          </VictoryChart>
    </GraphContainer>
  </QuestionContainer>
        


<QuestionTitle>12. Em caso de acidente, sempre se procura um culpado por ele.</QuestionTitle>
  <QuestionContainer>
    <DisplayTable header={header[0]} info={question.q12}/>
    <GraphContainer > 
        <VictoryChart height={400} 
            width={600}
            domainPadding={{ x: 20, y: 0 }}
            horizontal
          >
              <VictoryStack
                colorScale={["#FF5050", "#FFC000", "#92D050",'#00B050']}
              >
                {getDataset(question.q12).map((data, i) => {
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
                    //duration: 500,
                   
                  }}
                  data={data} key={i}/>;
                })}
              </VictoryStack>
              <VictoryAxis dependentAxis
                tickFormat={(tick) => `${tick}%`}
                style={{ tickLabels: { fontSize: 16 } }}               
              />
              <VictoryAxis
                tickFormat={getLabels(question.q12)}
                height={200}
            />
          </VictoryChart>
    </GraphContainer>
  </QuestionContainer>
    </>
    )
  }

  const Section2=()=>{
    return(
      <>
      <QuestionTitle>11. A principal causa dos acidentes de trabalho é o azar ou a fatalidade.</QuestionTitle>
    <QuestionContainer>
      <DisplayTable header={header[0]} info={question.q11}/>
      <GraphContainer > 
          <VictoryChart height={400} 
              width={600}
              domainPadding={{ x: 20, y: 0 }}
              horizontal
            >
                <VictoryStack
                  colorScale={["#FF5050", "#FFC000", "#92D050",'#00B050']}
                >
                  {getDataset(question.q11).map((data, i) => {
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
                      //duration: 500,
                      
                    }}
                    data={data} key={i}/>;
                  })}
                </VictoryStack>
                <VictoryAxis dependentAxis
                  tickFormat={(tick) => `${tick}%`}
                  style={{ tickLabels: { fontSize: 16 } }}               
                />
                <VictoryAxis
                  tickFormat={getLabels(question.q12)}
                  height={200}
              />
            </VictoryChart>
      </GraphContainer>
    </QuestionContainer>
          
  
  
  <QuestionTitle>12. Em caso de acidente, sempre se procura um culpado por ele.</QuestionTitle>
    <QuestionContainer>
      <DisplayTable header={header[0]} info={question.q12}/>
      <GraphContainer > 
          <VictoryChart height={400} 
              width={600}
              domainPadding={{ x: 20, y: 0 }}
              horizontal
            >
                <VictoryStack
                  colorScale={["#FF5050", "#FFC000", "#92D050",'#00B050']}
                >
                  {getDataset(question.q12).map((data, i) => {
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
                      //duration: 500,
                     
                    }}
                    data={data} key={i}/>;
                  })}
                </VictoryStack>
                <VictoryAxis dependentAxis
                  tickFormat={(tick) => `${tick}%`}
                  style={{ tickLabels: { fontSize: 16 } }}               
                />
                <VictoryAxis
                  tickFormat={getLabels(question.q12)}
                  height={200}
              />
            </VictoryChart>
      </GraphContainer>
    </QuestionContainer>
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
