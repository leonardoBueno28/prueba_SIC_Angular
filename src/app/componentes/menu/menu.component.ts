import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/services/all.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private service: AllService) {
   }

  ngOnInit() {
  }

  logout(){
    this.service.logout();
  }

}
