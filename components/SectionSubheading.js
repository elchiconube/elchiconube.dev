import styled from 'styled-components';

const StyledHeading = styled.h2`
  color: var(--color-yellow);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

export default function SectionSubheading({ children }) {
  return <StyledHeading>{children}</StyledHeading>;
}
