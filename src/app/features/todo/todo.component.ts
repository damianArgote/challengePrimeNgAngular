import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Todo } from './interfaces/todo.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodo, getTodos, removeTodo, updateTodo} from '../../store/actions/todo.actions';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todoForm: FormGroup;
  todos: Todo[] =[]
  todosCopy: Todo[] =[]
  error:any;
  todo:Todo | null = null
  isAdmin:boolean= false;
  isLoading:boolean = false;
  todoDialog: boolean = false;
  submitted: boolean = false;
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private fb: FormBuilder, private store:Store<any>){
    this.todoForm = this.fb.group({
      title: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    this.store.subscribe(({todoState,userState}) =>{
      this.isAdmin = userState?.user?.role === 'admin' ? true : false;
      this.todos = todoState.todos
      this.todosCopy =[...this.todos]
      this.error = todoState.error;
      this.isLoading = todoState.isLoading
      if(this.error && !this.isLoading){
        this.messageService.add({ severity: 'error', summary: 'Error', detail: `${this.error.message}`, life: 3000 });
      }
    })

    this.store.dispatch(getTodos())
  }

  getSeverity(completed: boolean) {
    return completed ? 'success' : 'danger'
  }

  onClickStatus(todo:Todo){
    let todoCopy = {...todo};
    todoCopy.completed = !todoCopy.completed;
    this.store.dispatch(updateTodo({todo: todoCopy}))

  }

  onRemove(todo:Todo){

    this.confirmationService.confirm({
      message: 'Are you sure you want to delete?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.store.dispatch(removeTodo({id:todo.id}))
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'TODO Deleted', life: 3000 });
      }
    });
  }
  openDialog(todo?: Todo) {
    if(todo){
      this.todo = todo
      this.todoForm.patchValue(this.todo as any);
    }else{
      this.todo = null;
    }
    this.todoDialog = true;
    this.submitted = false;
  }

  hideDialog() {
    this.todoDialog = false;
    this.submitted = false;
    this.todo = null;
    this.todoForm.reset()
  }

  onSubmit() {
    this.submitted = true;
    if (this.todoForm.valid) {
      const { title } = this.todoForm.value;

      if (this.todo?.id){
        let todoCopy = {...this.todo};
        todoCopy.title = title
        this.store.dispatch(updateTodo({todo:todoCopy}))
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'TODO Updated', life: 3000 });
      }else{
        this.store.dispatch(addTodo({title}))
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'New TODO Added', life: 3000 });
      }
      this.todo= null;
      this.todoForm.reset();
      this.todoDialog = false;
    }
  }

}
