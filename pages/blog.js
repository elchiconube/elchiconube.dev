import { useState } from 'react';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import { getAllFilesFrontMatter } from '../lib/mdx';
import styled from 'styled-components';
import SectionHeading from '../components/SectionHeading';

const StyledList = styled.ul`
  max-width: var(--container);
  margin: 0 auto;
  padding: 3rem 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const StyledHeading = styled.h3`
  text-align: center;
  font-size: 1.7rem;
`;

const StyledWrapper = styled.div`
  max-width: var(--container-text);
  margin: 0 auto;
  text-align: center;
  padding: 3rem 0;
`;

const StyledSearch = styled.div`
  position: relative;
  input {
    padding: 1rem;
    border: 0;
    border-radius: 5px;
    display: block;
    width: 100%;
    border: 1px solid #e4e4e4;
    appearance: none;
    box-shadow: none;
  }
  svg {
    position: absolute;
    top: 0;
    right: 0;
    color: #e4e4e4;
    padding: 0.5rem;
    width: 47px;
  }
`;

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Container
      title="Blog – Oscar Bustos"
      description="Hablando sobre el mundo del desarrollo, tecnología y vida personal."
    >
      <StyledWrapper>
        <SectionHeading negative>Blog</SectionHeading>

        <p>
          Nunca he sido una perosna que le guste escribir demasiado, normalmente
          me comunico más por Twitter aunque me gustaría poder escribir más en
          este pequeño proyecto que he montado. Actualmente tengo {posts.length}{' '}
          artículos en este blog. Puedes buscar artículos utilizando el buscador
          de aquí abajo.
        </p>

        <StyledSearch>
          <input
            aria-label="Buscar artículos"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Buscar artículos"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </StyledSearch>
      </StyledWrapper>
      {!filteredBlogPosts.length ? (
        <p>No posts found.</p>
      ) : (
        <StyledList>
          {filteredBlogPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </StyledList>
      )}
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
