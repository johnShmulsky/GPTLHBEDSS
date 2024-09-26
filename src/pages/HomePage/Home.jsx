import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import bgImage from "../../media/bannerImg.jpg";

const Home = () => {
  const handleLogin = () => {
    console.log("hello login");
    window.location.href =
      "https://proud-flower-0e4c3191e.5.azurestaticapps.net";
  };
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    fetch("/api/getuser")
      .then(response => response.json())
      .then(json => setUserData(json)) 
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box position="relative">
      <Flex width="100%" height="550px">
        <Box width="100%" height="100%" bg="#F0ECE3">
          <Box
            p={5}
            mt={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box mb={5}>
              <Box>
                <Text textAlign="left" fontSize="25px" fontWeight={500}>
                  Hello,
                </Text>
                <Text textAlign="left" fontSize="40px" fontWeight={700} mb={5}>
                  {userData ? userData.displayName : No User}
                </Text>
                <Button
                  bg="#460000"
                  color="white"
                  _hover={{ background: "#460000" }}
                  onClick={() => handleLogin()}
                  borderRadius="none"
                  width="100%"
                >
                  Sign in
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          width="100%"
          backgroundImage={`linear-gradient(to top,rgba(0,0,0,0.9),rgba(0,0,0,0.2)),url(${bgImage})`}
          bgSize="cover"
          bgPos="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Box position="absolute" bottom={20} zIndex="100" color="white">
            <Heading as="h1" textAlign="center" fontSize="55px">
              Electronic <br /> Disease Surveillance System
            </Heading>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
