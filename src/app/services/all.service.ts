import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AllService {
  private userLocalStorage: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private route: Router) {
    this.userLocalStorage = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.userLocalStorage.asObservable();
  }

  login(email, password, usuarios) {
    for (let u of usuarios) {
      if (u.username === email && u.password === password) {
        localStorage.setItem('currentUser', JSON.stringify(u));
        this.route.navigate(['/home']);
      }
    }
  }

  createPerson(data) {
    return this.http.post(environment.urlBack + 'personas', data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getPersonById(id) {
    return this.http.get(environment.urlBack+'personas?usuarioId='+id).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getUsers() {
    return this.http.get(environment.urlBack + 'usuarios').pipe(
      map((res) => {
        return res;
      })
    );
  }

  registerUser(data) {
    return this.http.post(environment.urlBack + 'usuarios', data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  generarTramite(data) {
    return this.http.post(environment.urlBack + 'tramites', data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getTramites() {
    return this.http.get(environment.urlBack + 'tramites').pipe(
      map((res) => {
        return res;
      })
    );
  }

  takeTramite(id, data) {
    return this.http.patch(environment.urlBack + 'tramites/' + id, data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  deleteTramite(id){
    return this.http.delete(environment.urlBack + 'tramites/' + id).pipe(
      map((res) => {
        return res;
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.route.navigate(['/login']);
    return;
  }
}
