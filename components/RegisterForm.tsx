// components/RegisterForm.tsx

import { useState } from 'react';
import styles from '../styles/Home.module.css';

interface RegisterFormProps {
    onRegister: (formData: FormData) => void;
}

interface FormData {
    name: string;
    email: string;
    organization: string;
    password: string;
    kycDocuments: File | null;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [organization, setOrganization] = useState('manufacturer');
    const [password, setPassword] = useState('');
    const [kycDocuments, setKycDocuments] = useState<File | null>(null);
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Example of form validation
        if (!name || !email || !password || !kycDocuments) {
            setMessage('Please fill in all fields.');
            return;
        }

        setMessage('Registering user...');
        const formData: FormData = {
            name,
            email,
            organization,
            password,
            kycDocuments,
        };
        onRegister(formData);
    };

    return (
        <div className={styles.container}>
            <h1>User Registration</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="organization">Organization Type</label>
                <select
                    id="organization"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    required
                >
                    <option value="manufacturer">Manufacturer</option>
                    <option value="supplier">Supplier</option>
                    <option value="validator">Validator</option>
                    <option value="consumer">Consumer</option>
                </select>

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <label htmlFor="kycDocuments">KYC Documents</label>
                <input
                    type="file"
                    id="kycDocuments"
                    onChange={(e) => setKycDocuments(e.target.files ? e.target.files[0] : null)}
                    accept=".pdf,.jpg,.png"
                    required
                />

                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RegisterForm;
