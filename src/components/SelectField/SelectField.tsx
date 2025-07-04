import { StyledInput } from "../SupportForm/style";
import type { SelectFieldProps } from "./types";
import { buildTestToken, useGumnutDoc, GumnutData } from "@gumnutdev/react"

export const SelectField = ({ label, name, onChange, options, data }: SelectFieldProps) => {
  const getToken = () => buildTestToken("some-fake-uid")
  const scope = useGumnutDoc({ getToken, docId: "1" })

  return (
    <StyledInput>
      <label>{label}</label>
      <GumnutData
        control={scope.control}
        name={name}
        render={(arg) => (
          <select {...arg.field}>
            <option value="">Select an option</option>
            {options.map(option => {
              return (
              <option key={option.value} value={option.value}>{option.label}</option>
              )
            })}
          </select>
        )}
      />

    </StyledInput>
    
  )
}