import styled from 'styled-components';
import useIsScrollOnTop from '../hooks/useIsScrollOnTop';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

const StyledContainer = styled.header`
  position: ${({ isScrollOnTop }) => (isScrollOnTop ? 'inherit' : 'fixed')};
  width: 100%;
  top: 0;
  z-index: 4;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  transition: background-color 300ms ease-in-out;
  background-color: ${({ isScrollOnTop }) =>
    isScrollOnTop ? 'transparent' : 'rgba(0, 0, 0, 0.6)'};
`;
const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;

  a {
    color: ${({ isScrollOnTop }) =>
      isScrollOnTop ? 'var(--color-main)' : 'var(--color-main)'};
    font-family: var(--font-secondary);
    padding: 1.5rem;
    display: inline-block;
  }
`;
export default function Header() {
  const isScrollOnTop = useIsScrollOnTop(550);
  return (
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
  );
}
