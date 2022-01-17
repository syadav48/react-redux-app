import React, {useState} from 'react'
import { buyCake } from '../redux'
import {connect} from 'react-redux'

function NewCakeContainer(props) {
    const [number, SetNumber] = useState(1)
    return (
        <div>
            <h2>Number Of Cakes - {props.numOfCakes}</h2>
            <input 
            type='text'
            value={number}
            onChange ={(e) => SetNumber(e.target.value)}
            />
            <button onClick= {() => buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes // cake is in rootreducer
        //selector --> there are countable no of state objects, and we need to select only few for our APP
    }
} // --> Step 1

const mapDispatchtoProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
} // step: 2 // importing action

export default connect(
    mapStatetoProps,
    mapDispatchtoProps
)(NewCakeContainer)