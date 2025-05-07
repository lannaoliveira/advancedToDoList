import React from 'react';
import { useState } from 'react';
import { Accounts } from "meteor/accounts-base";
import { Meteor } from 'meteor/meteor';

import './FormSignUp.css';

export const FormSignUp = ({ setIsClient }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const submit = (e) => {
        e.preventDefault();

        Accounts.createUser({email, username, password});
        Meteor.loginWithPassword(email, password);

        setUsername('');
        setPassword('');
        setEmail('');
    }

  return (
    <div className='main-container-form-signUp'>
        <div className='between'>
            <div className='container-form-signUp'>
                <div className="main-title">
                    <h2>Seja Bem vindo, crie já sua conta!</h2>
                </div>
                <form onSubmit={(e) => submit(e)} className='form-signUp'>
                    <div className='container-input'>
                        <label>
                            <span>Nome:</span>
                            <input 
                                type="text"
                                placeholder="Digite seu nome"
                                required
                                onChange={(e) => setUsername(String(e.target.value))} 
                            />
                        </label>
                    
                        <label>
                            <span>Email:</span>
                            <input 
                                type="email"
                                placeholder="Digite seu email"
                                required
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </label>

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
                    <div className='submit-button'>
                        <button type='submit'>Cadastrar</button>
                    </div>
                    <div className='isClient-text' onClick={() => setIsClient(true)}>
                        <span>Ja é usuário? Clique aqui, e faça login</span>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}