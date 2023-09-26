import { notFound } from "next/navigation";

export const getMovies = async () => {
  const response = await fetch(
    "https://moviesapi.ir/api/v1/movies?page={page}"
  );
  if (!response.ok) {
    return notFound();
  }
  return response.json();
};
export const getMovieById = async (movieId) => {
  const response = await fetch(`https://moviesapi.ir/api/v1/movies/${movieId}`);
  if (!response.ok) {
    return notFound();
  }
  return response.json();
};
