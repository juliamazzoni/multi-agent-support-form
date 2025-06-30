import { StyledInput } from "../SupportForm/style"
import type { InputFieldProps } from "./types";

export const InputField = ({ label, type, name, onChange }: InputFieldProps) => {
  return (
    <StyledInput>
      <label>{label}</label>
      {name === 'description' 
      ?
      <textarea name="description" onChange={onChange}/> 
      :
      <input type={type} name={name} onChange={onChange}/>
      }
    </StyledInput>
  )
}