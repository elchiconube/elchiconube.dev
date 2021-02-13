import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import SectionSubheading from './SectionSubheading';
import Link from 'next/link';
import Separator from './Separator';
import BlogPost from './BlogPost';

const StyledContainer = styled.div`
  padding: 3rem 0;
`;

const StyledWrapper = styled.div`
  max-width: var(--container-text);
  margin: 0 auto;
  text-align: center;
  color: var(--font-color);
`;

const StyledList = styled.ul`
  max-width: var(--container);
  margin: 0 auto;
  grid-gap: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const StyledLink = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  font-family: var(--font-secondary);
  line-height: 1rem;
  color: var(--color-yellow);
  border: 2px solid var(--color-yellow);
  text-align: center;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
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
        <SectionHeading>“Homines, dum docent, discunt”</SectionHeading>
        <p>
          Me encanta compartir conocimiento porque al hacerlo aprendo. Aquí
          podéis encontrar artículos donde escribo acerca de tecnología,
          desarrollo, tutoriales o incluso de mi vida privada
        </p>
      </StyledWrapper>
      <Separator />
      <StyledList>
        <BlogPost
          title="Revisando el 2020"
          summary="Haciendo un resumen del año 2020."
          slug="2020"
          image="/static/images/2020/banner.jpg"
        />

        <BlogPost
          title="Las mejores librerías de animación Javascript"
          summary="Los primeros segundos para siempre son los más importantes para retener a los usuarios. Entrar en una web aburrida hace que la tasa de rebote aumente considerablemente."
          slug="mejores-librerias-animacion-js"
          image="/static/images/mejores-librerias-animacion-js/mejores-librerias-animacion-js.jpg"
        />
      </StyledList>

      <StyledFooter>
        <Link href="/blog">
          <StyledLink>Blog</StyledLink>
        </Link>
      </StyledFooter>
    </StyledContainer>
  );
}
