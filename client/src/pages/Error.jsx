import { Link, useRouteError } from "react-router-dom"
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg"
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>
          Ohh! The page you are looking for is not found
        </h3>
        <p>
          we cannot find the page you are looking for. Please check the URL or click the button below to go back to the homepage
        </p>
        <Link to="/dashboard">Back to Home</Link>
      </div>
    </Wrapper>
  }
  console.log(error);
  return (
    <Wrapper>
    <div>
      <h3>Something went wrong</h3>
    </div>
    </Wrapper>
  )
}

export default Error