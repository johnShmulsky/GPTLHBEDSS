import React, { useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Input,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import patientData from "../Data/PatientData.json";
const Test = () => {
  const [tribalLandOption, setTribalLandOption] = useState("no");
  return (
    <Accordion allowToggle mx={5}>
      <Box
        bg="#3061ad"
        display="flex"
        alignItems="center"
        gap="65px"
        textAlign="center"
        p={5}
      >
        <Text color="#FFF">Name</Text>
        <Text color="#FFF">Home Phone</Text>
        <Text color="#FFF">Street</Text>
        <Text color="#FFF">City</Text>
        <Text color="#FFF">POSTAL CODE</Text>
        <Text color="#FFF">County</Text>
        <Text color="#FFF">Disease Type</Text>
        <Text color="#FFF">ON TRIBAL LAND</Text>
        <Text color="#FFF">TRIBAL LAND SPECIFY</Text>
        <Text color="#FFF">Case ID</Text>
        <Text color="#FFF">last Update</Text>
        <Text color="#FFF">Action</Text>
      </Box>

      {patientData.map((patient, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <Box
                display="flex"
                alignItems="center"
                gap="62px"
                textAlign="center"
              >
                <Text>
                  {patient.FIRST_NAME.VALUE} {patient.LAST_NAME.VALUE}
                </Text>
                <Text>{patient.HOMEPHONE.VALUE}</Text>
                <Text>{patient.STREET.VALUE}</Text>
                <Text>{patient.CITY.VALUE}</Text>
                <Text>{patient.POSTAL_CODE.VALUE}</Text>
                <Text>{patient.COUNTY.VALUE}</Text>
                <Text>{patient.Type.VALUE}</Text>
                <Text>{patient.ON_TRIBAL_LAND.VALUE}</Text>
                <Text>{patient.TRIBAL_LAND_SPECIFY.VALUE}</Text>
                <Text>{patient.id.VALUE}</Text>
                <Text>
                  {" "}
                  {new Date(patient._ts.VALUE * 1000).toLocaleDateString()}
                </Text>

                <AccordionIcon />
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <SimpleGrid columns={4} spacing={5}>
              <Box>
                <Text mb={1}>First Name</Text>
                <Input placeholder="Enter your last name" size="md" />
              </Box>
              <Box>
                <Text mb={1}>Last Name</Text>
                <Input placeholder="Enter your last name" size="md" />
              </Box>
              <Box>
                <Text mb={1}>Home Phone</Text>
                <Input placeholder="Enter your phone number " size="md" />
              </Box>
              <Box>
                <Text mb={1}> Street</Text>
                <Input placeholder="Enter your street" size="md" />
              </Box>
              <Box>
                <Text mb={1}> City</Text>
                <Input placeholder="Enter your city" size="md" />
              </Box>
              <Box>
                <Text mb={1}> Postal Code</Text>
                <Input placeholder="Enter your postal code" size="md" />
              </Box>
              <Box>
                <Text mb={1}> County</Text>
                <Input placeholder="Enter your county" size="md" />
              </Box>

              <Box>
                <Text mb={1}>Disease Type</Text>
                <Input placeholder="Enter your disease type" size="md" />
              </Box>
              <Box>
                <Text mb={1}>Case ID</Text>
                <Input placeholder="Enter your case ID" size="md" />
              </Box>

              <Box>
                <Text>Tribal Land</Text>
                <RadioGroup
                  onChange={setTribalLandOption}
                  value={tribalLandOption}
                >
                  <Stack direction="row">
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                  </Stack>
                </RadioGroup>
              </Box>

              {tribalLandOption === "yes" && (
                <Box>
                  <Text mb={1}>On Tribal Land Specify</Text>
                  <Input
                    placeholder="Enter your tribal land"
                    size="md"
                    w="100%"
                  />
                </Box>
              )}
            </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Test;
