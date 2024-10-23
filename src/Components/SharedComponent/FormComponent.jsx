/* eslint-disable react/prop-types */
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, Heading, Button } from "@chakra-ui/react";
import InputField from "./InputField";
import DropdownField from "./DropdownField";
import DateInputField from "./DateInputField";

const prepareDefaultValues = (data) => {
  const defaultValues = {};
  Object.keys(data).forEach((key) => {
    if (data[key].TYPE !== "SectionHeader" && data[key].TYPE !== "Array") {
      defaultValues[key] = data[key].VALUE || "";
    }
  });
  return defaultValues;
};

const FormComponent = ({ data, handleFormSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: prepareDefaultValues(data),
  });

  const onSubmit = (formData) => {
    handleFormSubmit(formData);
    // console.log(formData);
  };

  const renderField = (key, fieldData) => {
    switch (fieldData.TYPE) {
      case "String":
        return (
          <Controller
            key={key}
            name={key}
            control={control}
            rules={{ required: `${fieldData.MESSAGE} is required` }}
            render={({ field }) => (
              <InputField
                label={fieldData.MESSAGE}
                field={field}
                error={errors[key]}
              />
            )}
          />
        );
      case "Phone":
        return (
          <Controller
            key={key}
            name={key}
            control={control}
            rules={{
              required: `${fieldData.MESSAGE} is required`,
              pattern: {
                value: /^\d{3}-\d{3}-\d{4}$/,
                message: "Invalid phone number format (e.g., 605-555-5555)",
              },
            }}
            render={({ field }) => (
              <InputField
                label={fieldData.MESSAGE}
                field={field}
                error={errors[key]}
              />
            )}
          />
        );
      case "Dropdown":
        return (
          <Controller
            key={key}
            name={key}
            control={control}
            rules={{ required: `${fieldData.MESSAGE} is required` }}
            render={({ field }) => (
              <DropdownField
                label={fieldData.MESSAGE}
                field={field}
                options={fieldData.ENUM}
                error={errors[key]}
              />
            )}
          />
        );
      case "Date":
        return (
          <Controller
            key={key}
            name={key}
            control={control}
            rules={{ required: `${fieldData.MESSAGE} is required` }}
            render={({ field }) => (
              <DateInputField
                label={fieldData.MESSAGE}
                field={field}
                error={errors[key]}
                existingDate={fieldData.VALUE}
              />
            )}
          />
        );
      case "SectionHeader":
        return (
          <Box key={key} mt={6} mb={3}>
            <Heading as="h3" size="md">
              {fieldData.MESSAGE}
            </Heading>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      {Object.keys(data).map((key) =>
        Array.isArray(data[key])
          ? data[key].map((item, index) => (
              <Box key={index} p={4} borderWidth={1} mb={4}>
                {Object.keys(item).map((innerKey) =>
                  renderField(innerKey, item[innerKey])
                )}
              </Box>
            ))
          : renderField(key, data[key])
      )}

      <Button
        type="submit"
        bg="bgColor"
        color="white"
        _hover={{ background: "bgColor" }}
        mt={4}
      >
        Submit
      </Button>
    </Box>
  );
};

export default FormComponent;
