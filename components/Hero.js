import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import SectionSubheading from './SectionSubheading';

const StyledContainer = styled.div`
  background: url('http://res.cloudinary.com/elchiconube/image/upload/v1528744905/hero_xcghpd.jpg')
    no-repeat;
  background-position: 50%;
  background-size: cover;
  color: var(--color-white);
  height: 550px;
`;

const StyledWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: calc(100% - 40px);
`;

const StyledContent = styled.div`
  max-width: 450px;
  height: 100%;
  display: flex;
  align-items: center;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);

  p {
    color: white;
    margin: 0;
  }
`;

export default function Hero() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledContent>
          <div>
            <SectionSubheading>Hey, me llamo</SectionSubheading>
            <SectionHeading negative>Oscar Bustos</SectionHeading>
            <p>
              Soy un desarrollador frontend español con sólidos conocimientos en
              diseño de experiencia de usuario. Soy un entusiasta de la web que
              ha estado trabajando en el mundo de medios digitales desde 2011 y
              que disfruta de proyectos desafiantes.
            </p>
          </div>
        </StyledContent>
      </StyledWrapper>
    </StyledContainer>
  );
}
