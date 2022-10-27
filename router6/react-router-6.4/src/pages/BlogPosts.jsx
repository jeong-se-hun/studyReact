import { Suspense } from 'react';
import { useLoaderData, defer, Await } from 'react-router-dom';

import Posts from '../components/Posts';
import { getPosts } from '../util/api';

function BlogPostsPage() {
  const loaderData = useLoaderData();
  return (
    <>
      <h1>Our Blog Posts</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={loaderData.posts} errorElement={<p>Error loading blog posts.</p>}>
          {loadedPosts => <Posts blogPosts={loadedPosts} />}
        </Await>
      </Suspense>
    </>
  );
}

export default BlogPostsPage;
export const loader = async () => defer({ posts: await getPosts() });

// function BlogPostsPage() {
//   const [error, setError] = useState();
//   const [posts, setPosts] = useState();
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     async function loadPosts() {
//       setIsLoading(true);
//       try {
//         const posts = await getPosts();
//         setPosts(posts);
//       } catch (err) {
//         setError(err.message);
//       }
//       setIsLoading(false);
//     }

//     loadPosts();
//   }, []);

//   return (
//     <>
//       <h1>Our Blog Posts</h1>
//       {isLoading && <p>Loading posts...</p>}
//       {error && <p>{error}</p>}
//       {!error && posts && <Posts blogPosts={posts} />}
//     </>
//   );
// }
