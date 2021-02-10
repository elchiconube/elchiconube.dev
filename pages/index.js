import styled from "styled-components";
import Hero from "../components/Hero";

const Container = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.color.grey};
`;
export default function Home() {
  return (
    <>
      <Container>
        <Hero />
        <h1>Hello, world!</h1>
      </Container>
    </>
  );
}
