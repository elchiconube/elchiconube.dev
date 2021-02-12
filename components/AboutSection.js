import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import SectionSubheading from './SectionSubheading';
import Device from './Device';
import Button from './Button';

const StyledContainer = styled.section`
  max-width: var(--container);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  padding: 3rem 0;
`;

export default function AboutSection() {
  return (
    <StyledContainer>
      <div>
        <SectionSubheading>Sobre mi</SectionSubheading>
        <SectionHeading>
          Desarrollando proyectos digitales enfocados a los usuarios
        </SectionHeading>
        <p>
          Desde 2011 he ayudado a empresas de todo tipo a crear productos
          digitales. Gracias a esa experiencia he podido aprender gran cantidad
          de habilidades técnicas.
        </p>
        <p>
          Empecé trabajando como <strong> UX/UI Designer</strong>, diseñando
          productos digitales, entendiendoñcada una de las necesidades. Sin
          embargo lo que realmente me apasionaba era el desarrollo por lo que me
          especialicé y me convertí en
          <strong> Frontend Developer</strong>. Me encanta mi trabajo.
        </p>
        <p>
          Mi filosofía es kaizen, también conocida como mejora continua. Me
          encanta aprender cosas nuevas y estar al día en el mundo del
          desarrollo.
        </p>
        <p>
          Además de aprender me gusta mucho compartir conocimiento, es por ello
          que he trabajo como profesor universitario durante 5 años. Actualmente
          lo hago de forma online a través de videos, artículos y mentorías
        </p>
        <p>
          Si tienes curiosidad puedes echar un vistazo a mi perfil profesional
        </p>
        <p>
          <Button
            href="https://www.linkedin.com/in/oscarbustos/"
            rel="nofollow"
            title="LinkedIn Profile"
          >
            Perfil de LinkedIn
          </Button>
        </p>
      </div>
      <Device />
    </StyledContainer>
  );
}
