import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from 'src/app/services/all.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-tramite',
  templateUrl: './new-tramite.component.html',
  styleUrls: ['./new-tramite.component.css'],
})
export class NewTramiteComponent implements OnInit {
  formData: FormGroup;
  currentUser: any;
  id: any;
  constructor(
    private service: AllService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.service.getPersonById(this.currentUser.id).subscribe((response) => {
      this.id = response['data'];
    });
    this.formData = this.fb.group({
      numero: [''],
      anhoRadicacion: [''],
      nombre: [''],
      descripcion: [''],
      estado: [''],
    });
  }

  get numero() {
    return this.formData.get('numero');
  }

  get anhoRadicacion() {
    return this.formData.get('anhoRadicacion');
  }

  get nombre() {
    return this.formData.get('nombre');
  }

  get descripcion() {
    return this.formData.get('descripcion');
  }

  generar() {
    console.log(this.id);
    let model = {
      numero: this.numero.value,
      anhoRadicacion: this.anhoRadicacion.value,
      nombre: this.nombre.value,
      descripcion: this.descripcion.value,
      personaRadicoIdId: this.id[0]['id'],
      estado: 'en espera',
    };
    this.service.generarTramite(model).subscribe(
      (response) => {
        Swal.fire({
          title: 'Guardado!',
          text: 'Exito al guardar',
          icon: 'success',
          confirmButtonText: 'aceptar',
        });
        this.router.navigate(['/tramites']);
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
