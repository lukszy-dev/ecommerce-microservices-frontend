import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

export default function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get('Authorization');
    if (!user && token) {
      const { role, email } = jwtDecode(token);
      setUser({
        token,
        role,
        email
      })
    }
  }, [user, setUser]);

  return user || {};
}
