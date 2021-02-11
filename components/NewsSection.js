import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import SectionSubheading from './SectionSubheading';
import Button from './Button';
import Separator from './Separator';
import BlogPost from './BlogPost';

const StyledContainer = styled.div`
  background: #00818a;
  padding: 3rem 0;
`;

const StyledWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  color: white;
`;

const StyledList = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
`;

const StyledFooter = styled.p`
  text-align: center;
  margin-top: 3rem;
`;

export default function NewsSection({}) {
  return (
    <StyledContainer>
      <StyledWrapper>
        <SectionSubheading>Artículos</SectionSubheading>
        <SectionHeading negative>“Homines, dum docent, discunt”</SectionHeading>
        <p>
          Me encanta compartir conocimiento porque al hacerlo aprendo. Aquí
          podéis encontrar artículos donde escribo acerca de tecnología,
          desarrollo, tutoriales o incluso de mi vida privada
        </p>
      </StyledWrapper>
      <Separator negative />
      <StyledList>
        <BlogPost
          title="Revisando el 2020"
          summary="Haciendo un resumen del año 2020."
          slug="2020"
        />
      </StyledList>

      <StyledFooter>
        <Button
          href="https://www.linkedin.com/in/oscarbustos/"
          rel="nofollow"
          title="LinkedIn Profile"
        >
          Perfil de LinkedIn
        </Button>
      </StyledFooter>
    </StyledContainer>
  );
}
