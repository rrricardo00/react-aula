import './card.css'
import React from 'react';

export default props => {

    return (
        
        <div className="card">
            
            <div className="title">{props.titulo}</div>
            <div className="content">conteúdo</div>
        </div>

    );

}