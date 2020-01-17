//1
import React from 'react'
import {connect} from 'react-redux'

const CountDisplay = (props) => {

    return (
        <div>
            <h1>Count : {props.count}</h1>
        </div>
    )
}

const mapStateToProps = ({countReducer}) => {

    console.log("mapStateToProps", countReducer)
    return countReducer
}
export default connect(mapStateToProps)(CountDisplay)