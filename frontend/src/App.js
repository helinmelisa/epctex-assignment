import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Link, Router, Route} from "react-router-dom";
import AnalysisDetail from './components/AnalysisDetail';

function App() {
  return (
    <div className="App">
        <Router>
                <Route path="/home" component={Home} />
                <Route path="/analysis/:id" component={AnalysisDetail} />
              <Link from="/" to="/home" />
          </Router>
    </div>
  );
}

export default App;
