import { ReactNode } from "react"

interface ButtonProps  {
    children: ReactNode;
    onClick: () => void;
    variant?: "primary" | "secondary";
}

export function Button({ children, onClick ,variant = "primary"}: ButtonProps) {
    
    return (
        <button onClick={onClick} style={{
            backgroundColor: variant === "primary" ? "red" : "blue"
        }}>  
           {children}
        </button>
    )
}