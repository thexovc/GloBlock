import { ethers } from 'ethers';
import { useState, useEffect } from 'react';

export default function Navigation({ signer, setSigner }) {
    
    const [address, setAddress] = useState(null);
    // get account address from signer when it changes
    useEffect(() => {
        if (!signer) {
            setAddress(null);
            return;
        }
        signer.getAddress().then(setAddress);
    }, [signer]);

    // connect to metamask
    const connect = async () => {
        // check if metamask is installed
        if (typeof window.ethereum === 'undefined') {
            alert('Please install MetaMask first.');
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        setSigner(provider.getSigner());
    };

    // delete signer
    const disconnect = async () => {
        setSigner(null);
    };
  
    return (
    <nav>
        <div className="nav-title">
            <img src="/passport.png"/>
            <h1>NFT Passport</h1>
        </div>

        {/*show account address if connected, else show connect button*/}
        {address ? (
            <button
            type="button"
            className="nav-connect"
            onClick={disconnect}>
                {address.slice(0, 6) + '...' + address.slice(-4)}
            </button>
        ) : (
            <button
                type="button"
                className="nav-connect"
                onClick={connect}>
                Connect
            </button>
        )}
    </nav>
  );
}