import React from 'react';
import Membro from './membro';

export default props => {
    return(
        <div>
            
            <Membro nome="Ricardo" sobrenome={props.sobrenome}></Membro>
            <Membro nome="Josualdo" {...props}></Membro>
            <Membro nome="Virgulino" sobrenome={props.sobrenome}></Membro>
            
        </div>
    )
}