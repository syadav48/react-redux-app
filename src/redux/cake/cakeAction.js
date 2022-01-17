import { BUY_CAKE } from "./cakeType"

export const buyCake = (number = 1) => {
    return{
        type: BUY_CAKE,
        payload: number
    }
}
// payload: sends the additional information to the reducer.
// if you want to send some data from your component to your reducer, using the action payload is the conventional
// way of doing that.