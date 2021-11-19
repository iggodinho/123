import React from "react";
import { TitleContainer } from "./styles";

export default function QuestionTitle({children}){
    return(
        <>
        <TitleContainer>
            {children}
        </TitleContainer>
        </>
    )
}