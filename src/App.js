import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Side from './components/Side';
import Stories from './components/Stories';

function App() {
  return (
    <div className="App">
      <Header />
      <Stories />
      <Main />
      <Side />
    </div>
  );
}

export default App;
