import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

    resul:any[]=[]
  constructor(private gifService:GifsService) {

      this.resul=JSON.parse(localStorage.getItem('resultados')!);

   }

  ngOnInit(): void {
  }
  get resultados(){
    return this.gifService.resultados;
  }



}
