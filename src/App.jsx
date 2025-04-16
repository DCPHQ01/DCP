import { Routes } from "react-router"
import { Route } from "react-router"
import Home from "./pages/Home"
import Career from "./pages/Career"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import Project from "./pages/Project"
import Management from "./pages/Management"
import Test from "./components/Test"

import Error from "./pages/Error"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {

  return (
    <>
    <div className="relative min-h-screen w-full z-70">

      <div className="background-pattern relative min-h-screen z-60">
        <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="career" element={<Career />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Service />} />
          <Route path="project" element={<Project />} />
          <Route path="*" element={<Error />} />
           <Route path="management" element={<Management />} />
          <Route path="test" element={<Test />} />    
        </Routes>
        <Footer/>
      </div>
    </div>

    </>
  )
}

export default App
