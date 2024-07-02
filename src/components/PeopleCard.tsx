interface PeopleCardProps {
    name: string;
    height: string;
}






export function PeopleCard({name, height}: PeopleCardProps) {
    return (
        <div style={{
            padding: "2rem",
            border: "1px solid black",
            borderRadius: "10px",
        }}>
            <h2>{name}</h2>
            <p>Height: {height}cm</p>
            Zde
        </div>
    )
}