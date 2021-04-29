import Routes from './routes';
import GlobalStyle from './GlobalStyle';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <AuthProvider>
        <GlobalStyle/>
        <ToastContainer />
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
