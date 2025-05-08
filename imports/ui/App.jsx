import React, { useState, createContext, useEffect, useContext } from 'react';
import { LoginForm } from './components/login_signUp/FormLogin.jsx';
import { FormSignUp } from './components/login_signUp/FormSignUp.jsx'
import { contextApp } from '../../client/main.jsx';
import { Meteor } from 'meteor/meteor';

export const App = () => {

  const context = useContext(contextApp);
  
  const [isClient, setIsClient] = useState('');

  return (
    
      <div>
        {
          isClient ? <LoginForm /> : <FormSignUp setIsClient={setIsClient} />
        }
      </div>
  );
};
