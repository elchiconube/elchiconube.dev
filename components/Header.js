import styled from 'styled-components';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

const StyledContainer = styled.header`
  width: 100%;
  top: 0;
  z-index: 4;
  display: grid;
  grid-template-columns: 100px 1fr;
  background-color: var(--body-background);
`;

const StyledNav = styled.nav`
  text-align: right;
  padding-right: 1rem;
  a {
    color: ${({ isScrollOnTop }) =>
      isScrollOnTop ? 'var(--color-main)' : 'white'};
    font-family: var(--font-secondary);
    padding: 1rem 0.7rem;
    display: inline-block;
    font-size: 0.9rem;
    line-height: 28px;
    color: var(--font-color);
  }
`;
export default function Header() {
  return (
    <StyledContainer>
      <ThemeSwitch />
      <StyledNav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/sobre-mi">
          <a>Sobre mi</a>
        </Link>
      </StyledNav>
    </StyledContainer>
  );
}
