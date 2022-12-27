import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Warriors',
      corPrimaria: '#1D428A',
      corSecundaria: '#ffc72c'
    },
    {
      nome: 'Lakers',
      corPrimaria: '#552583',
      corSecundaria: '#FDB927'
    },
    {
      nome: 'Clippers',
      corPrimaria: '#1D428A',
      corSecundaria: '#C8102E'
    },
    {
      nome: 'Suns',
      corPrimaria: '#1D1160',
      corSecundaria: '#E56020'
    },
    {
      nome: 'Kings',
      corPrimaria: '#5A2D81',
      corSecundaria: '#63727A'
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
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
    </div>
  );
}

export default App;
