import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
    <div>
        <h1>Ups!</h1>
        <p>Lo sentimos, un error inesperado ocurrió.</p>
        <p className="text-center">{error.statusText || error.message}</p>
    </div>
    );
}

export default ErrorPage