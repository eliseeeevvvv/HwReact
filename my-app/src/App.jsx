import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import Guests from './Components/Guests';
import Rooms from './Components/Rooms';

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Guests />
      <Rooms />
      <Footer />
    </>
  );
}

export default App;