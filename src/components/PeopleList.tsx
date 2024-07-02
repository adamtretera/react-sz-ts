import { useEffect, useState } from "react"
import { apiGet } from "../utils/api";
import { PeopleCard } from "./PeopleCard";
import { Link } from "react-router-dom";




interface Person {
    name: string;
    films: string[];
    height: string;
}

type People = Person[];


export function PeopleList() {

    const [people, setPeople] = useState<null | People>(null);

    useEffect(() => {
        async function getPeople() {
            const data = await apiGet("/people");
            setPeople(data.results)
        }

        getPeople();
    }, [])


    if(people === null) {
        return (
            <h1>Načítám data 🌀</h1>
        )
    }

    return (
        <div>
          {people.map((person, index) => {
            return (
                <Link to={"/people/" + (index + 1)} key={person.name + person.height}>
                    <PeopleCard  name={person.name} height={person.height} />
                </Link>
           )
          })}
        </div>
    )
}





