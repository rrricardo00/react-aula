import './card'
import React from 'react';

export default props => {

    return (
        <div>
            <h2>Card</h2>
            <div>conteúdo</div>
            <div>{props.titulo}</div>
        </div>

    );

}