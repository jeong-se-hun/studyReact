import { useLoaderData } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import { getPost } from '../util/api';

function PostDetailPage() {
  const postData = useLoaderData();
  return (
    <>
      <BlogPost title={postData.title} text={postData.body} />
    </>
  );
}

export default PostDetailPage;
export const loader = ({ params }) => {
  const id = params.id;
  return getPost(id);
};

// function PostDetailPage() {
//   const [error, setError] = useState();
//   const [post, setPost] = useState();
//   const [isLoading, setIsLoading] = useState(false);

//   const params = useParams();
//   const { id } = params;

//   useEffect(() => {
//     async function loadPost() {
//       setIsLoading(true);
//       try {
//         const post = await getPost(id);
//         setPost(post);
//       } catch (err) {
//         setError(err.message);
//       }
//       setIsLoading(false);
//     }

//     loadPost();
//   }, [id]);

//   return (
//     <>
//       {isLoading && <p>Loading post...</p>}
//       {error && <p>{error.message}</p>}
//       {!error && post && <BlogPost title={post.title} text={post.body} />}
//     </>
//   );
// }
