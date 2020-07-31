import React from 'react';
import PrimeiroComponente from './components/default/primeiro';
import ComParametro from './components/default/comParametro';
import Fragmento from './components/default/fragmento';
import Aleatorio from './components/default/aleatorio';
import Card from './components/layouts/card';

export default () =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <PrimeiroComponente></PrimeiroComponente>
        <ComParametro titulo="titulo segundo componente" subtitulo="subtitulo segundo componente" nota={6}></ComParametro>
        <ComParametro titulo="titulo segundo componente 2" subtitulo="subtitulo segundo componente 2" nota={8}></ComParametro>
        {/* <Fragmento></Fragmento> */}
        {/* <Aleatorio  max={100} min={1}></Aleatorio> */}
        <Card titulo="Desafio aleatorio"><Aleatorio  max={100} min={1}></Aleatorio></Card>
        <Card titulo="Fragmento"><Fragmento></Fragmento></Card>
        
    </div>

