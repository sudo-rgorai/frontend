import React, { useEffect } from 'react'
import axios from 'axios'

export default function Redirect() {
    useEffect(() => {
        let url = new URL(window.location.href)
        const code = url.searchParams.get('code')
        const headers=  {
            'Authorization': `Basic MmI1OGI2ODUtMmEzYS00OTFiLThmYzQtMzYzYTg1YWRhMzkyOkdTNHpqcGxObnUxQUxRWHEvWElMQ2c9PQ==`,
            'Accept':'application/json',
            "Content-Type": "application/x-www-form-urlencoded",
        }
        const data = {
            'redirect_uri': 'http://localhost:3000/goto',
            'grant_type': 'authorization_code',
            'code': code
        }

        console.log('headers ',headers)
        console.log('data ', data)
        axios
            .post('https://api.getgo.com/oauth/v2/token', 
            {
                headers:headers
            },
            data
        )
        .then(res => {
            console.log("res.data ", res.data)
            console.log("res.data ", res.data.access_token)

            localStorage.setItem('ACCESS_TOKEN', res.data.access_token)
            
        })
        .catch(err => {
            console.log('err is ',err)
        })
            
    }, [])
    
    return(
        <div>
            <h1>Please Wait</h1>
        </div>
    )
}