import Link from 'next/link';

const BlogPost = ({ title, summary, slug }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <div>
          <div>
            <h4>{title}</h4>
          </div>
          <p>{summary}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
