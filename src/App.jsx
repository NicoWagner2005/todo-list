import { DisplayModeContext } from './context/DisplayModeContext'
import { useState} from 'react'
import './App.css'
import Header from './components/Header'


function App() {
  const [displayMode, setDisplayMode] = useState('compact');  
  return (
    <DisplayModeContext.Provider value={{displayMode, setDisplayMode}}>
      <Header />
    </DisplayModeContext.Provider>
  )
}

export default App
