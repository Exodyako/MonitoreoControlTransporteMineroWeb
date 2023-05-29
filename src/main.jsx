import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,Navigate,RouterProvider } from 'react-router-dom';
import "./../public/css/style.css";
import IsLoggedMiddleware from "./middleware/IsLoggedMiddleware"
import  {isLogged} from "./services/UsuarioService.js";
const App = React.lazy(()=>import("./App.jsx"));
const Login = React.lazy(()=>import("./componentes/login/Login.jsx"));
const Registro = React.lazy(()=>import("./componentes/registro/Registro.jsx"));
const NotFound = React.lazy(()=>import("./componentes/error/NotFound.jsx"));
const MapaContainer = React.lazy(()=>import("./componentes/main/MapaContainer"));
const UsuarioContainer = React.lazy(()=>import("./componentes/main/UsuarioContainer"));

const router = createBrowserRouter([
  {
    path:"/",
    loader: async ()=>{
      const ok = await isLogged();
      return ok;
    },
    element:<IsLoggedMiddleware/>,    
    errorElement:<Navigate to={"administrador/mapa"}/>,
    children:[
      {
      path:"administrador",
      element:<React.Suspense fallback="Cargando...">
        <App/>
      </React.Suspense>,    
      children:[
        {
          path:"mapa",
          element:<React.Suspense fallback="Cargando...">
            <MapaContainer/>
          </React.Suspense>,
          
        },
        {
          path:"usuario",
          element:<React.Suspense fallback="Cargando...">
            <UsuarioContainer/>
          </React.Suspense>,
          
        }
      ]    
    }
  ]
  },  
  {
    path:"login",
    element:<React.Suspense fallback="Cargando...">
      <Login/>
      </React.Suspense>
  },
  {
    path:"registro",
    element:<React.Suspense fallback="Cargando...">
      <Registro/>
    </React.Suspense>
  }  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App/>
  // </React.StrictMode>
  // <App/>
  <RouterProvider router={router}/>
)
