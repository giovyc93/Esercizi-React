import React, { useEffect, useState } from 'react'
import axios from "axios"
import { UseGithubUser } from './UseGithubUser'

const GithubUser = ({username="giovyc93"}) => {
	const {data, getData} = UseGithubUser(username)

	useEffect(
		() => {
			getData();
		},
		[ username ]
	);

	return (
		<div>
			<h2>{data.name}</h2>
			<p>{data.html_url}</p>
		</div>
	);
}

export default GithubUser