import React, { useCallback, useEffect, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';

function PlaidLinkButton() {

  const [token, setToken] = useState([])
  const onSuccess = useCallback((public_token, metadata) => {
    // send public_token to server
  }, []);

  const config = {
    token,
    onSuccess,
    // add other configurations as needed
  };

  const { open, ready } = usePlaidLink(config);


  useEffect(() => {
    const fetchLinkToken = async () => {
      const response = await fetch('http://127.0.0.1:5555/getlinktoken', { method: 'POST' });
      const data = await response.json();
      setToken(data.link_token); // Assuming you have a state variable to hold this
    };
  
    fetchLinkToken();
  }, []);

  return (
    <button onClick={() => open()} disabled={!ready}>
      Connect a bank account
    </button>
  );
};

export default PlaidLinkButton;