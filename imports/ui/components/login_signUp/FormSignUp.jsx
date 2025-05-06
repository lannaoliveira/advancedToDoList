import React from 'react';
import { useState } from 'react';
import { Accounts } from "meteor/accounts-base";
import { Meteor } from 'meteor/meteor';

export const FormSignUp = ({ setIsClient }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const submit = (e) => {
        e.preventDefault();

        Accounts.createUser({email, username, password});
    }

  return (
    <div>
        <form onSubmit={(e) => submit(e)} className='login-form'>
            <div>
                <label>
                    <span>Nome:</span>
                    <input 
                        type="text"
                        placeholder="Digite seu nome"
                        required
                        onChange={(e) => setUsername(String(e.target.value))} 
                    />
                </label>
            </div>
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
                <button type='submit'>Cadastrar</button>
            </div>
            <div onClick={() => setIsClient(true)}>
                <span>Ja é cliente? Faça login</span>
            </div>
        </form>
    </div>
  );
}