import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dam2',
  templateUrl: './dam2.page.html',
  styleUrls: ['./dam2.page.scss'],
})
export class Dam2Page implements OnInit {

  

  constructor() { }

  items = [
    { id: 0, value: 'Procesos y Servicios' ,color: 'danger', isChecked: true},
    { id: 1, value: 'Desarrollo de Interfaces' ,color: 'primary', isChecked: true},
    { id: 2, value: 'Sistemas de Gestión Empresarial' ,color: 'secondary', isChecked: false},
    { id: 3, value: 'Acceso a Datos' ,color: 'light', isChecked: true},
    { id: 4, value: 'Programación multimedia' ,color: 'dark', isChecked: false},
    { id: 5, value: 'Empresas' ,color: 'danger' ,isChecked: false},
  ]
  
  trackItems(index: number, itemObject: any) {
    return itemObject.value, itemObject.id, itemObject.color, itemObject.isChecked;
  }
  
  ngOnInit() {
  }

}

