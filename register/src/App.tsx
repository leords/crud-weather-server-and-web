import { api } from './service/api'
import logo from './logo.svg'
import './App.css'

function App() {


/*Lista de nomes para iserções aleatórias!*/
      const nome = [
        'leords',
        'ADS',
        'Professor',
        'Orientador',
        'Luciano',
        'IFSC'
    ]
/*Arrow function automática com intervalos de 10sec*/
    setInterval(() => {
      try {
        api.post('create', {
            user : nome[Math.floor(Math.random() * 5)],
            luminosity: String(Math.floor(Math.random()  * 150)),
            moisture: String(Math.floor(Math.random() * 100)),
            temperature: String(Math.floor(Math.random() * 42))
        })
        console.log('cadastro')
      } catch {
        console.log('erro')
    } 
    }, 15000) 
    

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Analisando situações climaticas</p>
      </header>
    </div>
  )
}

export default App
