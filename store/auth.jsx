import React, { useContext, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(
        localStorage.getItem("token")
    )
    
    const storeTokenInLS = (serverToken) =>{
        setToken(serverToken);
        return localStorage.setItem("token", serverToken); 
    }

    const LogoutUser = () =>{
        setToken("");
        toast.success("You have been logged out successfully!");
        return localStorage.removeItem("token");
    }

    let isLoggedIn = !! token;

    return(
        <>
        <AuthContext.Provider value={{storeTokenInLS, LogoutUser, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
        </>
    );
}

export const useAuth = () =>{
    const authContextValue = useContext(AuthContext);

    if(!authContextValue)
    {
        throw new Error("Provider is not set at the main.jsx or index.js file")
    } else{
        return authContextValue;
    }
}