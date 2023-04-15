import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  //@ViewChild('numeroRef') numero!:ElementRef<HTMLInputElement>;

  public buscar(){

    const valor=this.txtBuscar.nativeElement.value;

    if(valor.trim().length==0){
      return;
    }


      this.gifsService.buscarGifs(valor);
      this.txtBuscar.nativeElement.value='';

  }
  /*
  public mostrar(){
      alert(this.numero.nativeElement.value);
  }*/


}
