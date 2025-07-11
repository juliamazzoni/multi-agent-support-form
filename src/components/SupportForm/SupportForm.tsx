import { useState } from "react"
import { InputField } from "../InputField/InputField"
import { StyledSupportForm, StyledSection, StyledTwoColumns, StyledErrorMessage } from "./style"
import { SelectField } from "../SelectField/SelectField"
import { categoryOptions, priorityOptions, relatedProductOptions } from "./options"
import type { SupportFormProps } from "./types"

export const SupportForm = ({ setToast }: SupportFormProps) => {
  const [formData, setFormData] = useState({firstName: "", lastName: "", email: "", organisation: "", subject: "", description: ""})
  const [error, setError] = useState(false)
  console.log(formData, "form data")

  const handleOnChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!formData.firstName || !formData.lastName || !formData.email){
      setError(true)
      console.log('Please fill out all required fields before submitting.')
    }else{
      setError(false)
      setToast(true)
      setTimeout(() => {
        setToast(false)
      }, 3000);
      console.log('form submitted') 
    }
  }

  return (
    <StyledSupportForm>
      <h2>Support Ticket Form</h2>
      <form action="submit" onSubmit={handleSubmit}>

        {/* User details */}
        <StyledSection>
          <h3>User Details</h3>
          <StyledTwoColumns>
            {/* first name field */}
            <InputField label="First Name" type="text" name="firstName" onChange={handleOnChange} data={formData} error={error} /> 
            {/* last name field */}
            <InputField data={formData} label="Last Name" type="text" name="lastName" onChange={handleOnChange} error={error} /> 
          </StyledTwoColumns>

          {/* email field */}
          <InputField data={formData} label="Email" type="email" name="email" onChange={handleOnChange} error={error} />

          {/* organisation field */}
          <InputField data={formData} label="Organisation" type="text" name="organisation" onChange={handleOnChange} error={error} />
        </StyledSection>

        {/* Ticket Details */}
        <StyledSection>
          <h3>Ticket Details</h3>
          {/* subject field */}
          <InputField data={formData} label="Subject" type="text" name="subject" onChange={handleOnChange} error={error} setFormData={setFormData}/>

          {/* description field */}
          <InputField data={formData} label="Description" type="text" name="description" onChange={handleOnChange} error={error} setFormData={setFormData}/>

          {/* category field */}
          <SelectField data={formData} label="Category" name="category" onChange={handleOnChange} options={categoryOptions}/>
  
          {/* priority field */}
          <SelectField data={formData} label="Priority" name="priority" onChange={handleOnChange} options={priorityOptions}/>

          {/* related product field */}
          <SelectField data={formData} label="Related Product" name="relatedProduct" onChange={handleOnChange} options={relatedProductOptions}/>
        </StyledSection>

        {error && <StyledErrorMessage>Please fill out all required fields before submitting.</StyledErrorMessage>}
        <button type="submit">Submit Form</button>
      </form>
    </StyledSupportForm>
  )
}