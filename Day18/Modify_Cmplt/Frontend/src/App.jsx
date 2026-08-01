import { RouterProvider } from "react-router"
import { routes } from "./features/app.routes"
import "./features/shared/styles/global.style.scss"
import { AuthProvider } from "./features/auth/auth.context"
import { SongContextProvider } from "./features/home/song.context"

function App() {
 

  return (

    <AuthProvider>
      <SongContextProvider>
      <RouterProvider router={routes}/>
      </SongContextProvider>
    </AuthProvider>
  )    
}

export default App
