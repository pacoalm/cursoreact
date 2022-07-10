import React, { useState } from "react";

const ContactCard = (props) => {
  const [showAge, setShowAge] = useState(false);
  const [textButton, setTextButton] = useState("Show Age");
  return (
    <div className="contact-card">
      <img src={props.avatarUrl} alt="Profile" />

      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button
          onClick={() => {
            setShowAge(!showAge);
            if (showAge) {
              setTextButton("Show Age");
            } else {
              setTextButton("Hide Age");
            }
          }}
        >
          {textButton}
        </button>

        {showAge && <p>Age: {props.age} </p>}
      </div>
    </div>
  );
};
export default ContactCard;
