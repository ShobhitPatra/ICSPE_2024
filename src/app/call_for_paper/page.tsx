import Call_for_Papers from "@/components/sub_components/Call_for_Papers";
import Instructions_to_Authors from "@/components/sub_components/Instructions_to_Authors";
import Paper_Submission_Guidelines from "@/components/sub_components/Paper_Submission_Guidelines";
import React from "react";

const page = () => {
  return (
    <div>
      <Call_for_Papers />
      <Paper_Submission_Guidelines />
      <Instructions_to_Authors />
    </div>
  );
};

export default page;
