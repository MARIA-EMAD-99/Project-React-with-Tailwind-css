
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./component/routes/Layout";
import Home from './component/routes/Home';
import About from './component/routes/About';
import Contact from './component/routes/Contact';
import Resources from './component/routes/Resources';
import Doctors from './component/routes/Doctors';
import Elements from './component/routes/Elements';



function App() {


  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          
          path: "/about",
          element: <About/>,
       
         
        },
       

        {
          path: "/contact",
          element:<Contact/> 
        },
        {
          path: "/resource",
          element: <Resources />,
         
        },




        {path: "/doctors",
        element: <Doctors />,
      },
      {path: "/elements",
        element: <Elements />,
      },

        
      ],
    },
  ]);

  return(
    
      <RouterProvider router={routes} />
      
)


}

export default App
