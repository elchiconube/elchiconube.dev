import styled from 'styled-components';

const StyledHeading = styled.h1`
  color: var(--font-color);
  margin-bottom: 2rem;
  line-height: 3rem;
  font-size: 3rem;
`;

export default function SectionHeading({ negative, children }) {
  return <StyledHeading negative={negative}>{children}</StyledHeading>;
}
