import { RouterProvider } from "react-router"
import { routes } from "./features/app.routes"
import "./features/shared/styles/global.style.scss"

function App() {
 

  return (
    <RouterProvider router={routes}/>
  )    
}

export default App
