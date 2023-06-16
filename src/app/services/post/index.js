
import useClient, { prefix }from "../rest-client"
import { cookies } from 'next/headers'
export const usePostService = () => {
    const collection = `${prefix}_posts`
    const client = useClient()
    const getPosts = async () => {
        const cred = cookies().get('credential')
        return client.get(collection,{
            params: {
                sort: '-timestamp'
            },
            headers: {
                Authorization: `Bearer ${JSON.stringify(cred)}`
            }
        }).then((response) => {
            return response.data
        }).finally(() => {
        })
    }
    const createPosts = async (post) => {
        return client.post(collection, { post, timestamp: new Date() }).then((response) => {
            return response.data
        }).finally(() => {

        })
    }
    const deletePosts = async (id) => {
        return client.delete(`${collection}/id/${id}`).then((response) => {
            return response.data
        }).finally(() => {
        })
    }
    const updatePosts = async (id, post) => {
        return client.put(`/collection/id/${id}`, post ).then((response) => {
            return response.data
        }).finally(() => {
        })
    }
    return {getPosts, createPosts, deletePosts, updatePosts}
}
export default usePostService