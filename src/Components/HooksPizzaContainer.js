import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyPizza } from '../redux/pizza/pizzaAction'

function HooksPizzaContainer() {
    const numOfPizza = useSelector(state => state.pizza.numOfPizza) // state changed in rootreducer function as we re dealing with multiple reducer and we changed the global state of our APP
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num Of Pizza - {numOfPizza}</h2>
            <button onClick={() => dispatch(buyPizza())}>Buy Pizza</button>
        </div>
    )
}

export default HooksPizzaContainer
