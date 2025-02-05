import './App.css'
import ReactDOM from "react-dom/client";
import Home from "./views/Home"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
