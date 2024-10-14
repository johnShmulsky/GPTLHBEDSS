/* eslint-disable react/prop-types */
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import TableauEmbed from "../Tableau/TableauEmbed";
import useMediaQuery from "../../hooks/useMediaQuery";
import StaticImage from "../StaticImage/StaticImage"

// eslint-disable-next-line react/prop-types
const DataCardModal = ({ isOpen, onClose, data }) => {
  const isMobile = useMediaQuery("(max-width: 500px)");
  /**
  TODO: Testing report rendering on server
  
  */
  console.log(data.type);
  return (
    <div>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW={isMobile ? "100%" : "1000px"}>
          <ModalHeader bg="#2E72B9" color="white">
            {data.title}
          </ModalHeader>

          <ModalCloseButton color="white" />
          <ModalBody>
           { data.type === "tableau" ? (    <TableauEmbed /> ) : ( <StaticImage imageData={data} /> )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DataCardModal;
