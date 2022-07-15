
import './App.css';
import Server from './Server';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderDiv />
      </header>
      
    </div>
  );
}

const HeaderDiv=styled(Header)`
  width: 100%;
`
export default App;
