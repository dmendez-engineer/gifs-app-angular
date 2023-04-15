import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http:HttpClient) {

      if(localStorage.getItem('historial')){
        this._historial=JSON.parse(localStorage.getItem('historial')!);

      }
      this.resultados=JSON.parse(localStorage.getItem('resultados')!)||[];
   }

  private apiKey:string='x1EYaYHFSRy08iOx9J0Qb8QRewMAA9Wx';
  private servicioUrl='https://api.giphy.com/v1/gifs';
  private _historial:string[]=[];

  public resultados:Gif[]=[];

  get historial(){

    return [...this._historial];
  }
  public buscarGifs(query:string){

    query=query.trim().toLowerCase();

      if(!this._historial.includes(query)){
        this._historial.unshift(query);
        this._historial=this._historial.splice(0,10);


        localStorage.setItem('historial',JSON.stringify(this._historial));
      }

      const params = new HttpParams().set('api_key',this.apiKey)
      .set('limit','10')
      .set('q',query);

      this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params:params})
      .subscribe((data)=>{
        console.log(data.data);
        this.resultados=data.data;

        localStorage.setItem('resultados',JSON.stringify(this.resultados));
      });



    console.log(this._historial);
  }

}
