import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import bgImage from "../../media/bannerImg.jpg";
import LoadingSpinner from "../../LoadingSpinner";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = () => {
    console.log("hello login with spinner");
    window.location.href = "/.auth/login/aad";
    setIsLoading(true);
  };
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/getuser")
      .then((response) => response.json())
      .then((json) => {
        setUserData(json);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  return (
    <Box position="relative">
      <Flex width="100%" height="550px">
        <Box
          width="100%"
          height="100%"
          bg="#F0ECE3"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box p={5} mt={12}>
            {isLoading ? (
              <LoadingSpinner />
            ) : userData ? (
              <Box>
                <Text fontSize="25px" fontWeight={600} color="black">
                  Hi,
                </Text>
                <Text
                  fontSize="28px"
                  lineHeight="42px"
                  fontWeight={600}
                  color="black"
                >
                  {userData.displayName}
                </Text>
                <Text
                  fontSize="28px"
                  lineHeight="42px"
                  fontWeight={600}
                  color="black"
                >
                  {userData.userDetails}
                </Text>
                <Text
                  fontSize="28px"
                  lineHeight="42px"
                  fontWeight={600}
                  color="black"
                >
                  {userData?.userRoles[0]},{userData?.userRoles[1]}
                </Text>
              </Box>
            ) : (
              <Button
                fontSize="25px"
                width="200px"
                height="60px"
                bg="#460000"
                color="white"
                _hover={{ background: "#460000" }}
                onClick={() => handleLogin()}
                disabled={isLoading}
              >
                Sign in
              </Button>
            )}
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
              GPTEC <br /> Digital Resource Library
            </Heading>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
