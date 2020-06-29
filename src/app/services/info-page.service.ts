import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InfoPageInterface} from "../interfaces/info-page.interface";

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {
  info: InfoPageInterface = {};
  charged = false;
  articulos : any [] = [];

  constructor( private http: HttpClient) {

    this.cargarInfo();
    this.cargarArticulos();
  }

  private cargarInfo() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPageInterface) =>{

        this.charged = true;
        this.info = resp;
      });
  }

  private cargarArticulos(){
    this.http.get('https://angular-blog-test-1d9a1.firebaseio.com/articulos.json')
      .subscribe( (resp: any[]) =>{
        this.articulos = resp;
      });
  }
}
