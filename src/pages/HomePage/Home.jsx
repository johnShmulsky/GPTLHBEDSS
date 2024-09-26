import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import bgImage from "../../media/bannerImg.jpg";
import LoadingSpinner from "../../LoadingSpinner";


const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = () => {
    console.log("hello login");
    window.location.href =
      "/.auth/login/aad";
    setIsLoading(true);
  };
  const [userData, setUserData] = useState(null);
  
  
  useEffect(() => {
    fetch("/api/getuser")
      .then(response => response.json())
      .then(json => {
        setUserData(json)
        setIsLoading(false)})
      .catch((err) => setIsLoading(false));
    
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
                <Text textAlign="left" fontSize="40px" fontWeight={700} mb={5}>
                  {isLoading ? <LoadingSpinner /> :{userData ?(<Text> Hi {userData.displayName} </Text>): (<Button bg="#460000" color="white" _hover={{ background: "#460000" }} onClick={() => handleLogin()} borderRadius="none" width="100%" disabled={isLoading} > Sign in </Button>)}}
                </Text>
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
