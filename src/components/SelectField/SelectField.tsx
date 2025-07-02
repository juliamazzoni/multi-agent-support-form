import { StyledInput } from "../SupportForm/style";
import type { SelectFieldProps } from "./types";

export const SelectField = ({ label, name, onChange, options, data }: SelectFieldProps) => {
  return (
    <StyledInput>
      <label>{label}</label>
      <select name={name} onChange={onChange} value={data[name]}>
        <option value="">Select an option</option>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>{option.label}</option>
          )
        })}
      </select>
    </StyledInput>
  )
}