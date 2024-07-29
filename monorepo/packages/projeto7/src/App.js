import RoutesApp from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer
      toastStyle={{ fontSize: '12px'}}
      position="top-right" 
      autoClose={3000} 
      hideProgressBar={false} 
      newestOnTop={false} 
      closeOnClick rtl={false} 
      pauseOnFocusLoss 
      pauseOnHover />
      <RoutesApp/>
    </div>
  );
}

export default App;
