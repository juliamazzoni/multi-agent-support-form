import styled from "styled-components";

export const StyledSupportForm = styled.div`
  display: grid;
  gap: 40px;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  max-width: 700px;

  h2 {
    color: #6256ff;
  }

  h3 {
    font-size: 16px;
    color: #6256ff;
  }

  form {
    display: grid;
    gap: 45px;

    button {
      padding: 15px 0;
      border-radius: 10px;
      border: none;
      color: #fff;
      background-color: #6256ff;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        background-color: #4f46e5; /* a slightly darker shade */
      }
    }
  }
`

export const StyledSection = styled.div`
  display: grid;
  gap: 10px;
`

export const StyledUserName = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 10px;
`

export const StyledInput = styled.div`
  display: grid;
  gap: 5px;
  font-size: 15px;

  input {
    padding: 5px 8px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid #000;
  }

  select {
    padding: 5px 8px;
    border-radius: 10px;
  }

  textarea {
    resize: none; /* disables resizing */
    min-width: 300px; /* fixed width */
    height: 100px; /* fixed height */
    padding: 8px;
    font-size: 1rem;
    border-radius: 10px;
  }
`

export const StyledErrorMessage = styled.span`
  color: #FF0000;
  font-size: 14px;
`