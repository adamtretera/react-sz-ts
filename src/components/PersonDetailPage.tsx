import { useEffect, useState } from "react"
import { apiGet } from "../utils/api";
import { Link, useParams } from "react-router-dom";


interface Person {
    name: string;
    height: string;
}




export function PersonDetailPage() {
    const [person, setPerson] = useState(null);
    const params = useParams();

    useEffect(() => {
        async function getPerson() {
            const data = await apiGet("/people/" + params.id);
            setPerson(data);
        }

        getPerson()
    }, [])

    
    


    if(person === null) {
        return (
            <h1>Načítám data 🌀</h1>
        )
    }
    
    return (
        <div>
            <Link to={"/people"}>
                Zpět
            </Link>
           <h1>
                {person.name}
           </h1>

           <p>
            Height: {person.height} cm
           </p>
        </div>
    )
}