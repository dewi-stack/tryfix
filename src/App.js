import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <Menu />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
