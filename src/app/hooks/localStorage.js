import { useState } from "react";
import { useCookies } from 'react-cookie'

export const useLocalStorage = (key, initialValue) => {
   const [cookies, setCookie, removeCookie] = useCookies([key]);
   const value =  JSON.parse(
    localStorage.getItem(key) || JSON.stringify(initialValue || null)
    );

   const [state, setState] = useState(value);
   return [
    state,
    (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setCookie(key, JSON.stringify(value))
        setState (value)
    }
   ]
}