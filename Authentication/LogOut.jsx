import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useNavigate } from 'react-router-dom/dist';

export const LogOut = () =>{

    const {LogoutUser} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        LogoutUser();
    }, [LogoutUser]);

    navigate("/");
}

