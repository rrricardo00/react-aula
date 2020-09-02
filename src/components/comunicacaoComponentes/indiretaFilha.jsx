import React from 'react';

export default props =>{

    const min = 50;
    const max = 70;
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>filha</div>
            <div>{props.teste}</div>
            <button onClick={_ => props.quandoClicar('Ricardo', gerarIdade(), gerarNerd())}>Fornecer informações</button>
        </div>
    )
}