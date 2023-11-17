import logo from './logo.svg';
import './App.css';
import BookCounter from './Bookcounter';

function App() {
  const books = ['Hisnul-muslim','Riyadul-Saliheen','chemistyTextbook','physicsTextbook','biologyTextbook', 'Alawiye'];
  return (
    <div className="App">
       <header className="App-header">
        <h1>Welcome to my Library</h1>
        <BookCounter name="khadijah's" books={books}/>
      </header> 
    </div>
  );
}

export default App;
