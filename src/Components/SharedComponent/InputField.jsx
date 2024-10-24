/* eslint-disable react/prop-types */
import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

const InputField = ({ data, register, keyName, errors }) => {
  return (
    <FormControl isInvalid={errors[keyName]}>
      <FormLabel>{data.MESSAGE}</FormLabel>
      <Input
        {...register(keyName, { required: `${data.MESSAGE} is required` })}
        defaultValue={data.VALUE}
      />
      {errors[keyName] && (
        <FormErrorMessage>{errors[keyName]?.message}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InputField;
