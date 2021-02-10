import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.color.grey};
`;
export default function Home() {
  return (
    <>
      <Container>
        <h1>Hello, world!</h1>
      </Container>
    </>
  );
}
