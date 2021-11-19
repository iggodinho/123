import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TableContainer } from "./styles";

export default function DisplayTable({header,info}){
    console.log(info)

    const top=header.title.map((item,index)=>{
        const style={
            backgroundColor:header.background[index],
            textAlign:'center'
        }
        
        return(
           <th style={style} >
               {item}
           </th> 
        )
    })
    const size=Array.from(info.keys())
  
    const bot=size.map((item)=>{
        const newTable=info[item].map((item)=>{
                
                return(
                    <>
                    <td>{item}</td>
                    </>
                )
            })
            return(
                <tr>
                    {newTable}
                </tr>
            )
        }
    )
            
    

    

    

    return(
        <TableContainer>
        <Table striped bordered hover>
  <thead>
    <tr>
      {top}
    </tr>
  </thead>
  <tbody>
    {bot}
    
  </tbody>
</Table>


        </TableContainer>
    )
}


/*
<tr>
      {newTable}
    </tr>
    <tr>
      
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
*/