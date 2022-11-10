import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import React from 'react'
import NavBar from "./routes/navigation/navbar";

// index allows for the path to be the same as the parent path, in this case the navigation bar
const App = () => {
  return (<Routes>
    <Route path='/' element={<NavBar/>}>
    <Route index element={<Home/>}/>
    </Route>
    </Routes>
  )
}
export default App
