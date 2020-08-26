import React from 'react';
import produtos from '../../data/produto.js';


const listaProdutos = produtos.map(item => {

    return (

        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.produto}</td>
            <td>{item.preco}</td>
        </tr>

    );

});

export default props => {
    return (
        <div>
            <table style={{width: '100%', textAlign: "center"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProdutos}
                </tbody>

            </table>


        </div>
    )

}