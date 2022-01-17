import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserComponent({fetchUsers}) {
    useEffect(() => {
        fetchUsers()
    }, [])
    
    return (
        userData.loading ? (
            <h2>Loading</h2>
        ) : userData.error ? (
            <h2>{userData.error}</h2>
        ) : (
            <div>
                <h2>User List</h2>
                <div>
                    {
                        userData && 
                        userData.users && 
                        userData.users.map(user => <p>{user.name}</p>)
                    }
                </div>
            </div>
        )
    )
}

const mapStatetoProps = state => {
    return{
        userData: state.users
    }
}

const mapDispatchtoProps = dispatch => {
    return{
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(UserComponent)
