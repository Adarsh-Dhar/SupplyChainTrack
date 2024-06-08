// components/RestakingForm.tsx

import { useState } from 'react';
import styles from '../styles/Home.module.css';

interface RestakingFormProps {
    onRestake: (formData: FormData) => void;
}

interface FormData {
    amount: number;
    duration: string;
}

const RestakingForm: React.FC<RestakingFormProps> = ({ onRestake }) => {
    const [amount, setAmount] = useState(0);
    const [duration, setDuration] = useState('1 month');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Example of form validation
        if (amount <= 0) {
            setMessage('Please enter a valid amount.');
            return;
        }

        setMessage('Restaking tokens...');
        const formData: FormData = {
            amount,
            duration,
        };
        onRestake(formData);
    };

    return (
        <div className={styles.container}>
            <h1>Restaking Tokens</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="amount">Amount to Restake</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    required
                />

                <label htmlFor="duration">Duration</label>
                <select
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                >
                    <option value="1 month">1 month</option>
                    <option value="3 months">3 months</option>
                    <option value="6 months">6 months</option>
                    <option value="1 year">1 year</option>
                </select>

                <button type="submit">Restake</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RestakingForm;
