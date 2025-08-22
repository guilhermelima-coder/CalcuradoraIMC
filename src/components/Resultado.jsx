import '../css/global.css'
import '../css/resultado.css'

const TabelaImc =(resultado)=>{
    if(resultado < 18){
        return(
            <>
            <td>Abaixo do Peso</td>
            <td>Abaixo de 18</td>
            </>
        );
    }else if(resultado >18 && resultado <25){
        return(
            <>
            <td>Peso Normal</td>
            <td>18 - 25.9</td>
            </>
        );
    }else if(resultado > 24 && resultado <30){
        return(
            <>
            <td>Sobre Peso</td>
            <td>25 - 29.9</td>
            </>
        );
    }else if(resultado> 29 && resultado <35){
        return(
            <>
                <td>Obesidade Grau-I</td>
                <td>30-34.9</td>
            </>
        );
    }else{
        return(
            <>
            <td>Obesidade Mórbida</td>
            <td>Maior ou igual a 40</td>
            </>
        )
    }
}


//destruct -desestruturação = acessa propridades de outro componentes
function Resultado({resultado}){
    return(
        <div>
            <div className="resultado">
                <h2>
                    Seu IMC é de:<span className='imcSpan'>{resultado}</span>
                </h2>
            </div>
            <table className='tabela'>
                <thead className='tabelaHeader'>
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody className='tabelaBody'>
                    <tr>{TabelaImc(resultado)}</tr>
                </tbody>
            </table>
        </div>
    )
}
export default Resultado