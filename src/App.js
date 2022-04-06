import TodoList from './TodoList';

function App() {
  return (
    <div>
     <TodoList/>
     <input type="text" />
     <button>Add todo</button>
     <button>Clear</button>
     <div>0 left to do</div>
    </div>
  );
}

export default App;
