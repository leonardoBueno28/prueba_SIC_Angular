import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from 'src/app/services/all.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formData: FormGroup;

  constructor(
    private service: AllService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.formData = this.formBuilder.group({
      username: [''],
      password: [''],
      rol: [''],
      apellidos: [''],
      direccion: [''],
      identificacion: [''],
      nombres: [''],
      telefono: [''],
      tipo_identificacion: [''],
    });
  }

  get apellidos() {
    return this.formData.get('apellidos');
  }

  get direccion() {
    return this.formData.get('direccion');
  }
  get identificacion() {
    return this.formData.get('identificacion');
  }
  get nombres() {
    return this.formData.get('nombres');
  }
  get telefono() {
    return this.formData.get('telefono');
  }
  get tipo_identificacion() {
    return this.formData.get('tipo_identificacion');
  }

  get username() {
    return this.formData.get('username');
  }

  get password() {
    return this.formData.get('password');
  }

  get rol() {
    return this.formData.get('rol');
  }

  registrar() {
    let modelUserLogin = {
      username: this.username.value,
      password: this.password.value,
      rol: this.rol.value,
    };
    if (this.formData.valid) {
      this.service.registerUser(modelUserLogin).subscribe(
        (response) => {
          let modelPersona = {
            email: this.username.value,
            apellidos: this.apellidos.value,
            direccion: this.direccion.value,
            identificacion: this.identificacion.value,
            nombres: this.nombres.value,
            telefono: this.telefono.value,
            tipoIdentificacion: this.tipo_identificacion.value,
            usuarioId: response['id'],
          };
          this.service.createPerson(modelPersona).subscribe(
            (response) => {
              Swal.fire({
                title: 'Registrado!',
                text: 'Se registro con exito',
                icon: 'success',
                confirmButtonText: 'aceptar',
              });
              this.router.navigate(['/login']);
            },
            (error) => {
              Swal.fire({
                title: 'Error!',
                text: 'Ocurrio un error al enviar la información',
                icon: 'error',
                confirmButtonText: 'aceptar',
              });
            }
          );
        },
        (error) => {
          Swal.fire({
            title: 'Error!',
            text: 'Ocurrio un error al enviar la información',
            icon: 'error',
            confirmButtonText: 'aceptar',
          });
        }
      );
    }
  }
}
