import { useState } from 'react'
import axios from 'axios';

export const UseGithubUser = (username) => {
    const url = `https://api.github.com/users/${username}`;
	const [ data, setData ] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

 
	const getData = async () => {
        try {
            const response = await axios.get(url);
            console.log(response);
            setData(response.data);
            
            }catch (error){
                setError(error)
                setData(null)
            
            }finally{
                setLoading(false)
            }       
    
    }

        return {

            data,
            loading,
            error,
            getData

        }


}