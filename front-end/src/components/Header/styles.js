
import styled from 'styled-components';
import { Link } from 'react-router';

export const HeaderContainer = styled.header`
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  margin: 0 auto;
  padding: 30px 20px 24px 35px;
  background-color: transparent;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    pointer-events: none;
    top: -42px;
    left: 37.5%;
    width: min(75%, 1100px);
    height: 170px;
    transform: translateX(-50%) rotate(-8deg);
    background: radial-gradient(ellipse at center, rgba(240, 136, 66, 0.14), rgba(240, 136, 66, 0.045) 40%, transparent 72%);
  }

  @media (max-width: 640px) {
    flex-wrap: wrap;
    gap: 12px;
    padding: 22px 20px;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

`;

export const BrandLogo = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

export const Title = styled.h1`
  margin: 0;
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 25px;
  font-weight: 300;
  line-height: 1.4;
  letter-spacing: 5px;
  text-transform: uppercase;
  flex-shrink: 0;
  color: ${props => props.theme.colors.text};

  @media (max-width: 640px) {
    font-size: 16px;
    letter-spacing: 3px;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
`;

export const HeaderButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  padding: 8px 12px;
  border: 1px solid rgba(239, 195, 164, 0.24);
  border-radius: 999px;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  flex-shrink: 0;
  transform: translateY(0);
  transition: transform, color, border-color, background-color;
  

  &:hover {
    transform: translateY(-4px);
    background-color: rgba(239, 195, 164, 0.10);
    border-color: rgba(239, 195, 164, 0.48);
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

export const CartCount = styled.span`
  min-width: 22px;
  padding: 2px 5px;
  border-radius: 999px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryText};
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  font-variant-numeric: tabular-nums;
`;
