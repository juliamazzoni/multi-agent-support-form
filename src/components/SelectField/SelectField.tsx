import { StyledInput } from "../SupportForm/style";
import type { SelectFieldProps } from "./types";

export const SelectField = ({ label, name, onChange, options }: SelectFieldProps) => {
  return (
    <StyledInput>
      <label>{label}</label>
      <select name={name} onChange={onChange}>
        <option value="">Select an option</option>
        {options.map(option => {
          return (
            <option value={option.value}>{option.label}</option>
          )
        })}
      </select>
    </StyledInput>
  )
}