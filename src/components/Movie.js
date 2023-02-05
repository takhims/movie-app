import {
  Modal,
  ModalOverlay,
  ModalFooter,
  Button,
  ModalBody,
  ModalCloseButton,
  Text,
  ModalHeader,
  ModalContent,
} from "@chakra-ui/react";

export default function Movie(props) {
    if(!props.movieDetails) return null;
  return (
    <>
      <Modal
        blockScrollOnMount={false}
        isOpen={true}
        onClose={props.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.movieDetails.Title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              You can scroll the content behind the modal
            </Text>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={props.onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
