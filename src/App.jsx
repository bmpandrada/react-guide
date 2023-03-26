import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Nabar from './components/navbar/Nabar';

import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  

  return (
    <div className="App">
     
     <Nabar />
      <Routes>
        
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/about' element={< About />}></Route>

</Routes>
      
    </div>
    
   )
}

export default App
