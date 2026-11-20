import { Link } from "react-router";
import styled from "styled-components";
import { CartContainer, CartTitle, CheckoutLink } from "../Cart/styles";

export const GuidesSection = styled(CartContainer)`
  padding-top: 24px;
`;

export const BackArrow = styled(Link)`
  display: inline-grid;
  place-items: center;
  min-width: 44px;
  min-height: 44px;
  color: inherit;
  text-decoration: none;
  font-size: 28px;
  line-height: 1;
  transform: translateY(0);
  transition-property: transform, color;
  transition-duration: 260ms;
  transition-timing-function: ease-in-out;

  &:hover {
    transform: translateY(-4px);
    color: ${props => props.theme.colors.primaryHover};
    transition-duration: 180ms;
    transition-timing-function: ease-out;
  }

  @media (prefers-reduced-motion: reduce) {
    &, &:hover {
      transform: none;
      transition: none;
    }
  }
`;

export const GuideList = styled.ul`
  display: grid;
  gap: 12px;
  margin: 0 0 20px;
  padding: 0;
  list-style: none;
`;

export { CartTitle as GuidesTitle, CheckoutLink as CreateGuideLink };
