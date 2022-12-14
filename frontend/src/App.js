import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import AnalysisDetail from './components/AnalysisDetail';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
          <Route  path='/home' element={<Home />} />
          <Route  path='/analysis/:id' element={<AnalysisDetail />} />
          <Route  path='/' element={<Navigate replace to="/home" />} />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;