import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const posicoes = [
        'PG - Armador',
        'SG - Ala-Armador',
        'SF - Ala',
        'PF - Ala-Pivô',
        'C - Pivô'
    ]

    const[nome, setNome] = useState('')
    const[imagem, setImagem] = useState('')
    const[posicao, setPosicao] = useState('')
    const[time, setTime] = useState('')
    const[numero, setNumero] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        props.aoJogadorCadastrado({
            nome, imagem, time, posicao, numero
        })
        setNome('')
        setPosicao('')
        setNumero('')
        setImagem('')
        setTime('')
    }
    
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <CampoTexto 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
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
                <CampoTexto 
                    required={true} 
                    label="Número" 
                    placeholder="Digite seu número" 
                    valor={numero}
                    aoAlterado={valor => setNumero(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} 
                />
                <ListaSuspensa 
                    required={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card  
                </Botao>
            </form>
        </section>
    )
}

export default Formulario