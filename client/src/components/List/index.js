import React from 'react'

function List() {
    const [list, setList] = useState([])
    return (
        <div>
            <ul>
                {list.map((item) => {
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default List
