import { StyledInput, StyledErrorMessage } from "../SupportForm/style"
import type { InputFieldProps } from "./types";

export const InputField = ({ label, type, name, onChange, data, error }: InputFieldProps) => {
  return (
    <StyledInput>
      <label>{label}</label>
      {name === 'description' 
      ?
      <textarea name={name} onChange={onChange}/> 
      :
      <input type={type} name={name} onChange={onChange}/>
      }
      {!data[name] && error && (
        <StyledErrorMessage>
          This field is required
        </StyledErrorMessage>
        
      )}
    </StyledInput>
  )
}