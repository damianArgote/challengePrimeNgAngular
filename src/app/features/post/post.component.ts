import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from './interfaces/post.interfaces';
import { addPost, filterTitle, getPosts, removePost, updatePost } from '../../store/actions/post.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  postForm: FormGroup;
  posts:Post[]=[]
  error:any;
  post:Post | null = null
  isAdmin:boolean= false;
  isLoading:boolean = false
  postDialog: boolean = false;
  submitted: boolean = false;

  constructor(private store:Store<any>,private messageService: MessageService, private confirmationService: ConfirmationService, private fb: FormBuilder){

    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body:['',Validators.minLength(3)]
    });
  }


  ngOnInit(): void {
    this.store.dispatch(getPosts())

    this.store.subscribe(({postState,userState}) =>{
      this.isAdmin = userState?.user?.role === 'admin' ? true : false;
      this.posts=[...postState.posts]
      this.error = postState.error;
      this.isLoading = postState.isLoading

      if(this.error && !this.isLoading){
        this.messageService.add({ severity: 'error', summary: 'Error', detail: `${this.error.message}`, life: 3000 });
      }
    })

  }

  hideDialog() {
    this.postDialog = false;
    this.submitted = false;
    this.post=null
    this.postForm.reset()
  }

  openDialog(post?: Post) {
    if(post){
      this.post = post
      this.postForm.patchValue(this.post as any);
    }else{
      this.post = null;
    }
    this.postDialog = true;
    this.submitted = false;
  }

  onRemove(post:Post){

    this.confirmationService.confirm({
      message: 'Are you sure you want to delete?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.store.dispatch(removePost({id:post.id}))
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'POST Deleted', life: 3000 });
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.postForm.valid) {
      const { title,body } = this.postForm.value;

      if (this.post?.id){
        let postCopy = {...this.post};
        postCopy.title = title
        postCopy.body = body
        this.store.dispatch(updatePost({post:postCopy}))
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'POST Updated', life: 3000 });
      }else{
        this.store.dispatch(addPost({title,body}))
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'New POST Added', life: 3000 });
      }
      this.post= null;
      this.postForm.reset();
      this.postDialog = false;
    }
  }

  filterInput(value:string){
    value = value.toLowerCase();
    if(value.trim() !== ''){
      this.store.dispatch(filterTitle({title:value}))
    }else{
      this.store.dispatch(getPosts())
    }
  }

}
