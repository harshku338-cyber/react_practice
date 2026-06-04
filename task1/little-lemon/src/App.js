import './App.css';
import { useNavigate } from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = window.submitAPI(formData);

    if (success) {
      navigate('/confirmed');
    }
  };

  return (
    <>
      <Header />
      <Nav />
      <Main submitForm={submitForm} />
      <Footer />
    </>
  );
}

export default App;