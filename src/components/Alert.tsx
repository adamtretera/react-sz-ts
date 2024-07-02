interface AlertProps {
    text: string
}

export function Alert({text}: AlertProps) {
    return (
        <div style={{backgroundColor: "red"}}>
            ⚠️⚠️⚠️ {text}!!!
        </div>
    )
}