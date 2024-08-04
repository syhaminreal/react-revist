<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Layout } from "./components/Layout"

const App = () => {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  
}

export default App
=======
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Food from './Food';
import Card from './Card';

import Student from './Students';

function App() {
  return (
    <>
      <Header />
      <Food />
      <Card />
      <Card />
      <Card />
      <Card />
   
      <Student name ="Spongebob" age={30} isStudent={true}/>
      <Footer />
    </>
  );
}

export default App;
>>>>>>> ea62b8d (new items)
