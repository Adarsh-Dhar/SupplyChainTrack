// components/WalletIntegration.tsx

import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const WalletIntegration: React.FC = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const [walletBalance, setWalletBalance] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Simulate wallet connection for demo
        setWalletAddress('0xAbCdEfGhIjKlMnOpQrStUvWxYz0123456789');
        setWalletBalance('5.0'); // ETH
    }, []);

    const handleConnectWallet = () => {
        // Connect wallet logic here
        alert('Connect Wallet clicked');
    };

    return (
        <div className={styles.container}>
            <h1>Wallet Integration</h1>
            <div id="walletInfo">
                <p>Connected Wallet Address: <span>{walletAddress}</span></p>
                <p>Wallet Balance: <span>{walletBalance} ETH</span></p>
                <button onClick={handleConnectWallet}>Connect Wallet</button>
            </div>
            {message && <p>{message}</p>}
        </div>
    );
};

export default WalletIntegration;
