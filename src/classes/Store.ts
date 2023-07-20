import Swal from "sweetalert2";
import { TodoInterface } from "../interfaces/TodoInterface";
import Ui from "./Ui";

class Store {
    
    static getTodos(): TodoInterface[] {
        let todos: TodoInterface[];

        if (localStorage.getItem("todos")) {
            todos = JSON.parse(localStorage.getItem("todos")!);
        } else {
            todos = [];
        }

        return todos;
    }

    static displayTodos(){
        const list =document.getElementById('todo-list')!;
        list.innerHTML="";
        const ui = new Ui();
        const todos = Store.getTodos();
        todos.forEach((todo) => {
            ui.addTodoToList(todo)
        })
    }

    static setTodo(todo: TodoInterface) {
        const todos = Store.getTodos();
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    static removeTodo(id: number){
        const todos = Store.getTodos();
        const newTodos = todos.filter((todo) => todo.id !== id);

        localStorage.setItem("todos", JSON.stringify(newTodos));
    }

    static changeStatusTodo(id: number){
        const todos = Store.getTodos();
        const newTodos = todos.map((todo) => todo.id === id ? { ...todo, status: !todo.status } : todo);

        localStorage.setItem("todos", JSON.stringify(newTodos));
        Store.displayTodos()

        Swal.fire({
            title: 'Status todo changed',
            icon: 'info',
            showConfirmButton : false,
            timerProgressBar : true,
            timer : 3000,
            toast : true,
            position: 'top',
        })
    }
}

export default Store;