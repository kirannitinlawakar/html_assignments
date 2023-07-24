import './App.css';
import {ToastContainer,toast} from 'react-toastify';
import Allcour from './components/Allcour';
import AddCour from './components/AddCour';

function App() {
   return (
    <div>
       <ToastContainer />
         <Allcour />
         <AddCour />

    </div>
    
  );
}

export default App;
