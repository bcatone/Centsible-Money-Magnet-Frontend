import React, {useEffect, useState} from "react";
import { usePlaidLink } from "react-plaid-link";


export default function ConnectPlaid(){
    // Get link token from plaid api
    const [linkToken, setLinkToken] = useState('')
    useEffect(()=>{
        fetch('http://localhost:8000/api/create_link_token', {method: "POST"}).then((res) => res.json()
        ).then((res) => setLinkToken(res.link_token))
    },[])

    const linkButtonDisabled = linkToken === ''

    const config = {
        onSuccess: (public_token, metadata) => {console.log(public_token, metadata)},
        onExit: (err, metadata) => {console.log(err, metadata)},
        onEvent: (eventName, metadata) => {console.log(eventName, metadata)},
        token: linkToken,
      }

    const plaidLink = usePlaidLink(config)

    return( 
    <div>
        <h3>Connect Your Bank Accounts Through Plaid:</h3>
        <button disabled={linkButtonDisabled} onClick={()=> plaidLink.open()}>Link Banks</button>
    </div>)
}