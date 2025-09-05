import Header from './components/Header'
import { useState, useEffect } from 'react'
import Resultado from './components/Resultado'
import "./css/estilo.css"

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  // estados de erro
  const [errorAltura, setErrorAltura] = useState("");
  const [errorPeso, setErrorPeso] = useState("");

  // FUNÇÃO CALCULAR IMC
  const calcularImc = (e) => {
    e.preventDefault();
    let valido = true;

    // valida altura (formato X.XX)
    const regexAltura = /^[0-9]+(\.[0-9]{1,2})$/;
    if (!regexAltura.test(altura)) {
      setErrorAltura("Digite a altura no formato correto (ex: 1.75)");
      valido = false;
    } else {
      setErrorAltura("");
    }

    // valida peso (1 a 999)
    if (!peso || peso <= 0 || peso > 999) {
      setErrorPeso("Digite um peso válido com até 3 dígitos (ex: 70, 999)");
      valido = false;
    } else {
      setErrorPeso("");
    }

    if (!valido) return;

    const imc = peso / (altura * altura);
    setResultado(imc.toFixed(2));
  };

  useEffect(() => {
    resultado > 0 ? setMostrarResultado(true) : setMostrarResultado(false);
  }, [resultado]);

  return (
    <div className="container">
      <div className="box">
        <Header />
        <form onSubmit={calcularImc}>
          {/* ALTURA */}
          <div>
            <label htmlFor="altura">Altura (Exemplo: 1.80)</label>
            <input
              type="text"
              id="altura"
              placeholder="Digite sua Altura"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />
            {errorAltura && <span className="error">{errorAltura}</span>}
          </div>

          {/* PESO */}
          <div>
            <label htmlFor="peso">Peso (Exemplo: 80)</label>
            <input
              type="number"
              id="peso"
              placeholder="Digite seu peso"
              value={peso}
              onChange={(e) => {
                const valor = e.target.value;
                if (valor.length <= 3) {
                  setPeso(valor);
                }
              }}
            />
            {errorPeso && <span className="error">{errorPeso}</span>}
          </div>

          <button type="submit">Calcular</button>
        </form>
      </div>

      {mostrarResultado && <Resultado resultado={resultado} />}
    </div>
  );
}

export default App;
