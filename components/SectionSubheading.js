import styled from "styled-components";

const StyledHeading = styled.h2`
  color: ${({ theme }) => theme.color.yellow};
  text-transform: uppercase;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
`;

export default function SectionSubheading({ children }) {
  return <StyledHeading>{children}</StyledHeading>;
}
