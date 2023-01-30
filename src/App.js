import './App.css';
import Form from './Components/form';
import Students from './Components/students';

function App() {
  return (
    <div style={{dispaly:'flex',flexDisplay:"row"}}>
      <Form/>
      <div style={{marginLeft: 30}}>
        <Students/>
      </div>
      
    </div>
  );
}

export default App;
