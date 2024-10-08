import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import bgImage from "../../media/bannerImg.jpg";
import LoadingSpinner from "../../LoadingSpinner";
import { AuthContext } from "../../Context/AuthProvider";

const Home = () => {
  const { isLoading, userData, handleLogin } = useContext(AuthContext);

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
                  {userData?.tribalDisplay.map((tribal, index) => (
                    <p key={index}>{tribal}</p>
                  ))}
                </Text>
              </Box>
            ) : (
              <Button
                fontSize="25px"
                width="200px"
                height="60px"
                bg="bgColor"
                color="white"
                _hover={{ background: "bgColor" }}
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
              GPTEC <br /> WNTR
            </Heading>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
