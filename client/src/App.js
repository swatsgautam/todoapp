
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='container'>
       <div className="todo-app"> 
        <h1>ToDo List</h1>
      </div>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
