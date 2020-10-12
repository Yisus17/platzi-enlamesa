import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  loginRequest(){
    console.log(this.form.value);

    const value = this.form.value;
    // if(this.authService.getTokenForUser(value.username, value.password))
    // {
    //   this.router.navigate(['/admin/dashboard']);
    // }else{
    //   alert('Usuario invalido');
    // }
    
    this.authService.getTokenForUser(value.username, value.password).subscribe(token => {
      debugger;
      this.token = token;
    });


    
  }

}
