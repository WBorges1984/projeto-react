import { useEffect, useState } from "react";

const MinhaLista= [
    {id: '1', value:'Laranja'},
    {id: '2', value:'Pera'},
    {id: '3', value:'Maça'},
]

export default function MeuComponente(){
const [produtos, setProdutos] = useState(MinhaLista);
const [pesquisa, SetPesquisa]=useState('');

useEffect(
    ()=>{
        if(pesquisa){
        const novaList = MinhaLista.filter((item)=>{
            return item.value.toLowerCase().includes(pesquisa.toLowerCase())
        })
        setProdutos(novaList)
    }else {setProdutos(MinhaLista)}
    },[pesquisa]
)
    return(
    <div>
        <h1>Pesquisa</h1>
        <input
            value={pesquisa}
            onChange={(e)=>SetPesquisa(e.target.value)}
            placeholder="Pesquise aqui" />
        {produtos.map((item) =>{
            return(
                <div key={item.id}>
                    <h3>{item.value}</h3>
                </div>
            )
        })}
    </div>)
}
