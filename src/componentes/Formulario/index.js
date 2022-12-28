import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({aoCadastrar, times, posicoes, aoCriarTime}) => {

    const[nome, setNome] = useState('')
    const[imagem, setImagem] = useState('')
    const[posicao, setPosicao] = useState('')
    const[time, setTime] = useState('')
    const[numero, setNumero] = useState('')

    const[nomeTime, setNomeTime] = useState('')
    const[corTime, setCorTime] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            id: uuidv4(), nome, posicao, numero, imagem, time 
        })
        setNome('')
        setImagem('')
        setPosicao('')
        setTime('')
        setNumero('')
    }
    
    return (
        <section className="formulario-container">
            <form className='formulario' onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <Campo 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite o nome do jogador" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <ListaSuspensa 
                    required={true} 
                    label="Posição" 
                    itens={posicoes} 
                    valor={posicao}
                    aoAlterado={valor => setPosicao(valor)}
                />
                <Campo 
                    required={true} 
                    label="Número" 
                    placeholder="Digite o número do jogador" 
                    valor={numero}
                    aoAlterado={valor => setNumero(valor)}
                />
                <Campo 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    aoAlterado={valor => setImagem(valor)} 
                />
                <ListaSuspensa 
                    required={true} 
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao texto='Criar card' />
            </form>
            <form className='formulario' onSubmit={(evento) => {
                evento.preventDefault()
                aoCriarTime({ nome: nomeTime, cor: corTime})
                setNomeTime('')
                setCorTime('')
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo 
                    required 
                    label="Nome" 
                    placeholder="Digite o nome do time" 
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo 
                    required 
                    label="Cor"
                    type='color' 
                    placeholder="Digite a cor do time" 
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao  texto='Criar um novo time' />
            </form>
        </section>
    )
}

export default Formulario