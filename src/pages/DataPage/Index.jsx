import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import cardImg from "../../media/cardImg.jpg";
import DataCardModal from "../../Components/Common/DataCardModal";
import Img1 from "../../media/stats.png";
import Img2 from "../../media/img2.png";
import Img3 from "../../media/img3.png";
import Img4 from "../../media/img4.png";

const demoData = [
  {
    id: 1,
    title: "Aspirin",
    subTitle: "Aspirin sub title",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    img: "../../media/stats.png",
  },
  {
    id: 2,
    title: "Ibuprofen",
    subTitle: "Ibuprofen sub title",
    desc: "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used for relieving pain, reducing fever, and decreasing inflammation. It is commonly used to treat headaches, muscle aches, arthritis, and menstrual cramps.",
    img: Img2,
  },
  {
    id: 3,
    title: "Paracetamol",
    subTitle: "Paracetamol sub title",
    desc: "Paracetamol, also known as acetaminophen, is a medication used to treat pain and fever. It is typically used for mild to moderate pain relief and is often found in combination with other medications.",
    img: Img3,
  },
  {
    id: 4,
    title: "Omiprasol",
    subTitle: "Omiprasol sub title",
    desc: "Omiprasol, also known as acetaminophen, is a medication used to treat pain and fever. It is typically used for mild to moderate pain relief and is often found in combination with other medications.",
    img: Img4,
  },
];

const DataHomePage = () => {
  const [clickedData, setClickedData] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCardClick = (item) => {
    setClickedData(item);
    onOpen();
  };
  return (
    <Box position="relative">
      <Flex width="100%">
        <Box width="100%" height="100%" p={4}>
          <SimpleGrid columns={3} spacing={4}>
            {demoData.map((item, index) => (
              <Tooltip
                key={index}
                label={item.subTitle}
                placement="bottom-end"
                hasArrow
                color="white"
                bg="#460000"
              >
                <Card
                  onClick={() => handleCardClick(item)}
                  cursor="pointer"
                  key={index}
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  //   variant="outline"
                  border="1px solid #2E72B9"
                  bg="#2E72B9"
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src={cardImg}
                    alt="CardImg"
                  />

                  <Stack>
                    <CardBody color="#FFF" width="100%">
                      <Heading size="md">{item.title}</Heading>
                      <Text py="2">{item.subTitle}</Text>
                    </CardBody>
                  </Stack>
                </Card>
              </Tooltip>
            ))}
          </SimpleGrid>
          <DataCardModal isOpen={isOpen} onClose={onClose} data={clickedData} />
        </Box>
      </Flex>
    </Box>
  );
};

export default DataHomePage;
