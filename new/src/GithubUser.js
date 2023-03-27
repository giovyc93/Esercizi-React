import React, { useEffect } from 'react'

import { UseGithubUser } from './UseGithubUser'

const GithubUser = ({username="Parry93"}) => {

    const {data, loading, error, getData} = UseGithubUser(username)


    useEffect(() => {
    
        getData(username)
    
       }, [username])
    
    
    return(
        
        <div>
        
        {loading && <h1>Loading...</h1>}
        {error && <h1>There has been an error</h1>}
        {data && <h1>{data.name}</h1>}
        {data && <h1>{data.html_url}</h1>}
        </div>
        
    )
}

export default GithubUser