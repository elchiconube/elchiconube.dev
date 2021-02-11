import styled from 'styled-components';
import Button from './Button';

const StyledContainer = styled.article`
  position: relative;
  color: white;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 3;
    width: 100%;
    height: 100%;
  }
`;
const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

const StyledVideo = styled.video`
  display: block;
  width: 100%;
  height: auto;
`;

const StyledTitle = styled.h3`
  font-size: 3rem;
  margin-bottom: 2rem;
`;
export default function GetInTouch() {
  return (
    <StyledContainer>
      <StyledWrapper>
        <div>
          <StyledTitle>Tienes un proyecto?</StyledTitle>
          <Button
            href="mailto:oscarbustosgarrido@gmail.com"
            rel="nofollow"
            title="Hablemos"
          >
            Hablemos
          </Button>
        </div>
      </StyledWrapper>

      <StyledVideo preload="auto" loop autoPlay muted>
        <source
          src="http://res.cloudinary.com/elchiconube/video/upload/v1528758653/video_ckbyru.mp4"
          type="video/mp4"
        />
      </StyledVideo>
    </StyledContainer>
  );
}
