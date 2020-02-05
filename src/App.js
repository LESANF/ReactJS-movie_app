import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");

    this.setState({ movies, isLoading: false }); // movies(기존 state) : movies(axios movies)
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map(moviesObj => (
              <Movie
                key={moviesObj.id}
                title={moviesObj.title}
                poster={moviesObj.medium_cover_image}
              />
            ))}
      </div>
    );
  }
}

export default App;
