import styled from "styled-components";
import { PaymentButton } from "../CheckoutForm/PaymentStyles";

export const GuideCard = styled.li`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 4px 20px;
  padding: clamp(16px, 3vw, 24px);
  border: 1px solid rgba(245, 238, 232, 0.12);
  border-radius: 16px;
  background: ${props => props.theme.colors.surface};
  overflow-wrap: anywhere;

  strong, p {
    grid-column: 1;
    margin: 0;
  }

  p {
    color: ${props => props.theme.colors.secondaryText};
  }

  @media (max-width: 520px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const UpdateButton = styled(PaymentButton)`
  grid-column: 2;
  grid-row: 1 / 5;
  align-self: center;
  margin: 0;
  padding: 10px 18px;

  @media (max-width: 520px) {
    grid-area: auto;
    margin-top: 8px;
  }
`;
