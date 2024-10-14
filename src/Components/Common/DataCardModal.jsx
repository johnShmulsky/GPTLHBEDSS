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
import Img1 from "../../media/stats.png";
import Img2 from "../../media/img2.png";
import Img3 from "../../media/img3.png";
import Img4 from "../../media/img4.png";

// eslint-disable-next-line react/prop-types
const DataCardModal = ({ isOpen, onClose, data }) => {
  const isMobile = useMediaQuery("(max-width: 500px)");
  const images = {    
    Img1: Img1,
    Img2: Img2,
    Img3: Img3,
    Img4: Img4,
  };
  /**
  TODO: Testing report rendering on server
  
  */

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
           { data.type === "tableau" ? (    <TableauEmbed /> ) : (
           <Image
              src={images[data.img]}
              height="100%"
              width="100%"
              objectFit="cover"
            />
      )}
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
