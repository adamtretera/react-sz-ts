import { ReactNode } from "react";

interface ICardProps {
    title: string;
    age: number;
    children?: ReactNode;
}


export function Card({ children }: ICardProps) {
    return (
        <div className="card">
            {children}
        </div>
    )
}


