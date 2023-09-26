import Image from "next/image";
import Link from "next/link";

export default async function MoviesList({ movies }) {
  return (
    <div className="flex gap-5 justify-around items-center flex-wrap">
      {movies.data.map((movie) => {
        return (
          <div
            className="flex flex-col justify-between border-[1px] border-indigo-200 rounded-xl overflow-hidden  w-64 max-h-[450px]"
            key={movie.id}
          >
            <Link href={`/movies/${movie.id}`}>
              {" "}
              <Image
                alt={movie.title}
                width={280}
                height={220}
                priority={true}
                src={movie.poster}
                className="max-w-[256px] max-h-60"
              />
            </Link>

            <div>
              <div className="flex justify-between items-center">
                <span className="p-2 italic">{movie.title}</span>
                <span className="p-2 italic text-indigo-500 font-bold">
                  {movie.imdb_rating}
                </span>
              </div>
              <p className="p-2 ">{movie.genres.join("-")}</p>
            </div>

            <div className="flex justify-between items-center">
              <span className="bg-indigo-600 text-white py-[2px] px-4 rounded-md m-2">
                {movie.country}
              </span>
              <span className="bg-indigo-600 text-white py-[2px] px-4 rounded-md m-2">
                {movie.year}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
