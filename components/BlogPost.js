import Link from 'next/link';
import styled from 'styled-components';

const StyledContainer = styled.article`
  background-color: var(--card-color);
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgb(0 0 0 / 3%), 0 2px 4px rgb(0 0 0 / 24%),
    0 0 4px rgb(0 0 0 / 5%);
  transition: background-color var(--transition);
`;

const StyledFigure = styled.figure`
  position: relative;
  padding-bottom: 54%;
  margin: 0;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
  &:hover {
    i,
    &::before {
      opacity: 1;
    }
  }
  i {
    position: absolute;
    left: 0;
    right: 0;
    opacity: 0;
    z-index: 2;
    transition: opacity var(--transition);
    display: flex;
    align-items: stretch;
    height: 100%;

    svg {
      width: 50px;
      display: block;
      margin: 0 auto;
    }
  }
  &::before {
    content: '';
    top: 0;
    width: 100%;
    background-color: rgba(253, 187, 7, 0.7);
    display: block;
    position: absolute;
    left: 0;
    height: 100%;
    opacity: 0;
    z-index: 2;
    transition: opacity var(--transition);
  }
  img {
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    min-height: 230px;
    height: auto;
    display: block;
    backface-visibility: hidden;
  }
`;

const StyledContent = styled.div`
  padding: 1rem 1rem 1.5rem;
  transition: color var(--transition);

  h3 {
    font-size: 1.4rem;
    color: var(--font-color);
    margin-bottom: 0.7rem;
  }

  p {
    margin: 0;
    color: var(--font-color);
  }
`;

const BlogPost = ({
  title,
  summary,
  slug,
  image = 'http://res.cloudinary.com/elchiconube/image/upload/v1528795823/pencil_txkyfv.jpg'
}) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <StyledContainer>
          <StyledFigure>
            <img src={image} />
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  fill="white"
                  d="M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 6 L 27 5 L 26 5 L 18 5 z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 L 5 9 z"
                ></path>
              </svg>
            </i>
          </StyledFigure>
          <StyledContent>
            <h3>{title}</h3>
            <p>{summary}</p>
          </StyledContent>
        </StyledContainer>
      </a>
    </Link>
  );
};

export default BlogPost;
