import React, { useEffect, useState } from 'react';
import axios from 'axios';



const GithubUser = ({username = "Giovyc93"}) => {
    const url = `https://api.github.com/users/${username}.`;
	const [ data, setData ] = useState([]);

	const getData = async () => {
		const response = await axios.get(url);
		console.log(response);
		setData(response.data);
	};

	useEffect(
		() => {
			getData();
		},
		
	);

	return (
		<div>
			<h2>{data.name}</h2>
			<p>{data.html_url}</p>
		</div>
	);
}

export default GithubUser