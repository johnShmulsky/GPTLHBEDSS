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
import cardData from "../../demoData/dataPageDemo.json";
import DataCardModal from "../../Components/Common/DataCardModal";
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
            {cardData.map((item, index) => (
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
