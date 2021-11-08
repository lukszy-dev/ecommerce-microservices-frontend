import Button from '../components/Button';
import Input from '../components/Input';
import useUser from '../lib/useUser';

export default function Login() {
  const user = useUser();

  return (
    <div>
      <code className="break-all">{user}</code>
      <Input label="Login"></Input>
      <Input label="Password"></Input>
      <Button>Login</Button>
    </div>
  )
}
