import React from 'react';
import IndiretaFilho from './indiretaFilha'

export default props => {

    let nome = "";
    let idade = 0;
    let nerd = false;

    function fornecerInfos(nomeP, idadeP, nerdP) {
        nome = nomeP;
        idade = idadeP;
        nerd = nerdP;
    }



    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{nerd ? "Verdadeiro" : "Falso"}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInfos} teste="teste"></IndiretaFilho>
        </div>
    )
}