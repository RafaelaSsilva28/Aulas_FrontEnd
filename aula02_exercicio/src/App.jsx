import './App.css'

const App = () => {
  return (      
  <div className='div'>
    <h1 className='titulo'> 🪶Realizando o exercicio do Douglas 🪶</h1>
    <h2 className='sub'>DADOS DO ALUNO...</h2>
    <div className='bloco'>
    <p className='lista'>Nome: RAFAELA DE SOUZA SILVA</p>
    <p className='lista'>RM: 21342</p>
    <p className='lista'>Escola: SESI/SENAI</p>
    <p className='lista'>Turma: 3°B</p>
    </div>
    <img  className='img'src="https://preview.redd.it/how-do-you-make-an-animated-gif-without-seeing-every-layer-v0-2zb6qt76dq5c1.gif?width=944&auto=webp&s=b3e547e2c3471efa794868b3b05b0e05566d5541" alt="gif" width='200' />
    <h3 className='sub'>LISTA DAS MATÉRIAS DO 3°</h3>
    <div className='bloco1'>
    <ul className='lista'>
      <li>Matematica </li>
      <li>Ingles</li>
      <li>Física</li>
      <li>Desenvolvimento de Sistema</li>
      <li>React</li>
      <li>Front-End</li>
      <li>Quimica</li>
    </ul>
    </div>
    </div>
  )
}
export default App;

