import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

const StyledSwitcher = styled.div`
  color: var(--switch-color);
  width: 60px;
  height: 60px;
  background: var(--switch-color);
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: all 100ms ease-in-out;
  position: relative;
  transform: scale(0.25);

  &:after {
    content: '';
    grid-area: 1/1/-1/-1;
    width: 60px;
    height: 60px;
    z-index: 1;
    display: block;
    border-radius: 50%;
    position: absolute;
    background: ${({ theme }) =>
      theme === 'light' ? 'transparent' : 'var(--body-background)'};
    transform: ${({ theme }) =>
      theme === 'light'
        ? 'scale(1.95) translate(80%, -80%)'
        : 'scale(1.2) translate(20%, -30%)'};

    transition: transform 100ms ease-in-out;
  }
  &:before {
    content: '';
    width: 25px;
    height: 25px;
    z-index: 2;
    display: ${({ theme }) => (theme === 'light' ? 'block' : 'none')};
    border-radius: 50%;
    grid-area: 1/1/-1/-1;
    animation: grow 100ms ease-in-out;
    box-shadow: 45px 45px var(--switch-color), -45px -45px var(--switch-color),
      0 60px var(--switch-color), 0 -60px var(--switch-color),
      -60px 0 var(--switch-color), 60px 0 var(--switch-color),
      45px -45px var(--switch-color), -45px 45px var(--switch-color);
  }
`;

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (mounted) {
      setTheme(
        window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      );
    }
  }, [mounted]);

  if (!mounted) return null;

  return (
    <StyledContainer
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <StyledSwitcher theme={theme} />
    </StyledContainer>
  );
};

export default ThemeSwitch;
