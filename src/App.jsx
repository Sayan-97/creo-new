import { BrowserRouter as Router } from "react-router-dom"
import { Footer, Header, ScrollToTop } from "./components"
import Layout from "./layout/Layout"

function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className=" bg-background text-[#fff] font-Outfit text-base font-regular">
        <div className="min-h-screen flex flex-col lg:text-lg space-y-8 overflow-x-hidden">
          {/* Header */}
          <Header />

          {/* Pages */}
          <main className="flex-grow">
            <Layout />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
