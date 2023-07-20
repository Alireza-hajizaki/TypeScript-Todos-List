import { TodoInterface } from "../interfaces/TodoInterface";
import Store from "./Store";

class Ui {
    
    addTodoToList(todo: TodoInterface) {
  
      const list = document.getElementById('todo-list');
  
      const tr = document.createElement("tr");
      tr.className=`${todo.status && "opacity-50 text-decoration-line-through"}`
      tr.innerHTML = `
              <th>${todo.id}</th>
                  <td>${todo.title}</td>
                  <td><input type="checkbox" ${todo.status ? "checked" : ""} class="form-check-input" onclick="changeStatusTodo(${todo.id})"></td>
               <td>
                      <button class="btn btn-sm btn-outline-danger" onclick="removeTodo(event , ${todo.id})">Delete</button>
              </td>
          `;
  
          list?.appendChild(tr);
    }
  
    removeTodo(e: Event , todoId:number){
      const element = e.target as HTMLElement;
      element.parentElement!.parentElement?.remove()
  
      Store.removeTodo(todoId)
    }
  }

  export default Ui;