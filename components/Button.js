import styled from 'styled-components';

const StyledContainer = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  font-family: var(--font-secondary);
  line-height: 1rem;
  color: var(--color-yellow);
  border: 2px solid var(--color-yellow);
  text-align: center;
  text-decoration: none;
  background-color: transparent;
`;

export default function Button({ children, ...props }) {
  return <StyledContainer {...props}>{children}</StyledContainer>;
}
