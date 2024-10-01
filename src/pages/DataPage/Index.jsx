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
import React, { useEffect, useState } from "react";
import DataCardModal from "../../Components/Common/DataCardModal";
import LoadingSpinner from "../../LoadingSpinner";
import pbi from "../../media/PowerBi.png";
import staticImg from "../../media/Static.png";
import linelist from "../../media/LineList.png";
import tableau from "../../media/Tableau.png";

const DataHomePage = () => {
  const [clickedData, setClickedData] = useState({});
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCardClick = (item) => {
    setClickedData(item);
    onOpen();
  };

  const image_Assets = {
    Img1: pbi,
    Img2: linelist,
    Img3: staticImg,
    Img4: tableau,
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/getData")
      .then((response) => response.json())
      .then((json) => {
        setCardData(json);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);
  console.log(cardData);
  return (
    <Box position="relative">
      <Flex width="100%">
        <Box width="100%" height="100%" p={4}>
          {isLoading && <LoadingSpinner />}
          <SimpleGrid columns={3} spacing={4}>
            {cardData.map((item, index) => (
              <Tooltip
                key={index}
                label={item.desc}
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
                    src={image_Assets[item.cardImg]}
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
