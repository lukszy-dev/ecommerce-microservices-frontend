import Layout from '../components/Layout/Layout';
import { AuthProvider } from '../context/auth/AuthContext';
import { CartProvider } from '../context/cart/CartContext';

import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
