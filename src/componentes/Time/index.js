import Jogador from '../Jogador'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    const inside = {borderColor: props.corPrimaria}

    return (
        
        <section className='time' style={css}>
            <h3 style={inside}>{props.nome}</h3>
            <Jogador />
            <Jogador />
        </section>
    )
}

export default Time