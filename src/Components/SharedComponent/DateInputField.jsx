/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { isValid } from "date-fns";

const DateInputField = ({ label, field, error, existingDate }) => {
  const [date, setDate] = useState(
    existingDate && isValid(new Date(existingDate))
      ? new Date(existingDate)
      : new Date()
  );

  useEffect(() => {
    if (existingDate && isValid(new Date(existingDate))) {
      setDate(new Date(existingDate));
    }
  }, [existingDate]);

  return (
    <Box width="100%">
      <FormControl isInvalid={!!error}>
        <FormLabel>{label}</FormLabel>
        <SingleDatepicker
          configs={{
            dateFormat: "MM-dd-yyyy",
          }}
          name={field.name}
          date={date}
          onDateChange={(newDate) => {
            setDate(newDate);
            field.onChange(newDate);
          }}
          {...field}
          propsConfigs={{
            dateNavBtnProps: {
              colorScheme: "bgColor",
              variant: "outline",
            },
            dayOfMonthBtnProps: {
              defaultBtnProps: {
                borderColor: "bgColor",
                _hover: {
                  background: "bgColor",
                  color: "white",
                },
              },

              selectedBtnProps: {
                background: "bgColor",
                color: "white",
              },
            },
            inputProps: {
              size: "xl",
              width: "100%",
            },
            popoverCompProps: {
              popoverContentProps: {
                background: "white",
                color: "bgColor",
              },
            },
            calendarPanelProps: {
              wrapperProps: {
                borderColor: "bgColor",
              },
              contentProps: {
                borderWidth: 0,
                width: "100%",
              },
              headerProps: {
                padding: "5px",
                color: "bgColor",
              },
              dividerProps: {
                display: "none",
              },
            },
            weekdayLabelProps: {
              fontWeight: "normal",
            },
            dateHeadingProps: {
              fontWeight: "semibold",
            },
          }}
        />
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </Box>
  );
};

export default DateInputField;
