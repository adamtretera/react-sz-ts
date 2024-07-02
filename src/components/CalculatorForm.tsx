import { useState } from "react";
import { NumberInput } from "./NumberInput";





export function CalculatorForm() {
    const [cislo1, setCislo1] = useState(0);
    const [cislo2, setCislo2] = useState(0);
    const [result, setResult] = useState(0);

    




    function handleCislo1Change(event: React.ChangeEvent<HTMLInputElement>) {
        setCislo1(parseInt(event.target.value))
    }

    function handleCislo2Change(e: React.ChangeEvent<HTMLInputElement>) {
        setCislo2(parseInt(e.target.value))
    }

    function handleClick() {
        setResult(cislo1 + cislo2)
    }
    


    return (
        <div>
            <NumberInput value={cislo1} onChange={handleCislo1Change} name="cislo1" label="Číslo 1"/>
            <NumberInput value={cislo2} onChange={handleCislo2Change}  name="cislo2" label="Číslo 2"/>
           <button onClick={handleClick}>
            Sečti 
           </button>
           {result}
        </div>
    )
}