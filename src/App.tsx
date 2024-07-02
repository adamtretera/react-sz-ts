import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import { PeopleList } from "./components/PeopleList"
import { HomePage } from "./components/HomePage"
import { PersonDetailPage } from "./components/PersonDetailPage"


function App() {
  return (

    <BrowserRouter>

      <header>
        <nav >
          <ul className="d-flex">
            <li>
              <Link to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/people">
              People
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/people" element={<PeopleList/>}/>
        <Route path="/people/:id" element={<PersonDetailPage/>}/>
      </Routes>

      <footer>
        asdas
      </footer>

    </BrowserRouter>



  )
}

export default App
