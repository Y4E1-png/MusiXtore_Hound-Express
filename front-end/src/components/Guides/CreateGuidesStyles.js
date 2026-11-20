import styled from "styled-components";
import { PaymentForm, PaymentInput, PaymentButton } from "../CheckoutForm/PaymentStyles";

export const GuideForm = styled(PaymentForm)`
  h1 {
    margin: 0 0 8px;
    font-family: Montserrat, Arial, sans-serif;
    font-size: 28px;
    font-weight: 400;
  }
`;

export const GuideError = styled.p`
  && {
    margin: 0;
    color: ${props => props.theme.colors.error};
  }
`;

export { PaymentInput as TrackingInput, PaymentButton as GuideButton };
