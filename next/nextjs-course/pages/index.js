import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202101/28/1e0626ac-6c4e-4db3-9122-71e8b031e51c.jpg',
    address: 'Smoe address 5, 12345 Some Cite',
    description: 'This is a first meetup',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ybnlnbPwTbZMKS0_JjfrtJlYB9ehDTL_Vg&usqp=CAU',
    address: 'Smoe address 5, 12345 Some Cite',
    description: 'This is a Second meetup',
  },
];

const HomePage = props => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

//! 사전 랜더용 정적 데이더 제공
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
