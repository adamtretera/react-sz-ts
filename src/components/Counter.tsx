import { useState } from "react";
import { Button } from "./Button";
import { Alert } from "./Alert";

interface CounterProps {
    initialCount?: number;
}

export function Counter({ initialCount = 0 }: CounterProps) {
    let [count, setCount] = useState(initialCount);

    function handlePlus() {    
       setCount(count + 1)
    }

    function handleMinus() {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>Počet: {count}</h1>
            {count > 10 ? <Alert text="Bacha počet je moc velký"/> : null}
            <Button onClick={handlePlus}>
                Zvětšit +
            </Button>
            <Button variant="secondary" onClick={handleMinus}>
                Zmenšit - 
            </Button>
        </div>
    )
}