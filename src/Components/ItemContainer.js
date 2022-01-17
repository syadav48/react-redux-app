import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

const ItemContainer = (props) => {
    return (
        <div>
            <h2>Item- {props.item}</h2>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )
}

const mapStatetoProps = (state, ownProps) => {
   const itemState = ownProps.cake ? state.cake.numOfCakes : state.pizza.numOfPizza

   // own props can be used to pass their ownprops into the component.  
   return{
       item: itemState
   }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake 
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(ItemContainer)

// incase of using of only mapDispatch, we need to use null to mapStatetoProps
