import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img className="Avatar"
          src={props.auther.avatarUrl}
          alt={props.auther.name}
        />
        
      </header>
    </div>
  );
}


export default App;
