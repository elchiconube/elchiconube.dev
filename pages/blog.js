import { useState } from 'react';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import { getAllFilesFrontMatter } from '../lib/mdx';

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
      description="Hablando sobre el mundo del desarrollo, vida personal y proyectos."
    >
      <div>
        <h1>Blog</h1>
        <p>
          {`Nunca he sido una perosna que le guste escribir demasiado, normalmente me comunico más por Twitter aunque me gustaría poder escribir más en este pequeño proyecto que he montado.
            Actualmente tengo ${posts.length} artículos en este blog.
            Puedes buscar artículos utilizando el buscador de aquí abajo.`}
        </p>
        <div>
          <input
            aria-label="Buscar articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Buscar articles"
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
        </div>
        {!searchValue && (
          <>
            <h3>Más populares</h3>
            <BlogPost
              title="Revisando el 2020"
              summary="Haciendo un resumen del año 2020."
              slug="2020"
            />
          </>
        )}
        <h3>Todos los artículos</h3>
        {!filteredBlogPosts.length && <p>No posts found.</p>}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
