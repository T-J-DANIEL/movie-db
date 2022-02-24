import {Routes,Route} from 'react-router-dom'

import Result from "./components/Result";
import Home from './components/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/movies/:id' element={<Result />} />
    </Routes>
  )
}

export default App;
