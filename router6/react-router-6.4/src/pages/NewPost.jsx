import { useNavigate, useNavigation, redirect, useActionData } from 'react-router-dom';

import NewPostForm from '../components/NewPostForm';
import { savePost } from '../util/api';

function NewPostPage() {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const cancelHandler = () => navigate('/blog');

  return (
    <>
      {data && data.status && <p>{data.message}</p>}
      <NewPostForm onCancel={cancelHandler} submitting={navigation.state === 'submitting'} />
    </>
  );
}

export default NewPostPage;

export const actions = async ({ request }) => {
  const formData = await request.formData();
  const post = {
    title: formData.get('title'),
    body: formData.get('post-text'),
  };

  try {
    await savePost(post);
  } catch (e) {
    if (e.status === 422) {
      return e;
    }
    throw e;
  }
  return redirect('/blog');
};
