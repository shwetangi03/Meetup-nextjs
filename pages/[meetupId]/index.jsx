import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";

const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupdata.title}</title>
        <meta name="description" content={props.meetupdata.description} />
      </Head>
      <MeetupDetail
        image={props.meetupdata.image}
        title={props.meetupdata.title}
        address={props.meetupdata.address}
        description={props.meetupdata.description}
      />
    </Fragment>
  );
};

export async function getStaticPaths(context) {
  const client = await MongoClient.connect(
    "mongodb+srv://shwetangichaurasia4:ZbRgE1k6hCeTimAw@cluster0.7sfrxwl.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://shwetangichaurasia4:ZbRgE1k6hCeTimAw@cluster0.7sfrxwl.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetups = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupdata: {
        id: selectedMeetups._id.toString(),
        title: selectedMeetups.title,
        address: selectedMeetups.address,
        image: selectedMeetups.image,
        description: selectedMeetups.description,
      },
    },
  };
}

export default MeetupDetails;
