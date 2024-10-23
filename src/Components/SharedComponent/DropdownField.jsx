/* eslint-disable react/prop-types */
import React from "react";
import {
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";

const DropdownField = ({ label, field, error, options }) => {
  return (
    <Box width="100%">
      <FormControl isInvalid={!!error}>
        <FormLabel>{label}</FormLabel>
        <Select {...field} border="1px solid black">
          {options.map((option) => (
            <option key={option.CODE} value={option.TEXT}>
              {option.TEXT}
            </option>
          ))}
        </Select>
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </Box>
  );
};

export default DropdownField;
