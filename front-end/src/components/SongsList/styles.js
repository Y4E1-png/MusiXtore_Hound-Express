import styled, { keyframes } from 'styled-components';

export const LibraryContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 30px 48px;

  @media (max-width: 760px) {
    padding: 24px 20px 40px;
  }
`;

export const LibraryTitle = styled.h2`
  margin: 0 0 24px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.2;
  color: ${props => props.theme.colors.text};
`;

export const LibraryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const LoadingStatus = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 160px;
  margin: 0;
  padding: 24px;
  border: 1px solid rgba(245, 238, 232, 0.15);
  border-radius: 8px;
  background: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.secondaryText};

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    border: 2px solid rgba(239, 195, 164, 0.2);
    border-top-color: ${props => props.theme.colors.primary};
    border-radius: 50%;
  }

  @media (prefers-reduced-motion: no-preference) {
    &::before {
      animation: ${spin} 1s linear infinite;
    }
  }
`;
