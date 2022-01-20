const Todo = (props) => {
    //properties
    //parent->child,top->bottom
    
    const { todos,title, deleteTodo } = props;
    const handleDelete = (id) => {
        alert(id)
    }
    return(
        <div className='todos-container'>
            <div className="title">
                { title }
            </div>
          { todos.map(todo => {
            return (
                <div key={ todo.id }>
                    <li className='todo-child' > { todo.title }
                    &nbsp; &nbsp; <span onClick={() => handleDelete(todo.id) }>x</span>
                     </li>
                </div>

            )
          })}

          <hr />
        </div>
    )

}

export default Todo;