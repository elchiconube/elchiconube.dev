import Link from 'next/link';
import styled from 'styled-components';
import SocialLinks from './SocialLinks';
import SectionHeading from './SectionHeading';
import SectionSubheading from './SectionSubheading';
import FooterLinks from './FooterLinks';
import Separator from './Separator';

const StyledContainer = styled.footer`
  background-color: #232932;
  color: white;
  text-align: center;
  padding: 3rem 0 0;
`;

const StyledWrapper = styled.div`
  max-width: var(--container-text);
  margin: 0 auto;
`;

export default function Footer() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <SectionSubheading>Eso es todo</SectionSubheading>
        <SectionHeading negative>Hablemos</SectionHeading>
        <p>
          Si necesitas ponerte en contacto conmigo puedes hacerlo sin problema,
          ya sea para hablar sobre desarrollo o sobre nuevos proyectos puedes
          hacerlo escribiéndome un correo electrónico. Prometo contestar lo
          antes posible
        </p>
        <Separator negative />
        <p>
          Si lo prefieres también puedes ponerte en contacto a través de mis
          redes sociales
        </p>
        <SocialLinks />
      </StyledWrapper>
      <FooterLinks />
    </StyledContainer>
  );
}
