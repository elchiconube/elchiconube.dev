import Head from 'next/head';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Oscar Bustos – Developer.',
    description: `Frontend developer, JavaScript enthusiast.`,
    image: 'https://elchiconube.dev/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://elchiconube.dev${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://elchiconube.dev${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Oscar Bustos" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@elchiconube" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <nav>
        <NextLink href="/about">
          <a>About</a>
        </NextLink>
        <NextLink href="/">
          <a>Home</a>
        </NextLink>
      </nav>
      <main>
        {children}
        <footer>FOOTER</footer>
      </main>
    </div>
  );
}
