import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {
  mostrare: boolean;
  constructor() { }

  ngOnInit() {
    this.mostrare = false;
  }

mostrar(){
  this.mostrare = false;
}
 
}
