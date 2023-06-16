import axios from "axios"
export const prefix = 'friska'
export const useClient = () => {
    const client = axios.create({
        baseURL:`https://msib-feb3-objectstorage.productzillaacademy.com/collections`,
        
    })
    return client;
}

export default useClient