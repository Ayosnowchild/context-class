import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>You are looking for what is not lost</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <div>
        <Link to={"/"}>Go back Home to find your way</Link>
      </div>
      <Link to={"/profile"}>Go back to your profile page</Link>
    </div>
  );
}
