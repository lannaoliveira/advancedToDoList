import React from 'react';
import { useState } from 'react';
import { Meteor } from 'meteor/meteor';

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const submit = (e) => {
        e.preventDefault();
        Meteor.loginWithPassword(username, password);
    }

  return (
    <div>
        <form onSubmit={(e) => submit(e)} className='login-form'>
            <div>
                <label>
                    <span>Email:</span>
                    <input 
                        type="email"
                        placeholder="Digite seu email"
                        required
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Senha:</span>
                    <input 
                        type="password"
                        placeholder="Digite sua senha"
                        required
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </label>
            </div>
            <div>
                <button type='submit'>Entrar</button>
            </div>
        </form>
    </div>
  );
}