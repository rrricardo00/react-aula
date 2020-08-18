import React from 'react';

export default props => {
    return(
        <div>
            {props.nome} <strong>{props.sobrenome} {props.terceiroNome}</strong>
        </div>
    )
}