import MoviesList from "@/components/MoviesList";
import { getMovies } from "@/lib/movies";

export default async function Movies() {
  const movies = await getMovies();
  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
}

