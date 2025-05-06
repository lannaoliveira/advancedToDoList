import React, { useState } from 'react';
import { LoginForm } from './components/login_signUp/FormLogin';
import { FormSignUp } from './components/login_signUp/FormSignUp'

export const App = () => {
  const [isClient, setIsClient] = useState('');

  return (
    <div>
      {
        isClient ? <LoginForm /> : <FormSignUp setIsClient={setIsClient} />
      }
    </div>
  );
};
