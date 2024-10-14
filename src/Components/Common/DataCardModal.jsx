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
import Img1 from "../../media/stats.png";
import Img2 from "../../media/img2.png";
import Img3 from "../../media/img3.png";
import Img4 from "../../media/img4.png";

const images = {    
    Img1: Img1,
    Img2: Img2,
    Img3: Img3,
    Img4: Img4,
  };

const TableauEmbedCard = () => {
  return (
          <ModalContent minW={isMobile ? "100%" : "1000px"} overscrollY="hidden">
          <ModalBody scrollBehavior="smooth">
            <Box height={isMobile ? "1550px" : "1300px"}>
              <TableauEmbed />
            </Box>
          </ModalBody>
        </ModalContent>  
  );
};

const StaticImageCard = (imageData) => {
  return (
          <ModalContent>
          <ModalHeader bg="#2E72B9" color="white">
            {imageData.title}
          </ModalHeader>

          <ModalCloseButton color="white" />
          <ModalBody>
            <Image
              src={images[imageData.img]}
              height="100%"
              width="100%"
              objectFit="cover"
            />
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
  );
};

// eslint-disable-next-line react/prop-types
const DataCardModal = ({ isOpen, onClose, data }) => {
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
        { data.type === "tableau" ? (<TableauEmbedCard /> ): (<StaticImageCard imageData={data} />) }      
      </Modal>
    </div>
  );
};
export default DataCardModal;
