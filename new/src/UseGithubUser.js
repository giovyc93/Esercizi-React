import { useState } from 'react'
import axios from 'axios';

export const UseGithubUser = (username) => {
    const url = `https://api.github.com/users/${username}`;
	const [ data, setData ] = useState([]);

	const getData = async () => {
		const response = await axios.get(url);
		console.log(response);
		setData(response.data);
	};
        
        return {

            data,
            getData

        }


}