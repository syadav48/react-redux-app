import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamAction'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of iceCream -{props.numOfIceCream} </h2>
            <button onClick={props.buyIceCream}>Buy iceCream</button>
        </div>
    )
}

const mapStatetoProps = state => {
    return{
        numOfIceCream: state.iceCream.numOfIceCream  // iceCream specifies the iceCream that is in rootReducer
    }
}
const mapDispatchtoProps = dispatch => {
    return{
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(
    mapStatetoProps, 
    mapDispatchtoProps
    )(IceCreamContainer)
