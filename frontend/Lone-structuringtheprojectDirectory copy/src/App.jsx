import React from 'react'
import Home from './Pages/Home'
import Header from './Components/layout/Header'

const App = () => {
  return (
    <div className='app dark:bg min-h-screen bg-slate-50 text-slate-500'>
   <Header/>
   <main className='px-4 py-8'>
    <Home/>

   </main>
    </div>
  )
}

export default App
