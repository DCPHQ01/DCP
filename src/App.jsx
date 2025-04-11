import { Routes } from "react-router"
import { Route } from "react-router"
import Home from "./pages/Home"
import Career from "./pages/Career"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import Product from "./pages/Product"
import Project from "./pages/Project"
import Management from "./pages/Management"
import Test from "./components/Test"


function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="career" element={<Career />} />
        <Route path="contact" element={<Contact />} />
        <Route path="service" element={<Service />} />
        <Route path="product" element={<Product />} />
        <Route path="project" element={<Project />} />
        <Route path="management" element={<Management />} />
        <Route path="test" element={<Test />} />     
      </Routes>
    </>
  )
}

export default App
