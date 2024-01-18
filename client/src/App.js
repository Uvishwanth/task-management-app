
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './component/Home';
import Create from './component/Create';
import Edit from './component/Edit';
import View from './component/view';

function App() {
  return (
    <div>


      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
          <Route path='/view/:id' element={<View/>}/>
          <Route path='/delete/:task' element={<Home/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;


