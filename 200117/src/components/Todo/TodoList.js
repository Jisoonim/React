//1
import React, {useEffect, useState} from 'react'

import axios from 'axios'

const TodoList =() => {
    
    const [page, setPage] = useState(1)
    const [arr, setArr] = useState([])

    useEffect(() => {

        console.log("axios run............")
        axios.get("http://10.10.10.132:8080/todos/list?page=" + page)
        .then(res => setArr(res.data.content) )

        // setTimeout(() => {
        //     console.log("axios run......" + page)
        //     //setPage(page + 1)
        // }, 2000)

        return () => {
        console.log("clean up")
        }

    },[page])

    const handleNext = () => {
        console.log("handle....NEXT")
        setPage(page + 1)
    }

    const list = arr.map(t => <li key={t.tno}>{t.tno} ---- {t.title}</li>)

    // const pageNum = parseInt(page || 1)

    return (
        <div>
            <ul>
                {list}
            </ul>
            <button onClick={handleNext}>NEXT</button>
        </div>
    )
}
export default TodoList