import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import logo from "../../media/images.jpg";

const Navbar = () => {
  return (
    <Box bg="#460000" color="white" px={4} py={5}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box display="flex" gap={2} alignItems="center">
          <Image
            src={logo}
            height="70px"
            width="70px"
            borderRadius="50%"
            alt="logo"
            zIndex={1000}
          />
          <Text
            fontSize="25px"
            fontWeight={700}
            lineHeight="30px"
            color="white"
          >
            Great Plains <br /> Tribal Leaders' Health Board
          </Text>
        </Box>

        <Box display="flex" alignItems="center" gap={4}>
          <Link to="/">
            <Text
              color="white"
              px={2}
              py={1}
              rounded="md"
              _hover={{ borderBottom: "2px solid black" }}
            >
              Home
            </Text>
          </Link>
          <Link to="/Cases">
            <Text
              color="white"
              px={2}
              py={1}
              rounded="md"
              _hover={{ borderBottom: "2px solid black" }}
            >
              Cases
            </Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;