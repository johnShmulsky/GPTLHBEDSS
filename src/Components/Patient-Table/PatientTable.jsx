import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import PatientData from "../../demoData/PatientData.json";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  SearchIcon,
} from "@chakra-ui/icons";

import ReactPaginate from "react-paginate";
import AddPatientModal from "../Common/AddPatientModal";
import EditPatientBox from "../../pages/Case/EditPatientBox";

const PatientTable = () => {
  const [searchInput, setSearchInput] = useState("");
  const [expandRow, setExpandRow] = useState(null);
  const [editableData, setEditAbleData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const {
    isOpen: isAddModalOpen,
    onOpen: onAddModalOpen,
    onClose: onAddModalClose,
  } = useDisclosure();

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleEdit = (patient, index) => {
    setEditAbleData(patient);
    console.log(editableData);
    if (expandRow === index) {
      setExpandRow(null);
    } else {
      setExpandRow(index);
    }
  };

  const filteredPatients = PatientData.filter((patient) =>
    patient.id.VALUE?.toLowerCase().includes(searchInput.toLowerCase())
  );

  // pagination func
  const itemsPerPage = 5;
  const indexOfFristItem = currentPage * itemsPerPage;
  const currentItems = filteredPatients.slice(
    indexOfFristItem,
    indexOfFristItem + itemsPerPage
  );
  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  return (
    <Box m={10}>
      <Flex justifyContent="space-between" alignItems="center" my={5}>
        <Box>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="#460000" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search by Case ID"
              value={searchInput}
              onChange={handleSearchChange}
              border="1px solid #460000"
              focusBorderColor="#460000"
            />
          </InputGroup>
        </Box>
        <Box>
          <Button
            borderRadius="none"
            bg="transparent"
            fontSize="18px"
            textAlign="center"
            border="1px solid bgColor"
            color="bgColor"
            _hover={{
              background: "bgColor",
              color: "white",
            }}
            onClick={onAddModalOpen}
          >
            Add New
          </Button>
        </Box>
      </Flex>
      <Box>
        <Table borderBottom="1.5px solid black" fontSize="13px">
          <Thead>
            <Tr borderBottom="1.5px solid gray" bg="bgColor" fontSize="10px">
              <Th color="#FFF">Name</Th>
              <Th color="#FFF">Home Phone</Th>
              <Th color="#FFF">Street</Th>
              <Th color="#FFF">City</Th>
              <Th color="#FFF">POSTAL CODE</Th>
              <Th color="#FFF">County</Th>
              <Th color="#FFF">Disease Type</Th>
              <Th color="#FFF">ON TRIBAL LAND</Th>
              <Th color="#FFF">TRIBAL LAND SPECIFY</Th>
              <Th color="#FFF">Case ID</Th>
              <Th color="#FFF">last Update</Th>
              <Th color="#FFF" textAlign="center">
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredPatients.length > 0 ? (
              currentItems?.map((patient, index) => (
                <>
                  <Tr key={index}>
                    <Td borderBottom="1px solid black">
                      {patient.FIRST_NAME.VALUE} {patient.LAST_NAME.VALUE}
                    </Td>
                    <Td borderBottom="1px solid black">
                      {patient.HOMEPHONE.VALUE}
                    </Td>
                    <Td borderBottom="1px solid black">
                      {patient.STREET.VALUE}
                    </Td>
                    <Td borderBottom="1px solid black">{patient.CITY.VALUE}</Td>
                    <Td borderBottom="1px solid black">
                      {patient.POSTAL_CODE.VALUE}
                    </Td>
                    <Td borderBottom="1px solid black">
                      {patient.COUNTY.VALUE}
                    </Td>
                    <Td borderBottom="1px solid black">{patient.Type.VALUE}</Td>

                    <Td borderBottom="1px solid black">
                      {patient.ON_TRIBAL_LAND.VALUE}
                    </Td>
                    <Td borderBottom="1px solid black">
                      {patient.TRIBAL_LAND_SPECIFY.VALUE}
                    </Td>
                    <Td borderBottom="1px solid black">{patient.id.VALUE}</Td>
                    <Td borderBottom="1px solid black">
                      {new Date(patient._ts.VALUE * 1000).toLocaleDateString()}
                    </Td>
                    <Td
                      borderBottom="1px solid black"
                      textAlign="center"
                      display="flex"
                    >
                      <IconButton
                        onClick={() => handleEdit(patient, index)}
                        icon={
                          expandRow === index ? (
                            <ChevronUpIcon />
                          ) : (
                            <ChevronDownIcon />
                          )
                        }
                        mr={2}
                      />
                    </Td>
                  </Tr>
                  {expandRow === index && (
                    <Tr>
                      <Td colSpan={12}>
                        <EditPatientBox patient={patient} />
                      </Td>
                    </Tr>
                  )}
                </>
              ))
            ) : (
              <Text color="red" my={5} fontSize="18px" textAlign="center">
                No Data found
              </Text>
            )}
          </Tbody>
        </Table>
      </Box>
      {/* pagination */}
      {filteredPatients?.length > 5 && (
        <Box display="flex" alignItems="center" justifyContent="end" my={1}>
          <ReactPaginate
            pageCount={Math.ceil(filteredPatients.length / itemsPerPage)}
            onPageChange={handlePageClick}
            activeClassName={"item active "}
            breakClassName={"item break-me "}
            breakLabel={"..."}
            containerClassName={"pagination"}
            disabledClassName={"disabled-page"}
            marginPagesDisplayed={2}
            nextClassName={"item next "}
            nextLabel={
              <ArrowForwardIcon style={{ fontSize: 18, width: 150 }} />
            }
            pageClassName={"item pagination-page "}
            pageRangeDisplayed={2}
            previousClassName={"item previous"}
            previousLabel={
              <ArrowBackIcon style={{ fontSize: 18, width: 150 }} />
            }
          />
        </Box>
      )}

      {
        <AddPatientModal
          isOpen={isAddModalOpen}
          onClose={onAddModalClose}
          onOpen={onAddModalOpen}
        />
      }
    </Box>
  );
};

export default PatientTable;
