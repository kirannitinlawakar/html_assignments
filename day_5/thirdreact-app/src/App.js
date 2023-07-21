import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import {ToastContainer,toast} from 'react-toastify';

function App() {

  const btnHandle=()=>{
      toast("This is my first message")
  };

  return (
    <div>
       <ToastContainer />
         <h1>This is Bootstrap Component</h1>
         <Button color='primary' onClick={btnHandle}>First React Button</Button>
         <Button color='warning' outline>Second React Button</Button>
         <Button color='primary' size='lg'>Third React Button</Button>
         <Button color='warning' size='sm'>Fourth React Button</Button>
    </div>
    
  );
}

export default App;
