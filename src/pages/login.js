import Router from 'next/router';
import Cookies from 'js-cookie';

import Button from '../components/Button';
import Input from '../components/Input';

export default function Login() {
  const login = async (event) => {
    event.preventDefault();

    const { email, password } = event.target;

    const res = await fetch('api/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })
    const { token } = await res.json()
    if (token) {
      console.log(token);
      Cookies.set('Authorization', token);
    }

    Router.push('/');
  }

  return (
    <div>
      {/* { user && <code className="break-all">{user}</code> } */}
      <form onSubmit={login}>
        <Input id="email" label="Email"></Input>
        <Input id="password" label="Password"></Input>
        <Button>Login</Button>
      </form>
    </div>
  )
}
