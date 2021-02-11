import styled from 'styled-components';
import useIsScrollOnTop from '../hooks/useIsScrollOnTop';
import Link from 'next/link';
import Hero from './Hero';
import ThemeSwitch from './ThemeSwitch';

const StyledContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 4;
  transition: background-color 300ms ease-in-out;
  background-color: ${({ isScrollOnTop }) =>
    isScrollOnTop ? 'transparent' : 'rgba(0, 0, 0, 0.6)'};
`;
const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;

  a {
    color: white;
    font-family: var(--font-secondary);
    padding: 1.5rem;
    display: inline-block;
  }
`;
export default function Header() {
  const isScrollOnTop = useIsScrollOnTop(550);
  return (
    <header>
      <StyledContainer isScrollOnTop={isScrollOnTop}>
        <ThemeSwitch />

        <StyledNav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/sobre-mi">
            <a>About</a>
          </Link>
        </StyledNav>
      </StyledContainer>
      <Hero />
    </header>
  );
}
