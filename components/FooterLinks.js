import Link from 'next/link';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background-color: black;
  padding: 2rem 0;
`;
const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  grid-gap: 0.5rem;
  justify-content: center;

  a {
    color: white;
    font-family: var(--font-secondary);
    font-size: 0.8rem;
  }
`;

export default function FooterLinks() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/sobre-mi">
          <a>Sobre mi</a>
        </Link>
      </StyledWrapper>
    </StyledContainer>
  );
}
