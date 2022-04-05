// import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import AppNavBar from './components/AppNavBar';

function App() {
  return (
    <div className="App">
      <AppNavBar/>
      <AppHeader/>
      <AppMain/>
    </div>
  );
}

export default App;
