import { useState } from "react"

function App() {

    const [numero, setNumero] = useState(0)

    function aumentar() {
        setNumero(numero + 1)
    }

    function diminuir() {
        setNumero(numero - 1)
    }
    
    function zerar() {
        setNumero(numero = 0)
    }

    return <section>
        <h1>CONTADOR</h1>
        <p>{numero}</p>
        <button onClick={aumentar}>mais</button>
        <button onClick={diminuir}>menos</button>
        <button onClick={zerar}>zerar</button>
    </section>
}

export default App;