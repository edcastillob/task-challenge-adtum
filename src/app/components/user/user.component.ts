import { Component } from '@angular/core';
import { UserService } from './user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userData = {
    name: '',
    surname: '',
    email: '',
    password: ''
  };

    
    constructor(private userService: UserService, private toastr: ToastrService, private router: Router) {}

  onSubmit() {
    const userCreated = `${this.userData.name} ${this.userData.surname}`
    this.userService.createUser(this.userData)
      .subscribe(response => {
        console.log('User created successfully');
        this.toastr.success('Usuario agregado exitosamente');
        this.userData = {
          name: '',
          surname: '',
          email: '',
          password: ''
        };
        this.router.navigate(['login'])
        alert(`${userCreated} Su usuario ha sido creado`)
      }, error => {
        console.error('Error creating user:', error);
        this.toastr.success(`${error}`);

      });
  }
}
