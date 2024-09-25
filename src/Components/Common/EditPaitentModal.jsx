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
import medication from "../../Data/medication.json";
import ReactSearchBox from "react-search-box";
import { AddIcon, DeleteIcon, SearchIcon } from "@chakra-ui/icons";

// eslint-disable-next-line react/prop-types
function EditPaitentModal({ isOpen, onClose, editData }) {
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
          <ModalHeader> Add Medication</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
export default EditPaitentModal;
