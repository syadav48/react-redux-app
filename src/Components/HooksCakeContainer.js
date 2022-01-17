import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {buyCake} from '../redux'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes) // useSelector: extract the data from the redux store state. cake is in rootReducer
    const dispatch = useDispatch() // this hooks returns a reference to the dispatch function from redux store.
    return (
        <div>
            <h2>Num of Cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>
        </div>
    )
}

export default HooksCakeContainer

//useSelector is a hook that react-redux library provide which acts as close equivalent to mapStatetoProps function
// to get hold of any state that is maintain in the redux stroe-- we use useSelector Hook

//useDispatch will dispatch an action in Hooks 