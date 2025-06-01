import { Route, Router, Routes} from 'react-router-dom'
import './App.css'
import Auth from './Auth'
import Chatbot from './Chatbot'
import Recorder from './Recorder'
import Admin from './Admin'

function App() {

  return (
    <>
      <Routes>
        <Route index="/chatbot" element = {<Chatbot/>}></Route>
        <Route path="/login" element = {<Auth/>}></Route>
        <Route path="/chatbot" element = {<Chatbot/>}></Route>
        <Route path="/admin" element = {<Admin/>}></Route>
      </Routes>
    </>   
  )
}

export default App;
