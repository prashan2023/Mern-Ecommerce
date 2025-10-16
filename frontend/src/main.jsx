import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Errorpage from './pages/Errorpage.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx';
import Favourite from './pages/Favourite.jsx';

const router = createBrowserRouter([{
   path: "/",
   element: <App/>,
   children:[
      {
         path: "/register",
         element:<Register/>
      },
      {
         path: "/shop",
         element: <Shop/>
      },
      {
         path: "/cart",
         element: <Cart/>
      },
      {
         path: "/login",
         element: <Login/>
      },
      {
         path: "/favourite",
         element: <Favourite/>
      }
   ], 
  },
  {
   path: "/error",
   element: <Errorpage/>
}
])
 

createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}/> 
);
