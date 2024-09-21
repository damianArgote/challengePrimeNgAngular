import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducer';
import { AuthService } from './features/auth/services/auth.service';
import { isAuth } from './store/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'challenge-eldar';

  constructor(private store:Store<AppState>, private authService: AuthService){}

  ngOnInit(): void {
    this.authService.isAuth().subscribe(user =>{
      this.store.dispatch(isAuth({user: user!}))
    })

  }

}
