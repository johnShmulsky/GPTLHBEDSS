/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { CalendarIcon } from "@chakra-ui/icons";

const DateInputField = ({ data, keyName, errors, setValue }) => {
  const [date, setDate] = useState(new Date(data.VALUE));

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setValue(keyName, newDate);
  };

  return (
    <FormControl isInvalid={errors[keyName]}>
      <FormLabel>{data.MESSAGE}</FormLabel>
      <Box display="flex" alignItems="center" gap="2px" position="relative">
        <Box position="absolute" top="20%" right="0" zIndex="1010">
          <CalendarIcon
            color="bgColor"
            fontSize="20px"
            mr={5}
            _hover={{ color: "bgColor" }}
          />
        </Box>
        <SingleDatepicker
          configs={{
            dateFormat: "MM/dd/yyyy",
          }}
          name={keyName}
          date={date}
          onDateChange={handleDateChange}
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
              isInRangeBtnProps: {
                color: "yellow",
              },
              selectedBtnProps: {
                background: "bgColor",
                color: "white",
              },
              todayBtnProps: {
                background: "bgColor",
                color: "white",
              },
            },
            inputProps: {
              size: "sm",
            },
            popoverCompProps: {
              popoverContentProps: {
                background: "white",
                color: "bgColor",
              },
            },
            calendarPanelProps: {
              wrapperProps: {
                borderColor: "green",
              },
              contentProps: {
                borderWidth: 0,
              },
              headerProps: {
                padding: "5px",
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
      </Box>
      {errors[keyName] && (
        <FormErrorMessage>{errors[keyName]?.message}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default DateInputField;
