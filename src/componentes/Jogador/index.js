import './Jogador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

const Jogador = ({jogador, corDeFundo, aoDeletar, aoFavoritar}) => {

    function favoritar() {
        aoFavoritar(jogador.id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='jogador'>
            <AiFillCloseCircle 
                size={25} 
                className="deletar" 
                onClick={() => aoDeletar(jogador.id)}
            />
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={jogador.imagem} alt={jogador.nome}/>
            </div>
            <div className='rodape'>
                <h4>{jogador.nome} #{jogador.numero}</h4>
                <h5>{jogador.posicao}</h5>
                <div className='favorito'>
                    {jogador.favorito 
                        ? <AiFillHeart color='#ff0000' {...propsFavorito} />
                        : <AiOutlineHeart {...propsFavorito} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Jogador