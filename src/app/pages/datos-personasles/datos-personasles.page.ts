import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personasles',
  templateUrl: './datos-personasles.page.html',
  styleUrls: ['./datos-personasles.page.scss'],
})

export class DatosPersonaslesPage implements OnInit {

  nombre: String;
  localidad: String;
  estudios: String;
  email: String;
  password: String;
  
  constructor() { }

  ngOnInit() {
  }

}
