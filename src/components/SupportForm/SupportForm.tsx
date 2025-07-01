import { useState } from "react"
import { InputField } from "../InputField/InputField"
import { SelectField } from "../SelectField/SelectField"
import { categoryOptions, relatedProductOptions, priorityOptions } from "./options"
import { StyledSupportForm, StyledSection, StyledUserName, StyledErrorMessage } from "./style"

export const SupportForm = () => {
  const [formData, setFormData] = useState({firstName: "", lastName: "", email: "", organisation: "", subject: "", description: ""})
  const [error, setError] = useState(false)
  console.log(formData)

  const handleOnChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!formData.firstName || !formData.lastName || !formData.email || !formData.organisation || !formData.subject || !formData.description){
      setError(true)
      console.log('Please fill out all required fields before submitting.')
    }else{
      setError(false)
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
          <StyledUserName>
            {/* first name field */}
            <InputField label="First Name" type="text" name="firstName" onChange={handleOnChange} data={formData} error={error} /> 

            {/* last name field */}
            <InputField data={formData} label="Last Name" type="text" name="lastName" onChange={handleOnChange} error={error} /> 

          </StyledUserName>

          {/* email field */}
          <InputField data={formData} label="Email" type="email" name="email" onChange={handleOnChange} error={error}/>

          {/* organisation field */}
          <InputField data={formData} label="Organisation" type="text" name="organisation" onChange={handleOnChange} error={error}/>
        </StyledSection>

        {/* Ticket Details */}
        <StyledSection>
          <h3>Ticket Details</h3>
          {/* subject field */}
          <InputField data={formData} label="Subject" type="text" name="subject" onChange={handleOnChange} error={error}/>

          {/* description field */}
          <InputField data={formData} label="Description" type="text" name="description" onChange={handleOnChange} error={error} />

          {/* category field */}
          <SelectField label="Category" name="category" onChange={handleOnChange} options={categoryOptions} />

          {/* priority field */}
          <SelectField label="Priority" name="priority" onChange={handleOnChange} options={priorityOptions} />

          {/* related product field */}
          <SelectField label="Related Product" name="relatedProduct" onChange={handleOnChange} options={relatedProductOptions} />

           {/* attachments field */}
          {/* <StyledInput>
            <label>Attachments</label>
            <input type="file" id="attachments" multiple />
          </StyledInput> */}
        </StyledSection>

        {error && <StyledErrorMessage>Please fill out all required fields before submitting.</StyledErrorMessage>}
        <button type="submit">Submit Form</button>
      </form>
    </StyledSupportForm>
  )
}