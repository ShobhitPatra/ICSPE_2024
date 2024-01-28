import React from "react";

function ContactCard({
  name,
  position,
  department,
  institution,
  location,
  email,
  phone,
}) {
  return (
    <div
      className="bg-gray-300 w-68
       font-serif h-36
     flex flex-col rounded-md text-xs my-2 text-center mx-4 p-2 lg:w-96"
    >
      <div>
        <b>
          {name}({position})
        </b>
      </div>
      <div>{department}</div>
      <div>{institution}</div>
      <div className="pb-4">{location}</div>
      <div>
        <b>Email</b> : {email}
      </div>
      <div>
        <b>Phone</b> : {phone}
      </div>
    </div>
  );
}

export default ContactCard;
