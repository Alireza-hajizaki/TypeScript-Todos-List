import { TodoInterface } from "../interfaces/TodoInterface";
import Store from "./Store";
import Swal from "sweetalert2";

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
     
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            const element = e.target as HTMLElement;
            element.parentElement!.parentElement?.remove()
            Store.removeTodo(todoId)

            Swal.fire({
                    title: 'Todo Deleted',
                    icon: 'error',
                    showConfirmButton : false,
                    timerProgressBar : true,
                    timer : 3000,
                    toast : true,
                    position: 'top',
                })
        }
      })
    }
  }

  export default Ui;