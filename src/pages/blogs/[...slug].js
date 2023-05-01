import { useRouter } from 'next/router';

// catch all routes [...<name>]

const BlogPostsPage = () => {
  const router = useRouter();
  console.log(router.query); //returns an array of strings separating each segment in url

  return <div>the blog posts</div>;
};

export default BlogPostsPage;
