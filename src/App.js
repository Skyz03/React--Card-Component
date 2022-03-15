import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Footer from "./components/Footer";
import '../src/App.scss'

const App = () => {
  return(
    <div className="container">
      <div className="card">
        <Info />
        <About />
        <Footer />
      </div>
    </div>
  )
}


export default App;
