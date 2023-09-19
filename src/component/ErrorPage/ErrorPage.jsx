import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops!!!</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not Found</h3>
                    <p>Go Back Where You From</p>
                    <Link to='/'>Home</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;