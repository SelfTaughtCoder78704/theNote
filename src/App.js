import Header from './components/Header';
import NewNoteForm from './components/NewNoteForm';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header name="Bobby" avatar="/images/avatar.png" />
      <NewNoteForm />
    </div>
  );
}



export default App;
