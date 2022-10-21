import { createContext, useState } from "react";

 const ErrorContext = createContext();

 function ErrorContextProvider({ children }) {
    const [error, setError] = useState(null);
    const [trigger, setTrigger] = useState(null);
    return (
    <ErrorContext.Provider value={{ error,setError,trigger,setTrigger}}>
        {children}
    </ErrorContext.Provider>
    );
 }

 export default ErrorContextProvider;

 export { ErrorContext };