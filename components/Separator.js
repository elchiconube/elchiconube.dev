import styled from 'styled-components';

const StyledHr = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid var(--hr-color);
  padding: 0;
  margin: 3rem auto;
  width: 10%;
`;

export default function Separator() {
  return <StyledHr />;
}
