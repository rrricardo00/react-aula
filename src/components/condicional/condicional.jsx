import React from 'react';
import IF from './if.js';

export default props => {

    const numero = props.numero % 2 === 0;
    const usuario = props.usuario || {};
    return (
        <div>
            {/* {numero ? <span>Par</span> : <span>Ímpar</span>} */}

            <IF test={usuario && usuario.nome}>
                <div>Bem vindo {usuario.nome}</div>
            </IF>
            <IF test={!usuario || !usuario.nome}>
                <div>Bem vindo Abigãozão</div>
            </IF>



        </div>



    )



}