import React, { useState } from 'react';
import { LoginForm } from './routes/FormLogin';
import { FormSignUp } from './routes/FormSignUp'

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
