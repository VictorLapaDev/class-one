import React from "react";
import * as Page from "./styled.js";


function CreativeCard(props){
    return(
        <Page.Vizu>
            <Page.Title>{props.title}</Page.Title>
            <Page.Description>{props.description}</Page.Description>
        </Page.Vizu>
    )
}

export default function CreativeComponent() {
    return (
        <Page.Pagina>
                <CreativeCard title="França" description="Pais"/>
                <CreativeCard title="São Paulo" description="Estado"/>
                <CreativeCard title="Curitiba" description="Cidade"/>
        </Page.Pagina>
        
    )
}