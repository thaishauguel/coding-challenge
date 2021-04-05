import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import Temperature from './Pages/Temperature'
import CustomiseImage from './Pages/Customise-image'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/temperature" component={Temperature}/>
        <Route exact path="/customise-image" component={CustomiseImage}/>
      </Switch>
    </div>
  );
}

export default App;
