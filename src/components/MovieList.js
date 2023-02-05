import {
  Button,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardBody,
  Card,
} from "@chakra-ui/react";
import React from "react";

const MovieList = (props) => {
  // console.log(props.movieList)
  return (
    <div className="movie-container">
      {props.movieList?.map((movie, index) => (
        <div key={movie.imdbID} style={{gap: '20px'}}>
          <Card maxW="sm">
            <CardBody>
              <Image
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
    </div>
  );
};

export default MovieList;
