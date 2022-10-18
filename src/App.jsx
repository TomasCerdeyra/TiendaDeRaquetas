import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'


function App() {
  const imagenes =[
    0,
    1,
    2
  ]

  return (
    <>
      <Header />
      <Main imagenes={imagenes}/>
    </>
  )
}

export default App