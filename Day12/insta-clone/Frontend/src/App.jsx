import { RouterProvider } from "react-router"
import {routes} from "./app.routes"
import "./features/shared/globle.scss"
import { AuthProvider } from "./features/auth/auth.context"
import { PostContextProvider } from "./features/post/post.context"

function App() {
 
  return (
    <AuthProvider>
      <PostContextProvider>
      <RouterProvider router={routes} />
      </PostContextProvider>
    </AuthProvider>
  )
}

export default App
