import './App.css';
import {Switch, Route} from 'react-router-dom'
import Converter from "./components/converter/converter";
import Rates from "./components/rates/rates";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={'/converter'} component={Converter}/>
        <Route path={'/'} component={Rates}/>
      </Switch>
    </div>
  );
}

export default App;
