import { useState } from "react"
import { InputField } from "../InputField/InputField"
import { StyledSupportForm, StyledUserDetails, StyledUserName, StyledInput, StyledTicketDetails } from "./style"

export const SupportForm = () => {
  const [formData, setFormData] = useState({})
  console.log(formData)

  const handleOnChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('form submitted')
  }

  return (
    <StyledSupportForm>
      <h2>Support Ticket Form</h2>
      <form action="submit" onSubmit={handleSubmit}>

        {/* User details */}
        <StyledUserDetails>
          <h3>User Details</h3>
          <StyledUserName>
            <InputField label="First Name" type="text" name="firstName" onChange={handleOnChange}/> 
            <InputField label="Last Name" type="text" name="lastName" onChange={handleOnChange}/> 
          </StyledUserName>
          <InputField label="Email" type="email" name="email" onChange={handleOnChange}/>
          <InputField label="Organisation" type="text" name="organisation" onChange={handleOnChange}/>
        </StyledUserDetails>

        {/* Ticket Details */}
        <StyledTicketDetails>
          <h3>Ticket Details</h3>
          <InputField label="Subject" type="text" name="subject" onChange={handleOnChange}/>
          <InputField label="Description" type="text" name="description" onChange={handleOnChange}/>
          {/* <StyledInput>
            <label>Attachments</label>
            <input type="file" id="attachments" multiple />
          </StyledInput> */}
          <StyledInput>
            <label>Category</label>
            <select name="category" onChange={handleOnChange}>
              <option value="">Select an option</option>
              <option value="bug">Bug</option>
              <option value="feature-request">Feature Request</option>
              <option value="payment">Payment</option>
              <option value="access-issue">Access Issue</option>
            </select>
          </StyledInput>
          <StyledInput>
            <label>Priority</label>
            <select name="priority" onChange={handleOnChange}>
              <option value="">Select an option (AI can auto-suggest this)</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </StyledInput>
          <StyledInput>
            <label>Related Product</label>
            <select name="relatedProduct" onChange={handleOnChange}>
              <option value="">Select an option </option>
              <option value="dashboard">Dashboard</option>
              <option value="api">API</option>
              <option value="mobile-app">Mobile App</option>
              <option value="user-accounts">User Accounts</option>
            </select>
          </StyledInput>
        </StyledTicketDetails>
        <button type="submit">Submit Form</button>
      </form>
    </StyledSupportForm>
  )
}