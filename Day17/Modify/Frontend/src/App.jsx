import { RouterProvider } from "react-router"
import { routes } from "./features/app.routes"
import "./features/shared/styles/global.style.scss"
import { AuthProvider } from "./features/auth/auth.context"

function App() {
 

  return (

    <AuthProvider>
      <RouterProvider router={routes}/>
    </AuthProvider>
  )    
}

export default App
