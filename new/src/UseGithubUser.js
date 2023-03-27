import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((response) => response.json())

const UseGithubUser = (username) => {
    const {data, error} = useSWR(`https://api.github.com/users/${username}`, fetcher)
console.log(data.name)


return {

    data,
    loading: !data && !error,
    error,
   

}
}

export default UseGithubUser