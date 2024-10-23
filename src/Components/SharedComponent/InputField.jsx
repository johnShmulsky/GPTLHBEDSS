/* eslint-disable react/prop-types */
import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";

const InputField = ({ label, field, error }) => {
  return (
    <Box width="100%">
      <FormControl isInvalid={!!error}>
        <FormLabel>{label}</FormLabel>
        <Input {...field} border={`1px solid black`} />

        {error && <FormErrorMessage>{error?.message}</FormErrorMessage>}
      </FormControl>
    </Box>
  );
};

export default InputField;
