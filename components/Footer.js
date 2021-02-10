import Link from "next/link";

const ExternalLink = ({ href, children }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div>
        <ExternalLink href="https://www.linkedin.com/in/oscarbustos">
          LinkedIn
        </ExternalLink>
        <ExternalLink href="https://twitter.com/elchiconube">
          Twitter
        </ExternalLink>
        <ExternalLink href="https://github.com/elchiconube">
          GitHub
        </ExternalLink>
        <ExternalLink href="https://codepen.io/elchiconube/">
          Codepen
        </ExternalLink>
        <ExternalLink href="https://dribbble.com/elchiconube">
          Dribbble
        </ExternalLink>
      </div>
    </footer>
  );
}
