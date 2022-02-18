import Layout from '../components/Layout';
import { AuthProvider } from '../context/auth/AuthContext';

import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default App;
