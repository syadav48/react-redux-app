Redux Hooks: 
React-Redux Pattern 
Action creators, reducers, provide the store and connect the components.
component can access state and dispatch actions
Subscribe to store and dispatch action without *connect*

useSelector: extract the data from the Redux store state

mapStatetoProps: which recieve the redux state as its parameter and which then can be used as a prop in our Component. It has the second parameter ownProps that can be passed in parent component.

Async Action in Redux:

Fetch a list of users from an API end point and stores it in the redux store.
State? 
Actions?
Reducer? 

State = {
    loading: true,
    data: [],
    error: ''
}
loading- Display a loading spinner in your Component
data - List of users
error- Display error to the user

Actions:
FETCH_USERS_REQUEST
FETCH_USERS_SUCCESS
FETCH_USERS_FAILURE