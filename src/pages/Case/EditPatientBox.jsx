/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Box } from "@chakra-ui/react";
import React from "react";

import FormComponent from "../../Components/SharedComponent/FormComponent";

// eslint-disable-next-line react/prop-types
const EditPatientBox = ({ patient }) => {
  const handleFormSubmit = (data) => {
    console.log("Hello", data);
  };

  return (
    <Box width="100%" borderRadius={5}>
      <FormComponent data={patient} handleFormSubmit={handleFormSubmit} />
    </Box>
  );
};

export default EditPatientBox;
