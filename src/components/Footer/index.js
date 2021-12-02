import LogoJq from '../Logo';
import { FooterWrapper } from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LogoJq primary="#000" secondary="#fafafa" size="24" />
      <span>© Copyright Julio Quintero</span>
    </FooterWrapper>
  );
};

export default Footer;
