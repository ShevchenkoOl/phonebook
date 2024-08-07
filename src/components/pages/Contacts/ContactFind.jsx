import React from "react";

const ContactFind = ({name, onFindContact}) => {
  return (
    <>
      <label htmlFor="find">Find contact by name</label>
      <input
        onChange={onFindContact}
        type="text"
        name="find"
        value={name}
      />
    </>
  );
};

export default ContactFind;
