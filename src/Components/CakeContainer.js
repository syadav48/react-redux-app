import React from 'react'
import { buyCake } from '../redux'
import {connect} from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number Of Cakes - {props.numOfCakes}</h2>
            <button onClick= {props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStatetoProps = state => { // if you want to access state from the redux store,then map the state to our Component as props
    return {
        numOfCakes: state.cake.numOfCakes // cake is in rootreducer
        //selector --> there are countable no of state objects, and we need to select only few for our APP
    }
} // --> Step 1

const mapDispatchtoProps = dispatch => { // map our dispatch of an action creator to a prop in our component
    return {
        buyCake: () => dispatch(buyCake())
    }
} // step: 2 // importing action

export default connect(
    mapStatetoProps,
    mapDispatchtoProps
)(CakeContainer)

// connect function of redux: connect function connect the React Component to redux store 
