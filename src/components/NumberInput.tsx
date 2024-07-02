
interface NumberInputProps {
    label: string;
    name: string;
    value: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}





export function NumberInput({name, label ,value, onChange}: NumberInputProps) {

    return (
        <div>
            <label htmlFor={name}>
                {label}
            </label>
            <input  onChange={onChange} value={value} name={name} type="number" id={name}/>
        </div>
    )
}