import { Outlet } from "react-router";
import Navigation from "./components/navigation/Navigation";
import { ToastContainer} from "react-toastify";

const App =()=>{
  return(
    <div> 
      <ToastContainer/>
      <Navigation/>
      <main className="py-3">
        <Outlet/>
      </main>
    </div>
  )
}

export default App;