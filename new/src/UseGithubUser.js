
import useSWR, { mutate } from "swr"

const fetcher = (url) => fetch(url).then((response) => response.json())

const UseGithubUser = (username) => {
    const {data, error} = useSWR(username?`https://api.github.com/users/${username}`: null, fetcher)
console.log(data.name)

function refetchData(){
    mutate()
}

return {

    data,
    loading: !data && !error,
    error,
    refetchData,
   

}
}

export default UseGithubUser