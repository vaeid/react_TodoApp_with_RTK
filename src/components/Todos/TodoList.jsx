import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { useEffect } from 'react';
import { getAsyncTodos } from '../../features/todo/todoSlice';

const TodoList = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);
  if (loading) return <div>Loading ...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>TodoList</h2>

      <ul className='list-group'>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
