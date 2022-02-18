import { VFC } from 'react';
import Router from 'next/router';

import Button from '../components/Button';
import Input from '../components/Input';
import { useAuth } from '../context/auth/AuthContext';

const Login: VFC = () => {
  const { signIn } = useAuth();

  const login = (event) => {
    event.preventDefault();
    const { email, password } = event.target;

    fetch('api/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })
    .then(response => response.json())
    .then(({ token }) => {
      signIn(token);
      Router.push('/');
    });
  }

  return (
    <div>
      <form onSubmit={login}>
        <Input id="email" label="Email"></Input>
        <Input id="password" label="Password"></Input>
        <Button classes="mt-4">Login</Button>
      </form>
    </div>
  )
};

export default Login;
