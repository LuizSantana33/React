import './InputFatec.css'



interface Props {
    type: 'text' | 'email' | 'text'
    entrada: "Nome" | "E-mail" | "Telefone"
    texto: string
}

function InputFatec({type,entrada,texto}:Props){
    return (
        <div>
            <input className='InputFatec' type={type} defaultValue={texto} placeholder={entrada}/>
            
        </div>
    )
}

export default InputFatec