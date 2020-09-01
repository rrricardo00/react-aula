import React from 'react';
import DiretaFilha from './diretaFilha';


export default props =>{
    return (
        <div>
            <DiretaFilha texto="texto 1 da direta filha" numero={20} bool={true}></DiretaFilha>
            <DiretaFilha texto="texto 2 da direta filha" numero={22} bool={false}></DiretaFilha>
        </div>
    )
}