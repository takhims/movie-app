import {
  Button,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardBody,
  Card,
  Spinner
} from "@chakra-ui/react";
import React from "react";

const MovieList = (props) => {
  // console.log(props.movieList)
  return (
    <>
    { !props.isLoading ?
    <div className="movie-container">
       {props.movieList?.map((movie, index) => (
        <div className="card" key={movie.imdbID}  >
          <Card borderRadius="15px" boxShadow="0px 0px 20px 1px rgb(0 0 0 / 20%)" transition='all 0.3s' maxW="sm" margin='10px' justifyContent='center' _hover={{transition: 'all 0.3s', transform: 'translateY(-20px)'}} >
            <CardBody display='flex' flexDirection='column' alignItems='center'>
              <Image
                height="300px"
                width="200px"
                src={movie.Poster}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">
                  <Button
                    style={{ backgroundColor: "transparent" }}
                    onClick={() => props.setMovieDetails(movie)}
                  >
                    {movie.Title}
                  </Button>
                </Heading>
                <Text>{movie.Year}</Text>
                <Text color="blue.600" fontSize="2xl">
                  {movie.imdbRating}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </div>
      ))}     
    </div> : <Spinner size='xl' margin='15px'/>}</>

  );
};

export default MovieList;
