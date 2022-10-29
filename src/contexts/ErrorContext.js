import { createContext, useContext, useState } from 'react';

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

 const useError = () => {
    const ctx = useContext(ErrorContext);
    return ctx;
  };
  

 export default ErrorContextProvider;

 export { ErrorContext, useError };