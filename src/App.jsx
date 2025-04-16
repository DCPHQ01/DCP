import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Career from "./pages/Career"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import Product from "./pages/Product"
import Project from "./pages/Project"
import Management from "./pages/Management"
import Test from "./components/Test"
import Error from "./pages/Error"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Routes>
          <Route index element={<Home />} />
          <Route path="career" element={<Career />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Service />} />
          <Route path="product" element={<Product />} />
          <Route path="project" element={<Project />} />
          <Route path="*" element={<Error />} />
          <Route path="management" element={<Management />} />
          <Route path="test" element={<Test />} />    
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
