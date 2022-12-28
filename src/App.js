import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const posicoes = [
    'PG - Armador',
    'SG - Ala-Armador',
    'SF - Ala',
    'PF - Ala-Pivô',
    'C - Pivô'
  ]

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Brooklyn Nets',
      cor: '#000000',
    },
    { 
      id: uuidv4(),
      nome: 'Golden State Warriors',
      cor: '#1D428A',
    },
    {
      id: uuidv4(),
      nome: 'Boston Celtics',
      cor: '#007A33',
    },
    {
      id: uuidv4(),
      nome: 'Denver Nuggets',
      cor: '#0E2240',
    },
    {
      id: uuidv4(),
      nome: 'Milwaukee Bucks',
      cor: '#00471B',
    }
    
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Kevin Durant',
      numero: '7',
      posicao: posicoes[2],
      imagem: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png',
      time: times[0].nome

    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Ben Simmons',
      numero: '10',
      posicao: posicoes[0],
      imagem: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627732.png',
      time: times[0].nome

    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Kyrie Irving',
      numero: '11',
      posicao: posicoes[0],
      imagem: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png',
      time: times[0].nome

    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Stephen Curry',
      numero: '30',
      posicao: posicoes[0],
      imagem: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png',
      time: times[1].nome

    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Draymond Green',
      numero: '23',
      posicao: posicoes[3],
      imagem: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203110.png',
      time: times[1].nome

    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Klay Thompson',
      numero: '11',
      posicao: posicoes[1],
      imagem: 'https://cdn.nba.com/headshots/nba/latest/1040x760/202691.png',
      time: times[1].nome

    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Andrew Wiggins',
      numero: '22',
      posicao: posicoes[2],
      imagem: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203952.png',
      time: times[1].nome

    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Jayson Tatum',
      numero: '0',
      posicao: posicoes[2],
      imagem: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png',
      time: times[2].nome

    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Jaylen Brown',
      numero: '7',
      posicao: posicoes[1],
      imagem: 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627759.png',
      time: times[2].nome

    }
  ]

  const[jogadores, setJogadores] = useState(inicial)

  function deletarJogador(id) {
    setJogadores(jogadores.filter(jogador => jogador.id !== id));
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }))
  }

  function cadastrarTime({nome, cor}) {
    setTimes([...times, { nome, cor, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setJogadores(jogadores.map(jogador => {
      if(jogador.id === id) jogador.favorito = !jogador.favorito;
      return jogador;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoCriarTime={cadastrarTime}
        posicoes={posicoes} 
        times={times.map(time => time.nome)} 
        aoCadastrar={jogador => setJogadores([...jogadores, jogador])}
      />
      <section className='times'>
        <h1>Rosters</h1>
        {times.map((time, indice) => <Time 
          key={indice}
          mudarCor={mudarCor} 
          time={time}
          jogadores={jogadores.filter(jogador => jogador.time === time.nome)} 
          aoDeletar={deletarJogador}
          aoFavoritar={resolverFavorito}
        />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
