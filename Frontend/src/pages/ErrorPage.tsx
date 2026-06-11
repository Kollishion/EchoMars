import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-blue-300">
      <h1 className="text-4xl font-bold">404 😢</h1>
      <p>
        You've ventured into uncharted digital territory. The page you seek has
        eluded us. Let's guide you back to familiar paths.
      </p>
      <Link to="/" className="text-blue-500 underline">
        Go back home
      </Link>
    </div>
  );
};

export default ErrorPage;
