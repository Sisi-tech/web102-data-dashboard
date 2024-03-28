import { useState, useEffect } from 'react'
import List from './components/List'

function App() {

  return (
    <div className="min-h-screen min-w-full bg-[url('./assets/sky.jpg')] bg-cover pt-20" >
      <List />
    </div>
  )
}

export default App
