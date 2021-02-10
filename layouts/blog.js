import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from '../components/Container';

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
      <article>
        <h1>{frontMatter.title}</h1>
        <div>
          <div>
            <Image
              alt="Oscar Bustos"
              height={24}
              width={24}
              src="/avatar.jpg"
            />
            <p>
              {frontMatter.by}
              {'Oscar Bustos / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p>
            {frontMatter.readingTime.text}
            {` • `}
          </p>
        </div>
        <div>{children}</div>

        <div>
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
        </div>
      </article>
    </Container>
  );
}
