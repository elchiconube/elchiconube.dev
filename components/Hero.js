import styled from "styled-components";
import SectionHeading from "./SectionHeading";
import SectionSubheading from "./SectionSubheading";

const StyledContainer = styled.div`
  background: url("http://res.cloudinary.com/elchiconube/image/upload/v1528744905/hero_xcghpd.jpg")
    no-repeat;
  background-position: 50%;
  background-size: cover;
  color: #fff;
  height: 60vh;
`;

const StyledWrapper = styled.div`
  max-width: 450px;
  padding: 48px 0 0;
  padding: 3rem 0 0;

  p {
    color: white;
  }
`;

export default function Hero() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <SectionSubheading>Hi, my name is</SectionSubheading>
        <SectionHeading negative>Oscar Bustos</SectionHeading>
        <p>
          I’m a Spanish Frontend Developer with strong User Experience Design
          skills. I'm a web fanatic who has been working in the world of digital
          media since 2011 and enjoy challenging projects from conception to
          completion.
        </p>
      </StyledWrapper>
    </StyledContainer>
  );
}
