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
  Image
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
        <ModalContent display='flex' flexDirection='column' alignItems='center'>
        <Image
                height="300px"
                marginTop='15px'
                width="200px"
                src={props.movieDetails.Poster}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
          <ModalHeader>{`${props.movieDetails.Title} (${props.movieDetails.Year})` }</ModalHeader>
          
          <ModalCloseButton />
          <ModalBody>
            <Text  mb="1rem">
              {props.movieDetails.Plot}
            </Text>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={props.onClose}>
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
