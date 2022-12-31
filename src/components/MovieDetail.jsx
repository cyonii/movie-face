import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MovieReviews from "./MovieReviews";
import MovieCredits from "./MovieCredits";
import Loading from "./widgets/Loading";
import Movie404 from "./widgets/Movie404";
import { moviedb } from "../api/movies";

// Movie attributes component
const Attrbute = (props) => {
  const { label, value } = props;

  return (
    <div>
      <h6 className="text-slate-500 text-xs font-bold">{`${label}:`}</h6>
      {value instanceof Array ? (
        value.map((item) => (
          <span
            className="inline-block bg-slate-500 leading-none rounded py-1 px-3 mr-2 mb-2"
            key={item.name || item.english_name}
          >
            {item.name || item.english_name}
          </span>
        ))
      ) : (
        <b className="text-slate-300">{value}</b>
      )}
    </div>
  );
};

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const intComma = new Intl.NumberFormat().format;

  useEffect(async () => {
    setLoading(true);
    setNotFound(false);
    await moviedb
      .movieInfo(id)
      .then((data) => setMovie(data))
      .catch((err) => {
        if (err.response.status === 404) setNotFound(true);
      });
    setLoading(false);
  }, []);

  // Return loading indicator if movie data is not fetched
  if (loading) return <Loading />;

  // Return 404 if movie not found
  if (notFound) return <Movie404 />;

  return (
    <div className="container text-slate-50 py-5" data-testid="movie-detail">
      <div
        className="flex flex-col md:flex-row gap-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/w780/${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="basis-1/3">
          <img
            className="img-fluid"
            id="poster"
            src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

        <div className="basis-2/3 p-3">
          <h1 className="text-4xl text-slate-50 leading-none">
            <b>{movie.title}</b>
          </h1>
          <a
            href={movie.homepage}
            className="text-slate-500 font-light text-lg"
            target="_blank"
            rel="noreferrer"
          >
            <small>{movie.homepage}</small>
          </a>
          {movie.tagline && (
            <div className="bg-cyan-100 text-cyan-900 p-2 border-b-2 border-cyan-900 leading-none">
              {movie.tagline}
            </div>
          )}
          <p className="leading-5 text-cyan-600 mt-4">{movie.overview}</p>

          <hr className="my-5 border-slate-900" />

          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
            <Attrbute label="STATUS" value={movie.status} />
            <Attrbute label="RELEASE DATE" value={movie.release_date} />
            <Attrbute label="RUNTIME" value={`${movie.runtime} Minutes`} />
            <Attrbute label="RATING" value={`${movie.vote_average} / 10`} />
            <Attrbute label="VOTE COUNT" value={`${movie.vote_count}`} />
            <Attrbute
              label="POPULARITY"
              value={`${intComma(movie.popularity)}%`}
            />
            <Attrbute label="BUDGET" value={`$${intComma(movie.budget)}`} />
            <Attrbute label="REVENUE" value={`$${intComma(movie.revenue)}`} />
          </div>

          <hr className="my-5 border-slate-900" />

          <div className="grid grid-cols-2 gap-4">
            <Attrbute label="GENRES" value={movie.genres} />
            <Attrbute label="SPOKEN LANGUAGES" value={movie.spoken_languages} />
          </div>
        </div>
      </div>

      {/* Movie reviews */}
      <hr className="my-8 md:my-10 border-slate-900" />
      <div className="flex flex-col md:flex-row h-[400px] gap-4">
        <div className="md:basis-1/2 overflow-hidden overflow-y-auto h-full mt-3 md:mt-0 pb-3">
          <MovieReviews movieID={movie.id} />
        </div>

        <div className="md:basis-1/2 order-first md:order-last text-center">
          <img
            className="img-fluid"
            src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
            alt={movie.title}
          />
        </div>
      </div>

      {/* Credits row */}
      <hr className="my-5 border-slate-900" />
      <MovieCredits movieID={movie.id} />
    </div>
  );
};

export default MovieDetail;
