/* eslint-disable react/prop-types */
import React from "react";
import { useForm } from "react-hook-form";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import InputField from "./InputField";
import DropdownField from "./DropdownField";
import DateInputField from "./DateInputField";
import GptTimePicker from "./GptTimePicker";

const FormComponent = ({ data, handleFormSubmit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log("Form data:", formData);
    handleFormSubmit(formData);
  };

  const renderComponent = (key, fieldData) => {
    switch (fieldData.TYPE) {
      case "String":
      case "Phone":
      case "SectionHeader":
        return (
          <InputField
            key={key}
            data={fieldData}
            register={register}
            keyName={key}
            errors={errors}
          />
        );
      case "Dropdown":
        return (
          <DropdownField
            key={key}
            data={fieldData}
            register={register}
            keyName={key}
            errors={errors}
          />
        );
      case "Date":
        return (
          <DateInputField
            key={key}
            data={fieldData}
            register={register}
            keyName={key}
            errors={errors}
            setValue={setValue}
          />
        );
      case "EpochTime":
        return (
          <GptTimePicker
            key={key}
            data={fieldData}
            register={register}
            keyName={key}
            errors={errors}
            setValue={setValue}
          />
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {Object.keys(data).map((key) => {
          const fieldData = data[key];
          if (Array.isArray(fieldData)) {
            return (
              <GridItem key={key} colSpan={2}>
                <Box border="1px solid gray" p={5} mb={2}>
                  {fieldData.map((item, index) => (
                    <GridItem key={`${key}-${index}`} colSpan={2} mb={2}>
                      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                        {Object.keys(item).map((subKey) => {
                          console.log(item, subKey, "===");
                          return renderComponent(
                            `${key}-${index}-${subKey}`,
                            item[subKey]
                          );
                        })}
                      </Grid>
                    </GridItem>
                  ))}
                </Box>
              </GridItem>
            );
          } else {
            return (
              <GridItem key={key} colSpan={1}>
                {renderComponent(key, fieldData)}
              </GridItem>
            );
          }
        })}
      </Grid>
    </form>
  );
};

export default FormComponent;
