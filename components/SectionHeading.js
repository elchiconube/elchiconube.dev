import styled from "styled-components";

const StyledHeading = styled.h1`
  color: ${({ theme, negative }) =>
    negative ? theme.color.white : theme.color.main};
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
`;

export default function SectionHeading({ negative, children }) {
  return <StyledHeading negative={negative}>{children}</StyledHeading>;
}
