import React from 'react';

export default props =>{
    return (
        <div>
            <div>Filha</div>
            <button onClick={_ => props.quandoClicar('Ricardo', 29, true)}>Fornecer informações</button>
        </div>
    )
}