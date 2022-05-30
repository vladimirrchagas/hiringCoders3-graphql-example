import React, { useState } from "react"

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const URL = 'http://desktop-44k0o39:8000/authenticate';

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then((response) => response.json())
        .then((data) => console.log('Success!', data));
    };

    const handleEmailChange = event => setEmail(event.target.value);

    const handlePasswordChange = event => setPassword(event.target.value);

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    value={email}
                    id="email"
                    inputMode="email"
                    onChange={handleEmailChange}
                    autoComplete="username" />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    value={password}
                    id="password"
                    inputMode="password"
                    onChange={handlePasswordChange}
                    autoComplete="current-password" />
            </fieldset>
            <button type="submit">Entrar</button>
        </form>
    )
}
