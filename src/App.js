import Body from "./Components/Body";
import {RouterProvider } from "react-router-dom";
import {createBrowserRouter } from 'react-router-dom';
import Login from "./Components/Login";
import Browse from "./Components/Browse";
function App() {
  

  //const navigate = useNavigate();
  const router = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    }
  ]) 
  
 
  return (
    <RouterProvider router={router}>
      <div className="font-bold">
        <Body />
      </div>
    </RouterProvider>
  );
}

export default App;
