
import estrella from '../../assets/logoBM.png';
import { HeaderContainer, Brand, BrandLogo, Title, HeaderActions, HeaderButton, CartCount } from './styles';

const Header = ({ cartCount, children }) => {
  return (
    <HeaderContainer>
      <Brand>
        <BrandLogo src={estrella} alt="" />
        <Title>MusiXtore</Title>
      </Brand>
      
      {children}
      <HeaderActions>
        <HeaderButton to="/Guides">Guides</HeaderButton>
        <HeaderButton to="/cart" aria-label={`Ver carrito, ${cartCount} ${cartCount === 1 ? "articulo" : "articulos"}`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M2.5 4h2l2.2 11h12.2l2-7H5.3" />
            <circle cx="8.5" cy="19" r="1" />
            <circle cx="17.5" cy="19" r="1" />
          </svg>
          <CartCount aria-hidden="true">{cartCount}</CartCount>
        </HeaderButton>
      </HeaderActions>
    </HeaderContainer>
  );
};

export default Header;
