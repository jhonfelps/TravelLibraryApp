import { Component, OnInit, Input } from '@angular/core';
import { libro } from '../libro';
import { libroService } from '../libro.service';
import { ModalService } from './modal.service';

@Component({
  selector: 'detalle-libro',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() libro: libro;

  titulo: string = "Detalle del libro";
  public fotoSeleccionada: File;
  progreso: number = 0;

  constructor(private libroService: libroService,
    public modalService: ModalService) { }

  ngOnInit() { 
  }

  cerrarModal() {
    this.modalService.cerrarModal();
    this.fotoSeleccionada = null;
    this.progreso = 0;
  }

}

