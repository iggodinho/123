import React from 'react';
import QuestionTitle from "../../components/QuestionTitle";
import {  VictoryBar,VictoryChart,VictoryStack,VictoryAxis,VictoryLabel } from "victory";
import { GraphContainer, QuestionContainer } from "../../pages/First/styles";
import DisplayTable from '../DisplayTable';

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






export default function GraphQuestion({title,header,question}){
    return(
        <>
        <QuestionTitle>{title}</QuestionTitle>
        <QuestionContainer>
            <DisplayTable header={header} info={question}/>
            <GraphContainer > 
                <VictoryChart height={400} 
                    width={600}
                    domainPadding={{ x: 20, y: 0 }}
                    horizontal
                >
                    <VictoryStack
                        colorScale={["#FF5050", "#FFC000", "#92D050",'#00B050']}
                    >
                        {getDataset(question).map((data, i) => {
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
                        tickFormat={getLabels(question)}
                        height={200}
                    />
                </VictoryChart>
            </GraphContainer>
        </QuestionContainer>
        </>
    )
}