import { useRouter } from 'next/router';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const meetupid = props => {
  return (
    <MeetupDetail
      id={props.meetupData.id}
      src={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { meetupId: 'm1' },
      },
      {
        params: { meetupId: 'm2' },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ctx => {
  const meetupId = ctx.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          'https://images.unsplash.com/photo-1632905917161-6e37901f597a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
        id: meetupId,
        title: 'First Meetup',
        address: 'Some Street 5 Smoe City',
        description: 'This is a first Meetup',
      },
    },
  };
};

export default meetupid;
