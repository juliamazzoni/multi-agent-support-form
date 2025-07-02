import { StyledInput, StyledErrorMessage } from "../SupportForm/style"
import type { InputFieldProps } from "./types";

export const InputField = ({ label, type, name, onChange, data, error }: InputFieldProps) => {
  return (
    <StyledInput>
      <label>{label}</label>
      {name === 'description' 
      ?
      <textarea name={name} onChange={onChange} value={data[name]}/> 
      :
      <input type={type} name={name} onChange={onChange} value={data[name]}/>
      }
      {!data[name] && error && (<StyledErrorMessage>{label} is required</StyledErrorMessage>
      )}
    </StyledInput>
  )
}