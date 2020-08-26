import React from "react";
import alunos from '../../data/alunos.js';

export default props => {
    // const li1 = (<li>{alunos[0].id}) {alunos[0].nome}, nota {alunos[0].nota}</li>);

    const alunosJsx = alunos.map(alunos => {
        return (<li key={alunos.id}>{alunos.id}) {alunos.nome}, nota {alunos.nota}</li>)
    });

    return (
        <div>
            <ul style={{ listStyle: "none" }}>
                {alunosJsx}
            </ul>
        </div>
    )

}