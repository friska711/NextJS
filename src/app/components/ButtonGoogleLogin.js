"use client"

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"
import { useLocalStorage } from "../hooks/localStorage"
import { useEffect } from "react"
import config from "../config"

export const ButtonGoogleLogin = () => {
    const [credential, setCredentialStorage] = useLocalStorage ('credential')
    const  onCredentialSuccess = (response) => {
        setCredentialStorage(response.credential)
    }
    const  onCredentialError = (error) => {
        console.log(error)
    }
    useEffect (() => {
        if (credential) window.location='/'
    }, [credential])
    return (
        <div>
            <GoogleOAuthProvider
              clientId={config.google.clientId}
              >
            <GoogleLogin onSuccess={onCredentialSuccess} onError={onCredentialError}>
            </GoogleLogin>
            </GoogleOAuthProvider>
        </div>
        
    )
}