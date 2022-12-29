import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loading from "./widgets/Loading";
import { moviedb } from "../api/movies";

export default function MovieCredits({ movieID }) {
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    moviedb
      .movieCredits(movieID)
      .then(({ cast }) => setCredits(cast))
      .catch((err) => err);

    setLoading(false);
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <h2 className="text-2xl mb-2 font-bold">Credits</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2">
        {/* Sort credits by image availability */}
        {credits
          .sort((a, b) => {
            if (a.profile_path && !b.profile_path) return -1;
            if (!a.profile_path && b.profile_path) return 1;
            return 0;
          })
          .map((credit) => (
            <div
              className="flex flex-col bg-slate-900 h-full text-center rounded-sm overflow-hidden"
              key={credit.credit_id}
            >
              {credit.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
                />
              ) : (
                <div className="py-4">
                  <i className="bi bi-person-square text-6xl text-slate-700" />
                </div>
              )}

              <div className="d-flex flex-column justify-content-end px-1 py-2">
                <h6 className="leading-none">{credit.name}</h6>
                <p className="text-slate-500">
                  <small>{credit.character}</small>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

// validate props
MovieCredits.propTypes = {
  movieID: PropTypes.number.isRequired,
};
