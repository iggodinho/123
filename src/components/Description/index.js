import React from "react";
import { TextContainer } from "./styles";

export default function Description({children}){
    return(
        <>
        <TextContainer>
            {children}
        </TextContainer>
        </>
    )
}