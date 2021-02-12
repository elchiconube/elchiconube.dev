import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  width: 65px;
  height: 65px;
  justify-content: center;
  align-items: center;
`;

const StyledSwitcher = styled.div`
  color: var(--switch-color);
  width: 5vmin;
  height: 5vmin;
  background: var(--switch-color);
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 300ms ease;
  position: relative;
  transform: scale(0.3);

  &:after {
    content: '';
    grid-area: 1/1/-1/-1;
    width: 5vmin;
    height: 5vmin;
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

    transition: transform 700ms ease;
  }
  &:before {
    content: '';
    width: 2vmin;
    height: 2vmin;
    z-index: 2;
    display: ${({ theme }) => (theme === 'light' ? 'block' : 'none')};
    border-radius: 50%;
    grid-area: 1/1/-1/-1;
    animation: grow 300ms ease;
    box-shadow: 3.333333333333333vmin 3.333333333333333vmin var(--switch-color),
      -3.333333333333333vmin -3.333333333333333vmin var(--switch-color),
      0 4.761904761904762vmin var(--switch-color),
      0 -4.761904761904762vmin var(--switch-color),
      -4.761904761904762vmin 0 var(--switch-color),
      4.761904761904762vmin 0 var(--switch-color),
      3.333333333333333vmin -3.333333333333333vmin var(--switch-color),
      -3.333333333333333vmin 3.333333333333333vmin var(--switch-color);
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

  console.log(theme);

  return (
    <StyledContainer>
      <StyledSwitcher
        theme={theme}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </StyledContainer>
  );
};

export default ThemeSwitch;
