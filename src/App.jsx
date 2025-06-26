import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Login from './Component/Login'

function App() {
  const myRoute = createBrowserRouter( createRoutesFromElements(
    <Route path='/' element={<Login/>} > 

    </Route>
  ))

  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  )
}

export default App
