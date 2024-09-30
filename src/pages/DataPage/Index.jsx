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
import pbi from "../../media/PowerBi.png";  
import static from "../../media/Static.png";
import linelist from "../../media/LineList.png";
import tableau from "../../media/Tableau.png";

const demoData = [
  {
    id: 1,
    title: "Power BI Dashboard",
    subTitle: "Sample Dashboard with disease rates",
    desc: "Power BI Dashboards, powered and goverend by fabric, can be dynamically shown here",
    img: Img1,
    cardImg: pbi
  },
  {
    id: 2,
    title: "Line List",
    subTitle: "Sample Line Data",
    desc: "Line List data sets produced via Fabric can be displayed, explored, and exported by credentialed users",
    img: Img2,
    cardImg: linelist
  },
  {
    id: 3,
    title: "Static Report Content",
    subTitle: "Pictures, Brochures, or PDF presentations of compiled data and reports",
    desc: "Non-interactive published material can be disseminated as well",
    img: Img3,
    cardImg: static
  },
  {
    id: 4,
    title: "Tableau Dashboard",
    subTitle: "Example Table 1",
    desc: "Server hosted dashboards and reports with security provided via the identity provider",
    img: Img4,
    cardImg: tableau
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
                    src={item.cardImg}
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
