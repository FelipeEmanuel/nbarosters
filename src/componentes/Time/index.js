import Jogador from '../Jogador'
import hexToRgba from 'hex-to-rgba';
import './Time.css'

const Time = ({time, jogadores, aoDeletar, mudarCor, aoFavoritar}) => {

    return (
        jogadores.length > 0 && <section className='time' style={{backgroundColor: hexToRgba(time.cor, '0.5')}}>
            <input type='color' className='input-cor' value={time.cor} onChange={evento => {
                mudarCor(evento.target.value, time.id);
            }} />
            <h3 style={{borderColor: time.cor}}>{time.nome}</h3>
            <div className='jogadores'>
                {jogadores.map((jogador, indice) => <Jogador corDeFundo={time.cor} key={indice} jogador={jogador} aoDeletar={aoDeletar} aoFavoritar={aoFavoritar} /> )}
            </div>
        </section>
    )
}

export default Time