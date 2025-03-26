import { useRouteError } from "react-router-dom"

const ErrorBoundary = ()=>{
    const error = useRouteError();
    return(
        <div>
            <h2 className=" font-bold p-2 mt-2">Ops...SomeThing Went Wrong.😒</h2>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorBoundary