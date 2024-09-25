import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
  };

  return (
    <div>
      <Box
        p={5}
        mt={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box mb={5}>
          {!isAuthenticated ? (
            <Button
              bg="#460000"
              color="white"
              _hover={{ background: "#460000" }}
              onClick={handleLogin}
              borderRadius="none"
              width="100%"
            >
              Sign up
            </Button>
          ) : (
            <Box>
              <Text textAlign="left" fontSize="32px" fontWeight={700}>
                Hello,
              </Text>
              <Text textAlign="left" fontSize="32px" fontWeight={700}>
                John Shmulsky
              </Text>
              <Button
                bg="#460000"
                color="white"
                _hover={{ background: "#460000" }}
                onClick={() => navigate("/Cases")}
                borderRadius="none"
                width="100%"
              >
                log In
              </Button>
            </Box>
          )}
        </Box>

        {/* <Stack spacing={4}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              width="100%"
              border="none"
              outline="none"
              borderRadius="none"
              focusBorderColor="transparent"
              borderBottom="2px solid black"
              _focusVisible={{
                borderBottom: "2px solid black",
              }}
              _hover={{
                borderBottom: "2px solid black",
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              width="100%"
              border="none"
              outline="none"
              borderRadius="none"
              focusBorderColor="transparent"
              _focusVisible="red"
              borderBottom="2px solid black"
              _hover={{
                borderBottom: "2px solid black",
              }}
            />
          </FormControl>
        </Stack> */}
      </Box>
    </div>
  );
};

export default LoginForm;
