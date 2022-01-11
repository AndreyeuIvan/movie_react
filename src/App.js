import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movies";
import "./Movie.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Загрузка...</span>
          </div>
        ) : (
          movies.map((movie) => {
            console.log(movie);
            return (
              <div className="movies">
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              </div>
            );
          })
        )}
      </section>
    );
  }
}

export default App;




  render() {
    const { isLoading, serials } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Загрузка...</span>
          </div>
        ) : (
          serials.map((serial) => {
            console.log(serial);
            return (
              <div className="movies">
                <Serial
                  key={serial.id}
                  id={serial.id}
                  name={serial.name}
                  description={serial.description}
                />
              </div>
            );
          })
        )}
      </section>
    );
  }
}
