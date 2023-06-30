import {useContext, useEffect} from "react";
import AppContext from "./context";

const App = () => {
    const { apiCalls, user } = useContext(AppContext)

    useEffect(() => {
        apiCalls.getUser("Bobby")
    }, [])

    return(
        <>
            <h1>Hello world</h1>
            {user !== undefined && <p>{`The user is ${user.username}`}</p>}
        </>
    )
}

export default App