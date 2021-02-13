import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import styled from 'styled-components';
import Container from '../components/Container';

const StyledArticle = styled.article`
  max-width: var(--container-text);
  margin: 0 auto;
  padding: 3rem 0;
  h1 {
    margin-bottom: 1.3rem;
    font-size: 2.3rem;
    line-height: 1.2;
  }
  h2 {
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }
  h3 {
    margin-bottom: 0.6rem;
  }
  ul {
    margin: 1rem 0 2rem 2rem;
    list-style: disc;
    li {
      margin-bottom: 0.7rem;
    }
  }
  > div > div:first-child {
    margin-bottom: 1rem !important;
  }
`;

const StyledAvatar = styled.figure`
  display: inline-block;

  > div {
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
  }
`;

const StyledAddress = styled.address`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
  p {
    margin: 0 0 0 1rem;
  }
`;

const editUrl = (slug) =>
  `https://github.com/elchiconube/elchiconube.dev/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://elchiconube.dev/blog/${slug}`
  )}`;

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – Oscar Bustos`}
      description={frontMatter.summary}
      image={`https://elchiconube.dev${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <StyledArticle>
        <h1>{frontMatter.title}</h1>
        <StyledAddress>
          <StyledAvatar>
            <Image
              alt="Oscar Bustos"
              height={40}
              width={40}
              src="/avatar.jpg"
            />
          </StyledAvatar>
          <p>
            {'Oscar Bustos • '}
            {format(parseISO(frontMatter.publishedAt), 'dd-MM-yyyy')}
            {` • `}
            {frontMatter.readingTime}
          </p>
        </StyledAddress>
        <div>{children}</div>
        <footer>
          <a
            href={discussUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Conversación en Twitter'}
          </a>
          {` • `}
          <a
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Editar en GitHub'}
          </a>
        </footer>
      </StyledArticle>
    </Container>
  );
}
