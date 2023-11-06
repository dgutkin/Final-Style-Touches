function TodoList() {

    const [todos, setTodos] = React.useState([
        {
          text: 'task 1',
          isCompleted: false,
        },
        {
          text: 'task 2',
          isCompleted: false,
        },
        {
          text: 'task 3',
          isCompleted: false,
        }        
      ]);
    
    const addTodo = text => {
        const newTodos = [...todos, {text, isCompleted:false}];
        setTodos(newTodos);
    }
    
    const removeTodo = index => {
        let temp = [...todos];    
        temp.splice(index, 1);
        setTodos(temp);
    }
    
    return (
        <div className="todo-list" >
            {todos.map((todo, i) => (
                <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
            ))}
            <TodoForm addTodo={addTodo} />
        </div>
    )

}