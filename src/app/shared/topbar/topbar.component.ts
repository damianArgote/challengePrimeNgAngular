import { Component } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { Store } from '@ngrx/store';
import { disableDarkMode, enableDarkMode } from '../../store/actions/dark-mode.actions';
import { logout } from '../../store/actions/user.actions';
import { Router } from '@angular/router';
import { User } from '../../core/interfaces/user.interface';
import { AppState } from '../../store/app.reducer';
import { clearTodos } from '../../store/actions/todo.actions';
import { clearPosts } from '../../store/actions/post.actions';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  isDarkMode = false;
  userAuth!:User
  constructor(private themeService: ThemeService, private store: Store<AppState>, private router:Router){}

  ngOnInit(): void {
    this.store.select('darkModeState')
    .subscribe((state) =>{
        this.isDarkMode = state.isDarkMode
    })

    this.store.select('userState').subscribe(({user}) => {
      if(user){
        this.userAuth = user;
      }
    })

  }

  toggleDarkMode(): void {
    if (!this.isDarkMode){
      this.store.dispatch(enableDarkMode());
      this.themeService.switchTheme('dark-blue');
      return
    }

    if(this.isDarkMode){
      this.store.dispatch(disableDarkMode());
      this.themeService.switchTheme('light-blue');
    }
  }

  logOut(){
    this.store.dispatch(clearTodos())
    this.store.dispatch(clearPosts())
    this.store.dispatch(logout())
    localStorage.removeItem('token')
    this.router.navigate(['/auth/login']);
  }
}
