import MeetupList from "@/components/meetups/MeetupList";
import React from "react";

const HomePage = () => {
  const DUMMY_MEETUPS = [
    {
      id: "m1",
      title: "A first meetup",
      image:
        "https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      address: "sme address 54686 some city",
      description: "This is a first meetup",
    },
    {
      id: "m2",
      title: "A first meetup",
      image:
        "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=600",
      address: "sme address 54686 some city",
      description: "This is a first meetup",
    },
    {
      id: "m3",
      title: "A first meetup",
      image:
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600",
      address: "sme address 54686 some city",
      description: "This is a first meetup",
    },
  ];
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
