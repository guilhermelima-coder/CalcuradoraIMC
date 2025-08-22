import Header from './components/Header'
import {useState,useEffect} from 'react'
import Resultado from './components/Resultado'
import "./css/estilo.css"


function App() {

  //HOOK- useState = Manipula o estado da variável
  const [peso,setPeso] =useState(0);
  const [altura,setAltura] =useState(0);
  const [resultado,setResultado]=useState(0);
  const [mostrarResultado,setMostrarResultado] = useState(false);

//FUNÇÃO CALCULAR IMC

const calcularImc=()=>{
  const imc = peso /(altura *altura)
  return setResultado(imc.toFixed(2)) 
}
  //HOOK useEffect - efeito colateral no mostrar resultado
  useEffect(()=>{
    resultado > 0 ? setMostrarResultado(true):setMostrarResultado(false)
  },
)


  return (
    <div className="container">
      <div className="box">
        <Header/>
        <form>
          <div>
            <label htmlFor="altura"><span>(Exemplo: 1.80)</span></label>
            <input type="number" id="altura" placeholder="Digite sua Altura"
            onBlur={({target})=>setAltura(parseFloat(target.value))}/>
          </div>

           <div>
            <label htmlFor="peso"><span>(Exemplo: 80)</span></label>
            <input type="number" id="peso" placeholder="Digite seu peso"
            onBlur={({target})=>setPeso(parseFloat(target.value))}/>
          </div>

          <button onClick={calcularImc}>Calcular</button>
        </form>
      </div>

      {mostrarResultado && (
        <Resultado resultado={resultado}/>
      )}
    
    </div>
  )
}


export default App
