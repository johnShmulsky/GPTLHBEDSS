/* eslint-disable react/prop-types */
import React from "react";
import {
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
} from "@chakra-ui/react";

const DropdownField = ({ data, register, keyName, errors }) => {
  return (
    <FormControl isInvalid={errors[keyName]}>
      <FormLabel>{data.MESSAGE}</FormLabel>
      <Select
        {...register(keyName, { required: `${data.MESSAGE} is required` })}
        defaultValue={data.VALUE}
      >
        {data?.ENUM?.map((option) => (
          <option key={option.CODE} value={option.TEXT}>
            {option.TEXT}
          </option>
        ))}
      </Select>
      {errors[keyName] && (
        <FormErrorMessage>{errors[keyName]?.message}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default DropdownField;
