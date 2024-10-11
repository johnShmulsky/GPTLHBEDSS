/* eslint-disable react/prop-types */
import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import TableauEmbed from "../Tableau/TableauEmbed";
import useMediaQuery from "../../hooks/useMediaQuery";

// eslint-disable-next-line react/prop-types
const DataCardModal = ({ isOpen, onClose }) => {
  const isMobile = useMediaQuery("(max-width: 500px)");

  return (
    <div>
      <Modal
        blockScrollOnMount={true}
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={true}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent minW={isMobile ? "100%" : "1000px"} overscrollY="hidden">
          <ModalBody scrollBehavior="smooth">
            <Box height={isMobile ? "1500px" : "1300px"}>
              <TableauEmbed />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DataCardModal;
