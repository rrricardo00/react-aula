import React from 'react';

export default (props) => {
    const status = props.nota >= 7 ? 'aprovado' : 'reprovado';
    return (

        <div>
            <h2>{props.titulo}</h2>
            <p>{props.subtitulo}</p>
            <p>{props.nota}</p>
            <p>{status}</p>
        </div>
    )

}