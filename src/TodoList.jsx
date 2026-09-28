import{useState} from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let[todos,setTodos]=useState([{task:"sample task",id:uuidv4(),isDone:false}]);
    let[newTodo,setNewTodo]= useState("");
          function addNew(){
            setTodos((prevtodos)=>{
                return [...prevtodos , {task:newTodo,id:uuidv4(),isDone:false}]
            });
            setNewTodo("");
        }
        let updateTodo=(event)=>{
            setNewTodo(event.target.value)
        };
        let deleteTodo=(id)=>{
            setTodos((prevvidios)=>prevvidios.filter((prevvidios)=>prevvidios.id!=id));
        };
        let markAllDone=()=>{
            setTodos((prevtodos)=>
            prevtodos.map((todo)=>{
                return{
                    ...todo,
                   isDone:true,
                }
                

            })
        )
        }
        let markAsDone=(id)=>{
             setTodos((prevtodos)=>
            prevtodos.map((todo)=>{
                if(todo.id==id){
                        return{
                    ...todo,
                    isDone:true
                }
                }
                else{
                    return todo;
                }
            
                

            })
        )
        }
    return(

        <div className="todo-page">
            <h1>TODO LIST!</h1>
            <input className ="todo-input" placeholder="Add a task" value={newTodo} onChange = {updateTodo} ></input>
            <br /><br />
            <button className = "todo-button" onClick = {addNew}>ADD</button>
            <br /><br /><br />
            <hr />

            <h4 className="todo-heading"> Task todo</h4>
             <ul className="todo-list">
             {todos.map((todo) => (
             <li key={todo.id}>
              <span style={todo.isDone?{textDecoration:"line-through"}:{}}> {todo.task} </span>
              <button onClick = {()=>deleteTodo(todo.id)}>delete</button> 
               <button onClick = {()=>markAsDone(todo.id)}>Done</button> 
            </li>
     ))}
</ul>
<button onClick={markAllDone}>Mark All As Done</button>
        </div>
    )
}