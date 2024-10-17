import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import logo from "../../media/logo.jpg";
import { AuthContext } from "../../Context/AuthProvider";
import LoadingSpinner from "../../LoadingSpinner";

// eslint-disable-next-line react/prop-types
const SignOutModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleLogOut } = useContext(AuthContext);

  const handleYes = () => {
    setIsLoading(true);
    window.open("/.auth/logout", "_blnk");
    setTimeout(() => {
      handleLogOut();
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="sm">
        <ModalOverlay />
        <ModalContent borderRadius="none" height="420px">
          <ModalBody>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <Flex
                mt={6}
                alignItems="center"
                justifyContent="center"
                direction="column"
              >
                <Image
                  src={logo}
                  height="100px"
                  width="100px"
                  borderRadius="50%"
                />
                <Box mt="50px" textAlign="center">
                  <Text fontWeight={500} fontSize="20px">
                    You are leaving.
                  </Text>
                  <Text fontWeight={700} fontSize="25px">
                    Are you sure to leave ?
                  </Text>
                </Box>
              </Flex>
            )}
          </ModalBody>

          {!isLoading && (
            <ModalFooter>
              <Flex width="100%" gap="5px">
                <Button
                  width="100%"
                  borderRadius="none"
                  colorScheme="red"
                  mr={3}
                  onClick={onClose}
                >
                  No
                </Button>
                <Button
                  width="100%"
                  borderRadius="none"
                  bg="bgColor"
                  color="white"
                  _hover={{
                    background: "bgColor",
                  }}
                  onClick={() => handleYes()}
                >
                  Yes
                </Button>
              </Flex>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SignOutModal;
