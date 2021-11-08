import { useEffect, useState } from 'react';

export default function useUser() {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    if (!user) {
      const res = await fetch('api/login', {
        method: 'POST',
        body: {
          email: 'test@test.pl',
          password: 'password'
        }
      })
      const { token } = await res.json()
      setUser(token);
    }
  }, [user, setUser]);

  return user
}
