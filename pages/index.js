import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A first meetup",
//     image:
//       "https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     address: "sme address 54686 some city",
//     description: "This is a first meetup",
//   },
//   {
//     id: "m2",
//     title: "A first meetup",
//     image:
//       "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=600",
//     address: "sme address 54686 some city",
//     description: "This is a first meetup",
//   },
//   {
//     id: "m3",
//     title: "A first meetup",
//     image:
//       "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600",
//     address: "sme address 54686 some city",
//     description: "This is a first meetup",
//   },
// ];
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://shwetangichaurasia4:ZbRgE1k6hCeTimAw@cluster0.7sfrxwl.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
