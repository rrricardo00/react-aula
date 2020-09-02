import React, {useState} from 'react';
import IndiretaFilho from './indiretaFilha'

export default props => {

    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false);
    
    function fornecerInfos(nome, idade, nerd) {
       setNome(nome);
       setIdade(idade);
       setNerd(nerd);
    }



    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{nerd ? "Verdadeiro" : "Falso"}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInfos} teste="teste filha props"></IndiretaFilho>
        </div>
    )
}