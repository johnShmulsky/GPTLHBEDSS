/* eslint-disable react/prop-types */
import React from "react";

import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { ConvertToTimeString } from "../../utils/ConvertToTimeString";

const GptTimePicker = ({ data, register, keyName, errors }) => {
  return (
    <FormControl isInvalid={errors[keyName]}>
      <FormLabel>{data.MESSAGE}</FormLabel>
      <Input
        type="time"
        {...register(keyName, { required: `${data.MESSAGE} is required` })}
        defaultValue={ConvertToTimeString(data.VALUE)}
      />
      {errors[keyName] && (
        <FormErrorMessage>{errors[keyName]?.message}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default GptTimePicker;
