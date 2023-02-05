import "./App.css";
import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import { Button, Input, Container, Box, Text } from "@chakra-ui/react";
import Movie from "./components/Movie";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [sort, setSort] = useState(-1);
  const [movieDetails, setMovieDetails] = useState(null);

  const fetchMovieData = async () => {
    //console.log("Hekkllooo")
    setErrorMessage(null);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchValue}&apikey=1538df62`
      );
      const data = await response.json();
      if (data.Error) {
        setErrorMessage(data.Error);
      } else {
        const promiseList = data.Search.map((e) => {
          return fetch(`http://www.omdbapi.com/?i=${e.imdbID}&apikey=1538df62`);
        });
        let list = await Promise.all(promiseList);
        list = list.map((i) => i.json());
        list = await Promise.all(list);

        list.sort((a, b) => {
          const aYear = parseInt(a.Year.split("-")[0], 10);
          const bYear = parseInt(b.Year.split("-")[0], 10);
          if (aYear > bYear) return sort;
          else return -1 * sort;
        });

        setMovieList(list);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const copy = [...movieList];
    copy.sort((a, b) => {
      const aYear = parseInt(a.Year.split("-")[0], 10);
      const bYear = parseInt(b.Year.split("-")[0], 10);
      if (aYear > bYear) return sort;
      else return -1 * sort;
    });
    setMovieList(copy);
    //
  }, [sort]);

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="App">
      <Container maxW="xl" centerContent>
        <Box
          boxShadow="0 0 7px 2px rgb(0 0 0 / 10%);"
          display="flex"
          bg="white"
          justifyContent="center"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="2px"
          w="100%"
        >
          <Text fontSize="4xl" fontFamily="Work sans">
            MoviePedia
          </Text>
        </Box>

        <Box
          bg="white"
          justifyContent="center"
          w="100%"
          p={4}
          borderRadius="lg"
          borderWidth="2px"
        >
          <Text>Please search for movie below:</Text>
          <form onSubmit={(e) => { e.preventDefault(); fetchMovieData()}}><Input placeholder="Enter the Movie Name" onChange={onChange}/></form>

          <Button
            position="center"
            colorScheme="blue"
            width="100%"
            onClick={fetchMovieData}
            style={{ marginTop: 15 }}
            disabled
          >
            Search
          </Button>
        </Box>
        {movieList.length> 0?  <Button onClick={() => setSort(-1 * sort)}>{sort === 1 ? "ASC" : "DESC"}</Button> : null}
      </Container>
      {errorMessage ? <strong>Oops! {errorMessage}</strong> : null}
      <MovieList setMovieDetails={setMovieDetails} movieList={movieList} />
      <Movie movieDetails={movieDetails} onClose={() => setMovieDetails(null)}/>
    </div>
  );
}

export default App;
