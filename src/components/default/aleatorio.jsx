import React from 'react';

export default (props) => {
    const aleatorio = Math.round(Math.random() * (props.max - props.min) + props.min);
    return (
        <div>
            <h2>Número aleatório</h2>
            <p>Número entre {props.min} e {props.max} = {aleatorio}</p>
        </div>
    );
}
