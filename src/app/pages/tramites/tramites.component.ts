import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/services/all.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css'],
})
export class TramitesComponent implements OnInit {
  tramites: any;
  currentUser: any;
  id: any;
  constructor(private service: AllService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.service.getPersonById(this.currentUser.id).subscribe((response) => {
      this.id = response['data'];
    });
    this.loadData();
  }

  loadData() {
    this.service.getTramites().subscribe((response) => {
      this.tramites = response['data'];
    });
  }

  tomar(tramite) {
    tramite.funcionarioRecibioId = this.id[0]['id'];
    tramite.estado = 'tomado';
    this.service.takeTramite(tramite.id, tramite).subscribe(
      (response) => {
        this.loadData();
      },
      (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Ocurrio un error',
          icon: 'error',
          confirmButtonText: 'aceptar',
        });
      }
    );
  }

  delete(tramite) {
    this.service.deleteTramite(tramite.id).subscribe(
      (response) => {
        Swal.fire({
          title: 'Exito!',
          text: 'Se elimino el tramite',
          icon: 'success',
          confirmButtonText: 'aceptar',
        });
        this.loadData();
      },
      (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Ocurrio un error',
          icon: 'error',
          confirmButtonText: 'aceptar',
        });
      }
    );
  }
}
