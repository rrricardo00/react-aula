import './app.css';
import React from 'react';
import PrimeiroComponente from './components/default/primeiro';
import ComParametro from './components/default/comParametro';
import Fragmento from './components/default/fragmento';
import Aleatorio from './components/default/aleatorio';
import Card from './components/layouts/card';
import Familia from './components/default/familia';


export default () =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <PrimeiroComponente></PrimeiroComponente>
        <div className="cards" >
            {/* <ComParametro titulo="titulo segundo componente" subtitulo="subtitulo segundo componente" nota={6}></ComParametro> */}
            {/* <ComParametro titulo="titulo segundo componente 2" subtitulo="subtitulo segundo componente 2" nota={8}></ComParametro> */}
            {/* <Fragmento></Fragmento> */}
            {/* <Aleatorio  max={100} min={1}></Aleatorio> */}
            <Card><Familia sobrenome="Rosa" terceiroNome="Silvas"></Familia></Card>
            <Card titulo="Com parametro 1" color="#080"><ComParametro titulo="titulo segundo componente" subtitulo="subtitulo segundo componente" nota={6}></ComParametro></Card>
            <Card titulo="Com parametro 2" color="#512"><ComParametro titulo="titulo segundo componente 2" subtitulo="subtitulo segundo componente 2" nota={8}></ComParametro></Card>
            <Card titulo="Desafio aleatorio" color="#035"><Aleatorio max={100} min={1}></Aleatorio></Card>
            <Card titulo="Fragmento" color="#509"><Fragmento></Fragmento></Card>
        </div>
    </div>

