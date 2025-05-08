import React, { useState } from 'react';
import { LoginForm } from './components/login_signUp/FormLogin.jsx';
import { FormSignUp } from './components/login_signUp/FormSignUp.jsx'
import { Meteor } from 'meteor/meteor';

export const App = () => {
  const [isClient, setIsClient] = useState(!!Meteor.user() ?? '');
  return isClient ? <LoginForm /> : <FormSignUp setIsClient={setIsClient} />
};
