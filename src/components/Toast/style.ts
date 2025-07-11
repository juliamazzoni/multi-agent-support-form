import styled from "styled-components";

export const StyledToast = styled.div`
background-color:  #6256ff;
margin:  auto;
width: 300px;
border-radius: 15px;
position: fixed;
left: 50%;
top: 10px;
transform: translate(-50%);
padding: 15px;
color: #fff;
display: grid;
gap: 10px;
`

export const StyledToastMessage = styled.div`
  display: flex;
  gap: 5px;
  font-size: 15px;
`