import React from 'react'

export default function Login() {
    return(
        <div>
            <h1>Create Meeting</h1>
            <button><a href="https://api.getgo.com/oauth/v2/authorize?client_id=2b58b685-2a3a-491b-8fc4-363a85ada392&response_type=code&redirect_uri=http://localhost:3000/goto">Login to Goto</a></button>
        </div>
    )
}