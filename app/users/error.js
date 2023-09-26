"use client";
const ErrorPage = ({ error, reset }) => {
  console.log(error);
  return (
    <>
      <div>An unespectedddd error has occured !..</div>
      <button
        className="py-2 px-4 bg-sky-400 rounded-md text-white"
        onClick={() => reset()}
      >
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
