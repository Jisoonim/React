//3

const initState = {arr:[]}

export default function todoReducer(state = initState, action) {

    const {type, payload} = action
    
    if(type !== 'TODO') {
        return state
    }

    console.log("todo reducer.........", action)
    
    return state
}