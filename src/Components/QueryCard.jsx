import React from "react";
import ContactCard from "./ContactCard";

const QueryCard = ({ contacts }) => {
  return (
    <div className="eventQuery d-flex mx-5 flex-column border border-5 border-primary rounded my-4 p-4">
      <h4>
        <i className="primaryColor">#</i> Contact
      </h4>
      <p className="greyColor mb-0">For queries regarding events</p>
      <div className="d-flex flex-wrap gap-1 justify-content-around align-items-center">
        {contacts.map((contact, index) => (
          <ContactCard key={index} name={contact.name} number={contact.number} />
        ))}
      </div>
    </div>
  );
};

export default QueryCard;
