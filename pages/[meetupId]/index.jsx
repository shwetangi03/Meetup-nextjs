import MeetupDetail from "@/components/meetups/MeetupDetail";
import React, { Fragment } from "react";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlLFRlY2hub2xvZ3l8fHx8fHwxNzE2NjQ0MDg1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"
      alt="First meetup"
      title="A First Meetup"
      address="Some street 8 Some City"
      description="The meetup description"
    />
  );
};

export default MeetupDetails;
