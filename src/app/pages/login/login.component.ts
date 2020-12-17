import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllService } from 'src/app/services/all.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formData: FormGroup;
  usuarios: any;

  constructor(private service: AllService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.service.getUsers().subscribe((response) => {
      this.usuarios = response['data'];
    });
    this.formData = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', [Validators.required]],
    });
  }

  get email() {
    return this.formData.get('email');
  }

  get password() {
    return this.formData.get('password');
  }

  login() {
    if (this.formData.valid) {
      this.service.login(this.email.value, this.password.value, this.usuarios);
    } else {
      console.log('formulario errone');
    }
  }
}
