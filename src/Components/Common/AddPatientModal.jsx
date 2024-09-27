import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import ReactSearchBox from "react-search-box";
import { AddIcon, DeleteIcon, SearchIcon } from "@chakra-ui/icons";
import medication from "../../demoData/medication.json";

// eslint-disable-next-line react/prop-types
function AddPatientModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [tribalLandOption, setTribalLandOption] = useState("no");
  const [rows, setRows] = useState([{ id: 1, date: "", medication: "" }]);

  const handleAddRow = () => {
    setRows([...rows, { id: rows.length + 1, date: "", medication: "" }]);
  };

  const handleDeleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleNext = () => {
    setStep(2);
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Add New Case</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {step === 1 ? (
              <SimpleGrid columns={2} spacing={5}>
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
            ) : (
              <SimpleGrid columns={2} spacing={5}>
                {rows.map((row, index) => (
                  <>
                    <Box>
                      <Text mb={1}>Treatment Date</Text>
                      <Input
                        placeholder="Enter your Treatments"
                        size="md"
                        type="date"
                        value={row.date}
                        onChange={(e) => {
                          const newRows = [...rows];
                          newRows[index].date = e.target.value;
                          setRows(newRows);
                        }}
                      />
                    </Box>
                    <Box>
                      <Text mb={1}>Medication</Text>
                      <Box display="flex" gap={2} alignItems="center">
                        <ReactSearchBox
                          leftIcon={<SearchIcon />}
                          placeholder="Select medication"
                          value="doe"
                          data={medication}
                        />

                        <Box display="flex" gap={2}>
                          <IconButton
                            size="sm"
                            icon={<AddIcon />}
                            onClick={handleAddRow}
                          />
                          <IconButton
                            size="sm"
                            icon={<DeleteIcon />}
                            onClick={() => handleDeleteRow(row.id)}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </>
                ))}
              </SimpleGrid>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancel
            </Button>
            {step === 1 ? (
              <Button
                bg="#460000"
                color="white"
                _hover={{ background: "#460000" }}
                onClick={handleNext}
              >
                Next
              </Button>
            ) : (
              <Button
                bg="#460000"
                color="white"
                _hover={{ background: "#460000" }}
              >
                Save
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
export default AddPatientModal;
