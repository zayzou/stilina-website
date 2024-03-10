import {useRouteError} from "react-router-dom";

function ErrorElement() {
    const error = useRouteError();
    const message = error.response.data.detail
    return <h4 className="font-bold text-4xl">{message}</h4>;
}

export default ErrorElement;
