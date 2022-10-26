import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage from './pages/BlogPosts';
import NewPostPage, { actions as newPostAction } from './pages/NewPost';
import PostDetailPage from './pages/PostDetail';
import RootLayout from './pages/RootLayout';
import WelcomePage from './pages/Welcome';
import ErrorPage from './pages/Error';
import { loader as blogPostsLoader } from './pages/BlogPosts';
import { loader as PostLoader } from './pages/PostDetail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        <Route index element={<BlogPostsPage />} loader={blogPostsLoader} />
        <Route path=":id" element={<PostDetailPage />} loader={PostLoader} />
      </Route>
      <Route path="/blog/new" element={<NewPostPage />} action={newPostAction} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
