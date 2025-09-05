import Header from './components/Header'
import { useState, useEffect } from 'react'
import Resultado from './components/Resultado'
import "./css/estilo.css"

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  // FUNÇÃO CALCULAR IMC
  const calcularImc = (e) => {
    e.preventDefault();

    // Validação da altura no formato X.XX
    const regexAltura = /^[0-9]+(\.[0-9]{1,2})$/;
    if (!regexAltura.test(altura)) {
      alert("Digite a altura no formato correto! Exemplo: 1.75");
      return;
    }

    if (peso <= 0) {
      alert("Digite um peso válido!");
      return;
    }

    const imc = peso / (altura * altura);
    setResultado(imc.toFixed(2));
  };

  // HOOK useEffect - efeito colateral no mostrar resultado
  useEffect(() => {
    resultado > 0 ? setMostrarResultado(true) : setMostrarResultado(false);
  }, [resultado]);

  return (
    <div className="container">
      <div className="box">
        <Header />
        <form onSubmit={calcularImc}>
          <div>
            <label htmlFor="altura">
              Altura (Exemplo: 1.80)
            </label>
            <input
              type="text"
              id="altura"
              placeholder="Digite sua Altura"
              onBlur={({ target }) => setAltura(target.value)}
            />
          </div>

          <div>
            <label htmlFor="peso">
              Peso (Exemplo: 80)
            </label>
            <input
              type="number"
              id="peso"
              placeholder="Digite seu peso"
              onBlur={({ target }) => setPeso(parseFloat(target.value))}
            />
          </div>

          <button type="submit">Calcular</button>
        </form>
      </div>

      {mostrarResultado && <Resultado resultado={resultado} />}
    </div>
  );
}

export default App;
