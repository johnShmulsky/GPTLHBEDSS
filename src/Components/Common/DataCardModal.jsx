/* eslint-disable react/prop-types */
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import TableauEmbed from "../Tableau/TableauEmbed";
import useMediaQuery from "../../hooks/useMediaQuery";
import StaticImage from "../StaticImage/StaticImage";
import Directory from "../Directory/Directory";

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
          <ModalHeader bg="bgColor" color="white">
            {data.title}
          </ModalHeader>

          <ModalCloseButton color="white" />
          <ModalBody>
            {data.type === "tableau" ? (
              <TableauEmbed embedData={data} />
            ) : data.type === "directory" ? (
              <Directory data={data} />
            ) : (
              <StaticImage imageData={data} />
            )}
            {/* <Directory /> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DataCardModal;
