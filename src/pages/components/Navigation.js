export default function Navigation({ account, setAccount }) {
  

    // connect to metamask
    const getAccount = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        setAccount(account);
    };
  
    return (
    <nav>
        <div className="nav-title">
            <img src="/passport.png"/>
            <h1>NFT Passport</h1>
        </div>

        {/*show account address if connected, else show connect button*/}
        {account ? (
            <button
            type="button"
            className="nav-connect">
                {account.slice(0, 6) + '...' + account.slice(-4)}
            </button>
        ) : (
            <button
                type="button"
                className="nav-connect"
                onClick={getAccount}>
                Connect
            </button>
        )}
    </nav>
  );
}