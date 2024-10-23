/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import {
  Box,
  Button,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import EditPaitentModal from "../../Components/Common/EditPaitentModal";
import { AddIcon } from "@chakra-ui/icons";
import FormComponent from "../../Components/SharedComponent/FormComponent";

// eslint-disable-next-line react/prop-types
const EditPatientBox = ({ patient }) => {
  // const [tribalLandOption, setTribalLandOption] = useState("no");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddMedication = () => {
    onOpen();
  };

  const handleFormSubmit = (data) => {
    console.log("Hello", data);
  };

  return (
    <Box
      width="100%"
      borderRadius={5}
      p={5}
      //   bg="#eff6f9"
    >
      {/* <SimpleGrid columns={4} spacing={5}>
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
          <RadioGroup onChange={setTribalLandOption} value={tribalLandOption}>
            <Stack direction="row">
              <Radio value="no">No</Radio>
              <Radio value="yes">Yes</Radio>
            </Stack>
          </RadioGroup>
        </Box>

        {tribalLandOption === "yes" && (
          <Box>
            <Text mb={1}>On Tribal Land Specify</Text>
            <Input placeholder="Enter your tribal land" size="md" w="100%" />
          </Box>
        )}
      </SimpleGrid> */}
      <FormComponent data={patient} handleFormSubmit={handleFormSubmit} />
      <Box my={5}>
        <Text fontSize="20px">
          Treatments
          <IconButton
            ml={2}
            size="sm"
            onClick={() => handleAddMedication()}
            icon={<AddIcon size="sm" />}
          />
        </Text>
        <Box>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Medication</Th>
                <Th>Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              // eslint-disable-next-line react/prop-types
              {patient.TREATMENTS.map((treatment, index) => (
                <Tr key={index}>
                  <Td>{treatment.MEDICATION.VALUE}</Td>
                  <Td>{treatment.TREATMENT_DATE.VALUE}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Button
            my={2}
            borderRadius="none"
            bg="bgColor"
            color="white"
            _hover={{
              background: "bgColor",
            }}
          >
            Save
          </Button>
        </Box>
      </Box>

      {<EditPaitentModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />}
    </Box>
  );
};

export default EditPatientBox;
