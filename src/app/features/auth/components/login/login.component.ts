import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppState } from '../../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { login } from '../../../../store/actions/user.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  passwordVisible: boolean = false;
  error:any
  isLoading:boolean=false;
  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppState>){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.minLength(6)]
    });
  }

  ngOnInit(): void {
    this.store.select('userState').subscribe(state =>{
      this.error = state.error;
      this.isLoading = state.isLoading;
    })

  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit() {
    if(this.loginForm.invalid){

      return
    }

    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.store.dispatch(login({username,password}))
      this.router.navigate(['/dashboard'])
    }
  }
}
