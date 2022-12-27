import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Brooklyn Nets',
      corPrimaria: '#000000',
      corSecundaria: '#FFFFFF'
    },
    {
      nome: 'Golden State Warriors',
      corPrimaria: '#1D428A',
      corSecundaria: '#ffe7b5'
    },
    {
      nome: 'Boston Celtics',
      corPrimaria: '#007A33',
      corSecundaria: '#FFFFFF'
    },
    {
      nome: 'Denver Nuggets',
      corPrimaria: '#0E2240',
      corSecundaria: '#ffe7b5'
    },
    {
      nome: 'Milwaukee Bucks',
      corPrimaria: '#00471B',
      corSecundaria: '#EEE1C6'
    }
    
  ]

  const[jogadores, setJogadores] = useState([])

  const aoNovoJogador = (jogador) => {
    console.log(jogador)
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogador(jogador)}/>
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        jogadores={jogadores.filter(jogador => jogador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
