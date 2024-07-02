import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import AddTodoForm from './components/Todos/AddTodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  return (
    <div className='container pt-3'>
      <h1 className='text-center'>TodoApp with RTK</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
