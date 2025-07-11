
import { StyledToast, StyledToastMessage } from "./style"

export const Toast = () => {
  return (
        <StyledToast>
          <StyledToastMessage>
            <img src="/assets/images/icon-success-check.svg" alt="" />
            <h4>Message Sent!</h4>
          </StyledToastMessage>
          <h5>Thanks for completing this form, we'll be in touch soon!!</h5>
        </StyledToast>
  )
}