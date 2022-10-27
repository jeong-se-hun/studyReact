// our-domain.com/news/something-important
import { useRouter } from 'next/router';
const DetailPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <h1>The Detail Page</h1>
    </>
  );
};

export default DetailPage;
