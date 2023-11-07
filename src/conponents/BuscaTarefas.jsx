import { useEffect, useState } from "react";

/* const task =[
    {id: '1', title: 'MInha tarefa 1'},
    {id: '2', title: 'MInha tarefa 2'},
    {id: '3', title: 'MInha tarefa 3'},
    {id: '4', title: 'MInha tarefa 4'},
] */

export default function BuscaTarefas(){
const [tarefas, setTarefas] = useState([]);
    useEffect(()=>{
    async function buscarDados(){
        const resultado = await fetch('https://jsonplaceholder.typicode.com/todos');
        const resFinal = await resultado.json();
        return resFinal;
    }
    buscarDados().then(res => setTarefas(res))
},[])

    return(
        <ol>
            {tarefas.map((tarefa) =>{
                return(
                    <div key={tarefa.id}>
                    {tarefa.completed ?
                    <li style={{ background: 'green' }}>{tarefa.title}<span> - - COMPLETA</span></li>
                    : <li style={{ background: 'orange' }}>{tarefa.title}</li>}
                    <hr/>
                    
                        

                    </div>
                )
            })}
        </ol>
    )
}