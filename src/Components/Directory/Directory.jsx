/* eslint-disable react/prop-types */
import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../LoadingSpinner";
import { FaFile } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Directory = ({ data }) => {
  const [directoryData, setDirectoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`api/listBlobs?container=${data.container}`)
      .then((response) => response.json())
      .then((json) => {
        setDirectoryData(json);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [data]);
  console.log(directoryData);

  //   const StaticData = [
  //     {
  //       container: "test",
  //       blob: "COVID-19 Vaccine Facts_Final.pdf",
  //     },
  //     {
  //       container: "test",
  //       blob: "Children and COVID-19 Vaccines (3).pdf",
  //     },
  //     {
  //       container: "test",
  //       blob: "HERO Expo Flyer (3).pdf",
  //     },
  //     {
  //       container: "test",
  //       blob: "Hello World!.txt",
  //     },
  //     {
  //       container: "test",
  //       blob: "Native American Day Parade 2024 (2).png",
  //     },
  //   ];

  return (
    <Box my={10}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Box>
          <Text fontSize="18px" fontWeight="bold" my={5}>
            Please! click on download button to download file.
          </Text>
          <TableContainer>
            <Table variant="" size="md" border="1px solid black">
              <Tbody>
                {directoryData.map((directoryItem, index) => (
                  <Tr
                    key={index}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    borderBottom="1px solid black"
                  >
                    <Td display="flex" alignItems="center" gap="10px">
                      <FaFile />
                      {directoryItem.blob}
                    </Td>
                    <Td>
                      <a
                        download={directoryItem.blob}
                        href={`/api/getBlob?container=${directoryItem.container}&blob=${directoryItem.blob}`}
                      >
                        <Button
                          rightIcon={<DownloadIcon />}
                          bg="bgColor"
                          color="white"
                          _hover={{ background: "bgColor" }}
                        >
                          Download
                        </Button>
                      </a>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
};

export default Directory;
