import Jogador from '../Jogador'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    const inside = {borderColor: props.corPrimaria}

    return (
        
        (props.jogadores.length > 0) ? <section className='time' style={css}>
            <h3 style={inside}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map( jogador => <Jogador corDeFundo={props.corPrimaria} key={jogador.nome} nome={jogador.nome} posicao={jogador.posicao} imagem={jogador.imagem} numero={jogador.numero}/> )}
            </div>
        </section>
        : ''
    )
}

export default Time