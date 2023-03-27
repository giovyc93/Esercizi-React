import { useMemo } from "react"

const list = [
    {name:"Giulio", id: 1, age: 66,},
    {name:"Aldo", id: 2, age: 44,},
    {name:"ALberto", id: 3, age: 15,},
    {name:"Ginevra", id: 4, age: 8,},
    {name:"Alex", id: 5, age: 33,},

]


const FilteredList = () => {
    const users = useMemo(() => list.map((user) => user.age >= 18 && <li key={user.id}>{user.name} - {user.age}</li>), [] )

    return (
        <>
            <ul>
                {users}
            </ul>
        </>
    )
}

export default FilteredList