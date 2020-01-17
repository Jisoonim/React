import React from 'react'
import CountWrapper from './CountWrapper'
import {useDispatch} from 'react-redux'
import {increase, decrease} from '../../actions'

const CountButtons = () => {

    const dispatch = useDispatch()
    console.log(dispatch)

    const handleInc = () => {
        //alert("INC")
        dispatch(increase())
    }
    const handleDec = () => {
        //alert("DEC")
        dispatch(decrease())
    }

    return (
        <div>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
    )
}
export default CountButtons